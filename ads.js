// Modified script with bug fixes and improvements

document.addEventListener('DOMContentLoaded', () => { const firebaseConfig = { apiKey: "AIzaSyBNhvhiGQiZ3t-FNEGl46Xi4XYrFsHgLc", authDomain: "apkmalia-38ac2.firebaseapp.com", databaseURL: "https://apkmalia-38ac2-default-rtdb.firebaseio.com", projectId: "apkmalia-38ac2", storageBucket: "apkmalia-38ac2.appspot.com", messagingSenderId: "764227278305", appId: "1:764227278305:web:038a8cd3f0aff2af65aea0" };

if (!firebase.apps.length) firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const database = firebase.database();

firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL).catch(error => {
    alert("Persistence Error: " + error.message);
});

// UI Elements
const authScreen = document.getElementById('authScreen');
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
const loginEmail = document.getElementById('loginEmail');
const loginPassword = document.getElementById('loginPassword');
const loginButton = document.getElementById('loginButton');
const showRegisterLink = document.getElementById('showRegister');
const registerEmail = document.getElementById('registerEmail');
const registerPassword = document.getElementById('registerPassword');
const registerButton = document.getElementById('registerButton');
const showLoginLink = document.getElementById('showLogin');

const mainScreen = document.getElementById('mainScreen');
const balanceElement = document.getElementById('balance');
const impressionsElement = document.getElementById('impressions');
const collectNowButton = document.getElementById('collectNowButton');
const withdrawButton = document.getElementById('withdrawButton');
const logoutButton = document.getElementById('logoutButton');

const adScreen = document.getElementById('adScreen');
const timerElement = document.getElementById('timer');
const adPopup = document.getElementById('adPopup');
const closePopupAndOpenAdButton = document.getElementById('closePopupAndOpenAd');

const withdrawPopup = document.getElementById('withdrawPopup');
const currentBalanceWithdraw = document.getElementById('currentBalanceWithdraw');
const minWithdrawAmountElement = document.getElementById('minWithdrawAmount');
const withdrawAmountInput = document.getElementById('withdrawAmount');
const paymentMethodSelect = document.getElementById('paymentMethod');
const accountDetailsInput = document.getElementById('accountDetails');
const submitWithdrawRequestButton = document.getElementById('submitWithdrawRequest');
const closeWithdrawPopup = document.getElementById('closeWithdrawPopup');

const ADSTERRA_DIRECT_LINK = "https://www.profitableratecpm.com/zd7mx2cw?key=dcfbb54f81844146ce133102f28f6e25";
const AD_VIEW_DURATION = 30;
const EARNING_PER_IMPRESSION = 0.30; // Changed from Rs.0.02
const MIN_WITHDRAW_AMOUNT = 250; // Changed from Rs.100

let currentUserUid = null;
let userBalanceRef = null;
let userImpressionsRef = null;
let userSpecificWithdrawalsRef = null;
let timerInterval;
let adWindow = null;
let adTabOpenedTime = 0;
let isAdProcessActive = false;
let hasImpressionCounted = false;
let timerRemaining = AD_VIEW_DURATION;
let currentBalance = 0;

function resetAuthFormVisibility() {
    loginForm.style.display = 'block';
    registerForm.style.display = 'none';
}

showRegisterLink.addEventListener('click', e => {
    e.preventDefault();
    loginForm.style.display = 'none';
    registerForm.style.display = 'block';
});

showLoginLink.addEventListener('click', e => {
    e.preventDefault();
    registerForm.style.display = 'none';
    loginForm.style.display = 'block';
});

registerButton.addEventListener('click', () => {
    const email = registerEmail.value;
    const password = registerPassword.value;

    if (!email || !password) return alert("Enter email and password");

    auth.createUserWithEmailAndPassword(email, password)
        .then(userCredential => {
            const user = userCredential.user;
            return database.ref('payments/' + user.uid).set({
                balance: 0,
                impressions: 0,
                email: user.email
            });
        })
        .then(() => {
            alert("\u0622\u067e \u06a9\u0627 \u0627\u06a9\u0627\u0624\u0646\u0679 \u06a9\u0627\u0645\u06cc\u0627\u0628\u06cc \u0633\u06d2 \u0628\u0646 \u06af\u06cc\u0627 \u06c1\u06d2");
        })
        .catch(error => {
            alert("Registration error: " + error.message);
        });
});

loginButton.addEventListener('click', () => {
    const email = loginEmail.value;
    const password = loginPassword.value;

    if (!email || !password) return alert("Enter email and password");

    auth.signInWithEmailAndPassword(email, password)
        .then(() => {
            alert("\u0622\u067e \u06a9\u0627\u0645\u06cc\u0627\u0628\u06cc \u0633\u06d2 \u0644\u0627\u06af \u0627\u0646 \u06c1\u0648 \u06af\u0626\u06d2 \u06c1\u06cc\u06ba");
        })
        .catch(error => {
            alert("Login error: " + error.message);
        });
});

logoutButton.addEventListener('click', () => {
    auth.signOut().then(() => alert("Logged out."));
});

auth.onAuthStateChanged(user => {
    if (user) {
        currentUserUid = user.uid;
        authScreen.classList.remove('active');
        mainScreen.classList.add('active');

        userBalanceRef = database.ref('payments/' + currentUserUid + '/balance');
        userImpressionsRef = database.ref('payments/' + currentUserUid + '/impressions');
        userSpecificWithdrawalsRef = database.ref('payments/' + currentUserUid + '/withdrawals');

        userBalanceRef.on('value', snapshot => {
            currentBalance = snapshot.val() || 0;
            balanceElement.textContent = `${currentBalance.toFixed(2)} PKR`;
            currentBalanceWithdraw.textContent = `${currentBalance.toFixed(2)} PKR`;
            minWithdrawAmountElement.textContent = `${MIN_WITHDRAW_AMOUNT.toFixed(2)} PKR`;
        });

        userImpressionsRef.on('value', snapshot => {
            impressionsElement.textContent = snapshot.val() || 0;
        });
    } else {
        currentUserUid = null;
        [userBalanceRef, userImpressionsRef, userSpecificWithdrawalsRef].forEach(ref => ref && ref.off());
        mainScreen.classList.remove('active');
        adScreen.classList.remove('active');
        authScreen.classList.add('active');
        resetAuthFormVisibility();
    }
});

collectNowButton.addEventListener('click', () => {
    if (!currentUserUid) return alert("Login required!");
    if (!navigator.onLine) return alert("Internet required.");
    adPopup.style.display = 'flex';
});

closePopupAndOpenAdButton.addEventListener('click', () => {
    adPopup.style.display = 'none';
    startAdProcess();
});

function startAdProcess() {
    if (isAdProcessActive) return;

    isAdProcessActive = true;
    hasImpressionCounted = false;
    timerRemaining = AD_VIEW_DURATION;
    clearInterval(timerInterval);
    if (adWindow && !adWindow.closed) adWindow.close();

    mainScreen.classList.remove('active');
    adScreen.classList.add('active');
    timerElement.textContent = timerRemaining;
    adWindow = window.open(ADSTERRA_DIRECT_LINK, '_blank');
    adTabOpenedTime = Date.now();

    timerInterval = setInterval(() => {
        timerRemaining--;
        timerElement.textContent = timerRemaining >= 0 ? timerRemaining : "Time Up!";
        if (timerRemaining < 0) clearInterval(timerInterval);
    }, 1000);
}

window.onfocus = function () {
    if (isAdProcessActive && currentUserUid && !hasImpressionCounted) {
        const timeSpent = (Date.now() - adTabOpenedTime) / 1000;
        if (timeSpent >= AD_VIEW_DURATION) {
            database.ref('payments/' + currentUserUid).transaction(data => {
                if (!data) return { balance: EARNING_PER_IMPRESSION, impressions: 1 };
                data.balance = (data.balance || 0) + EARNING_PER_IMPRESSION;
                data.impressions = (data.impressions || 0) + 1;
                return data;
            }).then(() => {
                alert("Ad completed, Rs.0.30 added.");
                hasImpressionCounted = true;
            }).finally(() => {
                isAdProcessActive = false;
                clearInterval(timerInterval);
                if (adWindow && !adWindow.closed) adWindow.close();
                adScreen.classList.remove('active');
                mainScreen.classList.add('active');
            });
        } else {
            alert("Watch full ad. Time left: " + (AD_VIEW_DURATION - Math.floor(timeSpent)) + "s");
            isAdProcessActive = false;
            clearInterval(timerInterval);
            if (adWindow && !adWindow.closed) adWindow.close();
            adScreen.classList.remove('active');
            mainScreen.classList.add('active');
        }
    }
};

withdrawButton.addEventListener('click', () => {
    if (!currentUserUid) return alert("Login first!");
    if (!navigator.onLine) return alert("No internet.");
    if (currentBalance < MIN_WITHDRAW_AMOUNT) return alert("Minimum Rs.250 required.");

    userSpecificWithdrawalsRef.once('value', snapshot => {
        let hasPending = false;
        snapshot.forEach(child => {
            if (child.val().status === 'Pending' || child.val().status === 'Processing') hasPending = true;
        });

        if (hasPending) return alert("You already have a pending request.");
        withdrawAmountInput.value = currentBalance.toFixed(2);
        accountDetailsInput.value = '';
        paymentMethodSelect.value = '';
        withdrawPopup.style.display = 'flex';
    });
});

closeWithdrawPopup.addEventListener('click', () => {
    withdrawPopup.style.display = 'none';
});

submitWithdrawRequestButton.addEventListener('click', () => {
    const amount = parseFloat(withdrawAmountInput.value);
    const method = paymentMethodSelect.value;
    const account = accountDetailsInput.value;

    if (isNaN(amount) || amount < MIN_WITHDRAW_AMOUNT || amount > currentBalance)
        return alert("Enter valid amount.");
    if (!method) return alert("Select payment method.");
    if (!account) return alert("Enter account details.");

    const withdrawal = {
        userId: currentUserUid,
        userEmail: auth.currentUser.email,
        amount,
        method,
        accountDetails: account,
        requestDate: new Date().toISOString(),
        status: 'Pending'
    };

    userSpecificWithdrawalsRef.push(withdrawal).then(() => {
        alert("Withdraw request submitted.");
        return userBalanceRef.set(currentBalance - amount);
    }).then(() => {
        withdrawPopup.style.display = 'none';
    }).catch(err => {
        alert("Error: " + err.message);
    });
});

resetAuthFormVisibility();

});

