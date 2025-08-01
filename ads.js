
        document.addEventListener('DOMContentLoaded', (event) => {
            const firebaseConfig = {
                apiKey: "AIzaSyBNhvhiGQiZ3t7-FNEGl46Xi4XYrFsHgLc",
                authDomain: "apkmalia-38ac2.firebaseapp.com",
                databaseURL: "https://apkmalia-38ac2-default-rtdb.firebaseio.com",
                projectId: "apkmalia-38ac2",
                storageBucket: "apkmalia-38ac2.appspot.com",
                messagingSenderId: "764227278305",
                appId: "1:764227278305:web:038a8cd3f0aff2af65aea0"
            };

            if (!firebase.apps.length) {
                firebase.initializeApp(firebaseConfig);
            }

            const auth = firebase.auth();
            const database = firebase.database();

            firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
                .then(() => {
                    console.log(getTranslation('alertFirebasePersistenceError') + " (set to LOCAL).");
                })
                .catch((error) => {
                    console.error(getTranslation('alertFirebasePersistenceError'), error);
                    alert(getTranslation('alertFirebasePersistenceError') + ": " + error.message);
                });

            const ADSTERRA_DIRECT_LINK = "https://www.profitableratecpm.com/zd7mx2cw?key=dcfbb54f81844146ce133102f28f6e25";
            const AD_VIEW_DURATION = 30;
            const EARNING_PER_IMPRESSION = 0.30;
            const MIN_WITHDRAW_AMOUNT = 100;

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

            // --- Authentication Logic ---

            // Register User
            registerButton.addEventListener('click', () => {
                const email = registerEmail.value;
                const password = registerPassword.value;

                if (!email || !password) {
                    alert(getTranslation('alertEmailPasswordRequired'));
                    return;
                }

                auth.createUserWithEmailAndPassword(email, password)
                    .then((userCredential) => {
                        const user = userCredential.user;
                        database.ref('payments').push({
                            balance: 0,
                            impressions: 0,
                            email: user.email,
                            userId: user.uid // userId ko store kar rahe hain
                        }).then(() => {
                            alert("Ap Kamayabi Se Register Howe Hai");
                        }).catch((error) => {
                            console.error(getTranslation('alertAccountCreationError'), error);
                            alert(getTranslation('alertAccountCreationError') + " " + error.message);
                        });
                    })
                    .catch((error) => {
                        alert(getTranslation('alertRegistrationError') + " " + error.message);
                    });
            });

            // Login User
            loginButton.addEventListener('click', () => {
                const email = loginEmail.value;
                const password = loginPassword.value;

                if (!email || !password) {
                    alert(getTranslation('alertEmailPasswordRequired'));
                    return;
                }

                auth.signInWithEmailAndPassword(email, password)
                    .then(() => {
                        // Login successful, onAuthStateChanged will handle UI
                    })
                    .catch((error) => {
                        if (error.code === 'auth/wrong-password') {
                            alert("your password wrong");
                        } else {
                            alert(getTranslation('alertLoginError') + " " + error.message);
                        }
                    });
            });

            // Logout User
            logoutButton.addEventListener('click', () => {
                auth.signOut().then(() => {
                    alert(getTranslation('alertLogoutSuccess'));
                }).catch((error) => {
                    console.error(getTranslation('alertLogoutError'), error);
                    alert(getTranslation('alertLogoutError') + " " + error.message);
                });
            });

            // Toggle between login and register forms
            showRegisterLink.addEventListener('click', (e) => {
                e.preventDefault();
                loginForm.style.display = 'none';
                registerForm.style.display = 'block';
            });

            showLoginLink.addEventListener('click', (e) => {
                e.preventDefault();
                registerForm.style.display = 'none';
                loginForm.style.display = 'block';
            });

            // Firebase Authentication State Observer
            auth.onAuthStateChanged((user) => {
                if (user) {
                    currentUserUid = user.uid;

                    if (!isAdProcessActive) {
                        authScreen.classList.remove('active');
                        mainScreen.classList.add('active');
                        adScreen.classList.remove('active');
                    }

                    // --- UPDATED LOGIC TO FIND THE CORRECT AUTO_ID ---
                    database.ref('payments').orderByChild('userId').equalTo(currentUserUid).once('value', (snapshot) => {
                        if (snapshot.exists()) {
                            const paymentId = Object.keys(snapshot.val())[0];
                            console.log("Found user payment ID:", paymentId);

                            userBalanceRef = database.ref('payments/' + paymentId + '/balance');
                            userImpressionsRef = database.ref('payments/' + paymentId + '/impressions');
                            userSpecificWithdrawalsRef = database.ref('payments/' + paymentId + '/withdrawals');

                            // Attach real-time listeners to the correct path
                            userBalanceRef.on('value', (balanceSnapshot) => {
                                const newBalance = balanceSnapshot.val() || 0;
                                console.log("Real-time balance update received from correct path:", newBalance);
                                balanceElement.textContent = newBalance.toFixed(2);
                                currentBalance = newBalance;
                            });

                            userImpressionsRef.on('value', (impressionsSnapshot) => {
                                const impressions = impressionsSnapshot.val() || 0;
                                console.log("Real-time impressions update received from correct path:", impressions);
                                impressionsElement.textContent = impressions;
                            });
                        } else {
                            console.warn("User's payment data not found in the database.");
                            // Handle case where user is logged in but payment data is missing
                        }
                    });
                } else {
                    currentUserUid = null;
                    if (userBalanceRef) userBalanceRef.off();
                    if (userImpressionsRef) userImpressionsRef.off();
                    if (userSpecificWithdrawalsRef) userSpecificWithdrawalsRef.off();

                    mainScreen.classList.remove('active');
                    adScreen.classList.remove('active');
                    authScreen.classList.add('active');

                    loginEmail.value = '';
                    loginPassword.value = '';
                    registerEmail.value = '';
                    registerPassword.value = '';

                    isAdProcessActive = false;
                    hasImpressionCounted = false;
                    clearInterval(timerInterval);
                    if (adWindow && !adWindow.closed) {
                        try {
                            adWindow.close();
                        } catch (e) {
                            console.warn("Could not close ad window on logout:", e);
                        }
                    }
                }
            });

            // --- Earning Logic ---

            // Show popup before opening ad
            collectNowButton.addEventListener('click', () => {
                if (!currentUserUid) {
                    alert(getTranslation('alertLoginRegisterRequired'));
                    return;
                }

                if (!navigator.onLine) {
                    alert(getTranslation('alertNoInternetCollect'));
                    console.log("Offline: Cannot start ad process.");
                    return;
                }

                adPopup.style.display = 'flex';
            });

            closePopupAndOpenAdButton.addEventListener('click', () => {
                adPopup.style.display = 'none';
                startAdProcess();
            });

            function startAdProcess() {
                if (isAdProcessActive) {
                    console.log("Ad process already active. Skipping.");
                    return;
                }

                isAdProcessActive = true;
                hasImpressionCounted = false;
                timerRemaining = AD_VIEW_DURATION;

                if (timerInterval) {
                    clearInterval(timerInterval);
                }
                if (adWindow && !adWindow.closed) {
                    try {
                        adWindow.close();
                    } catch (e) {
                        console.warn("Could not close previous ad window:", e);
                    }
                }

                mainScreen.classList.remove('active');
                adScreen.classList.add('active');
                timerElement.textContent = timerRemaining;

                adWindow = window.open(ADSTERRA_DIRECT_LINK, '_blank');
                adTabOpenedTime = Date.now();

                timerInterval = setInterval(() => {
                    timerRemaining--;
                    if (timerRemaining >= 0) {
                        timerElement.textContent = timerRemaining;
                    } else {
                        clearInterval(timerInterval);
                        timerElement.textContent = getTranslation('timeUpReturn');
                    }
                }, 1000);
            }

            window.onfocus = function() {
                if (isAdProcessActive && currentUserUid && !hasImpressionCounted) {
                    const timeSpentSinceAdTabOpened = (Date.now() - adTabOpenedTime) / 1000;

                    if (timeSpentSinceAdTabOpened >= AD_VIEW_DURATION) {
                        // Using the correct userBalanceRef
                        userBalanceRef.parent.transaction((currentData) => {
                            if (currentData) {
                                const newBalance = (currentData.balance || 0) + EARNING_PER_IMPRESSION;
                                const newImpressions = (currentData.impressions || 0) + 1;

                                console.log(`Impression counted. Old balance: ${currentData.balance.toFixed(2)}, New balance: ${newBalance.toFixed(2)}, Old impressions: ${currentData.impressions}, New impressions: ${newImpressions}`);

                                currentData.balance = newBalance;
                                currentData.impressions = newImpressions;

                                if (currentData.impressions > 5000 && currentData.balance < 1000) {
                                    console.warn("Suspiciously high impressions for user, might be an attempt to cheat.");
                                    currentData.impressions = 0;
                                    currentData.balance = 0;
                                    alert(getTranslation('alertSuspiciousActivity'));
                                }
                            } else {
                                // This block may not be needed if transaction is on a key that always exists
                                console.error("Transaction failed: User data not found.");
                            }
                            return currentData;
                        })
                        .then((result) => {
                            hasImpressionCounted = true;
                            const newBalance = result.snapshot.val().balance;
                            alert(getTranslation('alertImpressionCounted') + "\nNaya Balance: " + newBalance.toFixed(2) + " PKR");
                        })
                        .catch((error) => {
                            console.error("Firebase update ERROR:", error);
                            alert(getTranslation('alertMoneyUpdateIssue'));
                        })
                        .finally(() => {
                            isAdProcessActive = false;
                            clearInterval(timerInterval);
                            if (adWindow && !adWindow.closed) {
                                try {
                                    adWindow.close();
                                } catch (e) {
                                    console.warn("Could not close ad window on return:", e);
                                }
                            }
                            adScreen.classList.remove('active');
                            mainScreen.classList.add('active');
                        });

                    } else {
                        const remainingTime = AD_VIEW_DURATION - Math.floor(timeSpentSinceAdTabOpened);
                        alert(getTranslation('alertEarlyReturn', { remainingTime: remainingTime }));

                        isAdProcessActive = false;
                        clearInterval(timerInterval);
                        if (adWindow && !adWindow.closed) {
                            try {
                                adWindow.close();
                            } catch (e) {
                                console.warn("Could not close ad window after early return:", e);
                            }
                        }
                        adScreen.classList.remove('active');
                        mainScreen.classList.add('active');
                    }
                }
            };

            // --- Withdrawal Logic ---

            withdrawButton.addEventListener('click', () => {
                if (!currentUserUid) {
                    alert(getTranslation('alertLoginRequiredWithdraw'));
                    return;
                }

                if (!navigator.onLine) {
                    alert(getTranslation('alertNoInternetWithdraw'));
                    return;
                }

                if (currentBalance < MIN_WITHDRAW_AMOUNT) {
                    alert("Apka Balance Kam Hai");
                    return;
                }

                userSpecificWithdrawalsRef.once('value', snapshot => {
                    let hasPendingRequest = false;
                    snapshot.forEach(childSnapshot => {
                        const withdrawal = childSnapshot.val();
                        if (withdrawal.status === 'Pending' || withdrawal.status === 'Processing') {
                            hasPendingRequest = true;
                            return true;
                        }
                    });

                    if (hasPendingRequest) {
                        alert(getTranslation('alertPendingWithdrawal'));
                        return;
                    } else {
                        withdrawAmountInput.value = currentBalance.toFixed(2);
                        paymentMethodSelect.value = '';
                        accountDetailsInput.value = '';
                        withdrawPopup.style.display = 'flex';
                    }
                }).catch(error => {
                    console.error("Error checking pending withdrawals (under user's payments node):", error);
                    alert(getTranslation('alertWithdrawRequestError') + " " + error.message);
                });
            });

            closeWithdrawPopup.addEventListener('click', () => {
                withdrawPopup.style.display = 'none';
            });

            submitWithdrawRequestButton.addEventListener('click', () => {
                const withdrawAmount = parseFloat(withdrawAmountInput.value);
                const paymentMethod = paymentMethodSelect.value;
                const accountDetails = accountDetailsInput.value.trim();
                const userEmail = auth.currentUser ? auth.currentUser.email : 'N/A';

                if (isNaN(withdrawAmount) || withdrawAmount < MIN_WITHDRAW_AMOUNT || withdrawAmount > currentBalance) {
                    alert(getTranslation('alertEnterValidAmount', { minAmount: MIN_WITHDRAW_AMOUNT.toFixed(2), currentBalance: currentBalance.toFixed(2) }));
                    return;
                }
                if (!paymentMethod) {
                    alert(getTranslation('alertSelectPaymentMethod'));
                    return;
                }
                if (!accountDetails) {
                    alert(getTranslation('alertEnterAccountDetails'));
                    return;
                }

                const newWithdrawal = {
                    userId: currentUserUid,
                    userEmail: userEmail,
                    amount: withdrawAmount,
                    method: paymentMethod,
                    accountDetails: accountDetails,
                    requestDate: new Date().toISOString(),
                    status: 'Pending'
                };

                userSpecificWithdrawalsRef.push(newWithdrawal)
                    .then(() => {
                        alert(getTranslation('alertWithdrawRequestSuccess'));
                        return userBalanceRef.transaction((currentBalanceData) => {
                            if (currentBalanceData) {
                                return (currentBalanceData || 0) - withdrawAmount;
                            }
                            return 0;
                        });
                    })
                    .then(() => {
                        console.log("Balance deducted after withdrawal request.");
                        withdrawPopup.style.display = 'none';
                    })
                    .catch((error) => {
                        console.error(getTranslation('alertWithdrawRequestError'), error);
                        alert(getTranslation('alertWithdrawRequestError') + " " + error.message);
                    });
            });
        });
