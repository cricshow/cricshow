// language.js

const translations = {
    "en": { // English (Default, fully translated)
        "appTitle": "AP Earning App",
        "loginTitle": "Login",
        "registerTitle": "Register",
        "emailPlaceholder": "Email",
        "passwordPlaceholder": "Password",
        "loginButton": "Login",
        "noAccount": "Don't have an account?",
        "registerNow": "Register Now",
        "createAccount": "Create Account",
        "alreadyAccount": "Already have an account?",
        "loginNow": "Login Now",
        "yourBalance": "Your Balance",
        "totalImpressions": "Total Impressions",
        "collectNowButton": "Collect Now",
        "withdrawButton": "Withdraw",
        "logoutButton": "Logout",
        "adLoading": "Ad Loading...",
        "pleaseWait": "Please wait:",
        "seconds": "seconds",
        "timeUpReturn": "Time's up! Return.",
        "importantNotice": "Important Notice!",
        "adViewMessage": "To view the ad, go to the new tab. After **30 seconds**, return to this page yourself so your impression can be counted.",
        "gotItViewAd": "Got It, View Ad",
        "withdrawalRequest": "Withdrawal Request",
        "currentBalance": "Your Current Balance",
        "minimumWithdrawal": "Minimum Withdrawal",
        "withdrawalAmountPlaceholder": "Withdrawal Amount (PKR)",
        "selectPaymentMethod": "Select Payment Method",
        "accountDetailsPlaceholder": "Account Number / ID (e.g., JazzCash: 03xxxxxxxxx)",
        "submitRequest": "Submit Request",
        "closeButton": "Close",
        "alertLoginRegisterRequired": "Please login or register to earn money.",
        "alertNoInternetCollect": "Your internet connection is not available. Please connect to the internet and try again.",
        "alertLoginRequiredWithdraw": "Please login to request withdrawal.",
        "alertNoInternetWithdraw": "Your internet connection is not available. Internet is required for withdrawal request.",
        "alertInsufficientBalance": "Minimum balance for withdrawal is {minAmount} PKR. Your current balance is {currentBalance} PKR.",
        "alertPendingWithdrawal": "You have a pending withdrawal request already. Please wait for it to complete before submitting a new request.",
        "alertEnterValidAmount": "Please enter a valid amount. Minimum {minAmount} PKR and not more than your current balance {currentBalance} PKR.",
        "alertSelectPaymentMethod": "Please select a payment method.",
        "alertEnterAccountDetails": "Please enter account number or details.",
        "alertWithdrawRequestSuccess": "Your withdrawal request has been successfully submitted. It will be processed soon.",
        "alertWithdrawRequestError": "Error submitting withdrawal request:",
        "alertUserCreatedSuccess": "Registration successful! Now login.",
        "alertAccountCreationError": "Error creating account:",
        "alertRegistrationError": "Registration error:",
        "alertLoginError": "Login error:",
        "alertLogoutSuccess": "You have been logged out.",
        "alertLogoutError": "Logout error:",
        "alertEmailPasswordRequired": "Please enter email and password.",
        "alertFirebasePersistenceError": "Error setting Firebase persistence:",
        "alertImpressionCounted": "Congratulations! Your impression has been counted and money has been added.",
        "alertMoneyUpdateIssue": "There is an issue updating money, please try again later.",
        "alertEarlyReturn": "You returned before 30 seconds. Therefore, your impression could not be included. Please wait for {remainingTime} more seconds on the ad tab and then return.",
        "alertSuspiciousActivity": "Your activity has been found unusual, your balance and impressions have been reset. Please act fairly.",
        "currencyPKR": "PKR",
        "currencyUSD": "$",
        "selectLanguage": "Select Language:"
    },
    "ur": { // Urdu (Fully translated)
        "appTitle": "اے پی ارننگ ایپ",
        "loginTitle": "لاگ ان",
        "registerTitle": "رجسٹر کریں",
        "emailPlaceholder": "ای میل",
        "passwordPlaceholder": "پاس ورڈ",
        "loginButton": "لاگ ان کریں",
        "noAccount": "اکاؤنٹ نہیں ہے؟",
        "registerNow": "رجسٹر کریں ابھی",
        "createAccount": "اکاؤنٹ بنائیں",
        "alreadyAccount": "پہلے سے اکاؤنٹ ہے؟",
        "loginNow": "لاگ ان کریں ابھی",
        "yourBalance": "آپ کا بیلنس",
        "totalImpressions": "کل امپریشنز",
        "collectNowButton": "ابھی جمع کریں",
        "withdrawButton": "ودڈراول",
        "logoutButton": "لاگ آؤٹ",
        "adLoading": "ایڈ لوڈ ہو رہا ہے...",
        "pleaseWait": "براہ کرم انتظار کریں:",
        "seconds": "سیکنڈ",
        "timeUpReturn": "وقت پورا! واپس آئیں۔",
        "importantNotice": "اہم اطلاع!",
        "adViewMessage": "ایڈ دیکھنے کے لیے نئے ٹیب پر جائیں۔ **30 سیکنڈ** کے بعد خود واپس اس پیج پر آئیں تاکہ آپ کا امپریشن کاؤنٹ ہو سکے۔",
        "gotItViewAd": "سمجھ گیا، ایڈ دیکھیں",
        "withdrawalRequest": "ودڈراول کی درخواست",
        "currentBalance": "آپ کا موجودہ بیلنس",
        "minimumWithdrawal": "کم از کم ودڈراول",
        "withdrawalAmountPlaceholder": "ودڈراول رقم (PKR)",
        "selectPaymentMethod": "پیمنٹ میتھڈ منتخب کریں",
        "accountDetailsPlaceholder": "اکاؤنٹ نمبر / آئی ڈی (مثال: JazzCash: 03xxxxxxxxx)",
        "submitRequest": "درخواست بھیجیں",
        "closeButton": "بند کریں",
        "alertLoginRegisterRequired": "پہلے لاگ ان یا رجسٹر کریں تاکہ پیسے جمع کر سکیں۔",
        "alertNoInternetCollect": "آپ کا انٹرنیٹ کنکشن نہیں ہے۔ براہ کرم انٹرنیٹ کنیکٹ کر کے دوبارہ کوشش کریں۔",
        "alertLoginRequiredWithdraw": "براہ کرم لاگ ان کریں تاکہ ودڈراول کی درخواست دے سکیں۔",
        "alertNoInternetWithdraw": "آپ کا انٹرنیٹ کنکشن نہیں ہے۔ ودڈراول کی درخواست کے لیے انٹرنیٹ درکار ہے۔",
        "alertInsufficientBalance": "ودڈراول کے لیے کم از کم بیلنس {minAmount} PKR درکار ہے۔ آپ کا موجودہ بیلنس {currentBalance} PKR ہے۔",
        "alertPendingWithdrawal": "آپ کی ایک زیر التواء ودڈراول درخواست پہلے سے موجود ہے۔ نئی درخواست دینے سے پہلے اس کے مکمل ہونے کا انتظار کریں۔",
        "alertEnterValidAmount": "براہ کرم درست رقم درج کریں۔ کم از کم {minAmount} PKR اور آپ کے موجودہ بیلنس {currentBalance} PKR سے زیادہ نہیں۔",
        "alertSelectPaymentMethod": "براہ کرم پیمنٹ میتھڈ منتخب کریں۔",
        "alertEnterAccountDetails": "براہ کرم اکاؤنٹ نمبر یا تفصیلات درج کریں۔",
        "alertWithdrawRequestSuccess": "آپ کی ودڈراول کی درخواست کامیابی سے بھیج دی گئی ہے۔ جلد ہی پروسیس کی جائے گی۔",
        "alertWithdrawRequestError": "ودڈراول کی درخواست بھیجنے میں ایرر:",
        "alertUserCreatedSuccess": "رجسٹریشن کامیاب! اب لاگ ان کریں۔",
        "alertAccountCreationError": "اکاؤنٹ بنانے میں ایرر:",
        "alertRegistrationError": "رجسٹریشن میں ایرر:",
        "alertLoginError": "لاگ ان میں ایرر:",
        "alertLogoutSuccess": "آپ لاگ آؤٹ ہو گئے ہیں۔",
        "alertLogoutError": "لاگ آؤٹ میں ایرر:",
        "alertEmailPasswordRequired": "براہ کرم ای میل اور پاس ورڈ درج کریں۔",
        "alertFirebasePersistenceError": "Firebase سیشن برقرار رکھنے میں ایرر:",
        "alertImpressionCounted": "مبارک ہو! آپ کا امپریشن کاؤنٹ ہو گیا اور پیسے جمع ہو گئے۔",
        "alertMoneyUpdateIssue": "پیسے اپ ڈیٹ کرنے میں کوئی مسئلہ ہے، براہ کرم بعد میں کوشش کریں۔",
        "alertEarlyReturn": "آپ 30 سیکنڈ سے پہلے واپس آئے ہیں۔ اس لیے آپ کا امپریشن شامل نہیں کیا جا سکا۔ براہ کرم ایڈ والے ٹیب پر {remainingTime} سیکنڈ مزید انتظار کریں اور پھر واپس آئیں۔",
        "alertSuspiciousActivity": "آپ کی سرگرمی غیر معمولی پائی گئی ہے، آپ کا بیلنس اور امپریشنز ری سیٹ کر دیے گئے ہیں۔ براہ کرم انصاف سے کام لیں۔",
        "currencyPKR": "PKR",
        "currencyUSD": "$",
        "selectLanguage": "زبان منتخب کریں:"
    },
    "hi": { // Hindi (Placeholder - needs proper translation)
        "appTitle": "एपी कमाई ऐप",
        "loginTitle": "लॉग इन करें",
        "registerTitle": "रजिस्टर करें",
        "emailPlaceholder": "ईमेल",
        "passwordPlaceholder": "पासवर्ड",
        "loginButton": "लॉग इन करें",
        "noAccount": "खाता नहीं है?",
        "registerNow": "अभी रजिस्टर करें",
        "createAccount": "खाता बनाएं",
        "alreadyAccount": "पहले से ही खाता है?",
        "loginNow": "अभी लॉग इन करें",
        "yourBalance": "आपका बैलेंस",
        "totalImpressions": "कुल इम्प्रेशन",
        "collectNowButton": "अभी इकट्ठा करें",
        "withdrawButton": "निकासी",
        "logoutButton": "लॉग आउट करें",
        "adLoading": "विज्ञापन लोड हो रहा है...",
        "pleaseWait": "कृपया प्रतीक्षा करें:",
        "seconds": "सेकंड",
        "timeUpReturn": "समय समाप्त! वापस आएं।",
        "importantNotice": "महत्वपूर्ण सूचना!",
        "adViewMessage": "विज्ञापन देखने के लिए नए टैब पर जाएं। **30 सेकंड** के बाद खुद इस पेज पर वापस आएं ताकि आपका इम्प्रेशन गिना जा सके।",
        "gotItViewAd": "समझ गए, विज्ञापन देखें",
        "withdrawalRequest": "निकासी अनुरोध",
        "currentBalance": "आपका वर्तमान बैलेंस",
        "minimumWithdrawal": "न्यूनतम निकासी",
        "withdrawalAmountPlaceholder": "निकासी राशि (PKR)", // Changed to PKR (if needed, adjust per country)
        "selectPaymentMethod": "भुगतान विधि चुनें",
        "accountDetailsPlaceholder": "खाता संख्या / आईडी (उदाहरण: JazzCash: 03xxxxxxxxx)",
        "submitRequest": "अनुरोध सबमिट करें",
        "closeButton": "बंद करें",
        "alertLoginRegisterRequired": "पैसे कमाने के लिए कृपया लॉग इन या रजिस्टर करें।",
        "alertNoInternetCollect": "आपका इंटरनेट कनेक्शन उपलब्ध नहीं है। कृपया इंटरनेट से कनेक्ट करें और पुनः प्रयास करें।",
        "alertLoginRequiredWithdraw": "निकासी का अनुरोध करने के लिए कृपया लॉग इन करें।",
        "alertNoInternetWithdraw": "आपका इंटरनेट कनेक्शन उपलब्ध नहीं है। निकासी अनुरोध के लिए इंटरनेट आवश्यक है।",
        "alertInsufficientBalance": "निकासी के लिए न्यूनतम बैलेंस {minAmount} PKR आवश्यक है। आपका वर्तमान बैलेंस {currentBalance} PKR है।",
        "alertPendingWithdrawal": "आपके पास पहले से ही एक लंबित निकासी अनुरोध है। कृपया एक नया अनुरोध सबमिट करने से पहले इसके पूरा होने तक प्रतीक्षा करें।",
        "alertEnterValidAmount": "कृपया एक वैध राशि दर्ज करें। न्यूनतम {minAmount} PKR और आपके वर्तमान बैलेंस {currentBalance} PKR से अधिक नहीं।",
        "alertSelectPaymentMethod": "कृपया एक भुगतान विधि चुनें।",
        "alertEnterAccountDetails": "कृपया खाता संख्या या विवरण दर्ज करें।",
        "alertWithdrawRequestSuccess": "आपका निकासी अनुरोध सफलतापूर्वक सबमिट कर दिया गया है। इसे जल्द ही संसाधित किया जाएगा।",
        "alertWithdrawRequestError": "निकासी अनुरोध सबमिट करने में त्रुटि:",
        "alertUserCreatedSuccess": "पंजीकरण सफल! अब लॉग इन करें।",
        "alertAccountCreationError": "खाता बनाने में त्रुटि:",
        "alertRegistrationError": "पंजीकरण में त्रुटि:",
        "alertLoginError": "लॉग इन में त्रुटि:",
        "alertLogoutSuccess": "आप लॉग आउट हो गए हैं।",
        "alertLogoutError": "लॉग आउट में त्रुटि:",
        "alertEmailPasswordRequired": "कृपया ईमेल और पासवर्ड दर्ज करें।",
        "alertFirebasePersistenceError": "फ़ायरबेस परसिस्टेंस सेट करने में त्रुटि:",
        "alertImpressionCounted": "बधाई हो! आपका इम्प्रेशन गिना गया और पैसा जोड़ दिया गया है।",
        "alertMoneyUpdateIssue": "पैसा अपडेट करने में कोई समस्या है, कृपया बाद में पुनः प्रयास करें।",
        "alertEarlyReturn": "आप 30 सेकंड से पहले वापस आ गए। इसलिए, आपका इम्प्रेशन शामिल नहीं किया जा सका। कृपया विज्ञापन टैब पर {remainingTime} और सेकंड प्रतीक्षा करें और फिर वापस आएं।",
        "alertSuspiciousActivity": "आपकी गतिविधि असामान्य पाई गई है, आपका बैलेंस और इम्प्रेशन रीसेट कर दिए गए हैं। कृपया निष्पक्ष रूप से कार्य करें।",
        "currencyPKR": "PKR",
        "currencyUSD": "$",
        "selectLanguage": "भाषा चुनें:"
    },
    "tr": { // Turkish (Placeholder - needs proper translation)
        "appTitle": "AP Kazanma Uygulaması",
        "loginTitle": "Giriş Yap",
        "registerTitle": "Kaydol",
        "emailPlaceholder": "E-posta",
        "passwordPlaceholder": "Şifre",
        "loginButton": "Giriş Yap",
        "noAccount": "Hesabın yok mu?",
        "registerNow": "Şimdi Kaydol",
        "createAccount": "Hesap Oluştur",
        "alreadyAccount": "Zaten hesabın var mı?",
        "loginNow": "Şimdi Giriş Yap",
        "yourBalance": "Bakiyeniz",
        "totalImpressions": "Toplam Gösterim",
        "collectNowButton": "Şimdi Topla",
        "withdrawButton": "Para Çek",
        "logoutButton": "Çıkış Yap",
        "adLoading": "Reklam Yükleniyor...",
        "pleaseWait": "Lütfen bekleyin:",
        "seconds": "saniye",
        "timeUpReturn": "Süre Doldu! Geri Dönün.",
        "importantNotice": "Önemli Uyarı!",
        "adViewMessage": "Reklamı görüntülemek için yeni sekmeye gidin. **30 saniye** sonra, gösteriminizin sayılması için kendiniz bu sayfaya geri dönün.",
        "gotItViewAd": "Anladım, Reklamı Görüntüle",
        "withdrawalRequest": "Para Çekme Talebi",
        "currentBalance": "Mevcut Bakiyeniz",
        "minimumWithdrawal": "Minimum Para Çekme",
        "withdrawalAmountPlaceholder": "Para Çekme Tutarı (PKR)", // Changed to PKR (if needed, adjust per country)
        "selectPaymentMethod": "Ödeme Yöntemi Seçin",
        "accountDetailsPlaceholder": "Hesap Numarası / Kimliği (örn: JazzCash: 03xxxxxxxxx)",
        "submitRequest": "Talebi Gönder",
        "closeButton": "Kapat",
        "alertLoginRegisterRequired": "Para kazanmak için lütfen giriş yapın veya kaydolun.",
        "alertNoInternetCollect": "İnternet bağlantınız yok. Lütfen internete bağlanın ve tekrar deneyin.",
        "alertLoginRequiredWithdraw": "Para çekme talebinde bulunmak için lütfen giriş yapın.",
        "alertNoInternetWithdraw": "İnternet bağlantınız yok. Para çekme talebi için internet gereklidir.",
        "alertInsufficientBalance": "Para çekmek için minimum bakiye {minAmount} PKR gereklidir. Mevcut bakiyeniz {currentBalance} PKR'dir.",
        "alertPendingWithdrawal": "Zaten bekleyen bir para çekme talebiniz var. Yeni bir talep göndermeden önce tamamlanmasını bekleyin.",
        "alertEnterValidAmount": "Lütfen geçerli bir miktar girin. Minimum {minAmount} PKR ve mevcut bakiyeniz {currentBalance} PKR'den fazla olamaz.",
        "alertSelectPaymentMethod": "Lütfen bir ödeme yöntemi seçin.",
        "alertEnterAccountDetails": "Lütfen hesap numarası veya ayrıntılarını girin.",
        "alertWithdrawRequestSuccess": "Para çekme talebiniz başarıyla gönderildi. Yakında işleme alınacaktır.",
        "alertWithdrawRequestError": "Para çekme talebi gönderilirken hata oluştu:",
        "alertUserCreatedSuccess": "Kayıt başarılı! Şimdi giriş yapın.",
        "alertAccountCreationError": "Hesap oluşturulurken hata oluştu:",
        "alertRegistrationError": "Kayıt hatası:",
        "alertLoginError": "Giriş hatası:",
        "alertLogoutSuccess": "Çıkış yaptınız.",
        "alertLogoutError": "Çıkış yapılırken hata oluştu:",
        "alertEmailPasswordRequired": "Lütfen e-posta ve şifre girin.",
        "alertFirebasePersistenceError": "Firebase kalıcılığı ayarlanırken hata oluştu:",
        "alertImpressionCounted": "Tebrikler! Gösteriminiz sayıldı ve para eklendi.",
        "alertMoneyUpdateIssue": "Para güncellenirken bir sorun var, lütfen daha sonra tekrar deneyin.",
        "alertEarlyReturn": "30 saniyeden önce geri döndünüz. Bu nedenle gösteriminiz eklenemedi. Lütfen reklam sekmesinde {remainingTime} saniye daha bekleyin ve sonra geri dönün.",
        "alertSuspiciousActivity": "Aktiviteniz olağandışı bulundu, bakiyeniz ve gösterimleriniz sıfırlandı. Lütfen adil davranın.",
        "currencyPKR": "PKR",
        "currencyUSD": "$",
        "selectLanguage": "Dil Seçin:"
    },
    "ar": { // Arabic (Placeholder - needs proper translation)
        "appTitle": "تطبيق AP للربح",
        "loginTitle": "تسجيل الدخول",
        "registerTitle": "التسجيل",
        "emailPlaceholder": "البريد الإلكتروني",
        "passwordPlaceholder": "كلمة المرور",
        "loginButton": "تسجيل الدخول",
        "noAccount": "ليس لديك حساب؟",
        "registerNow": "سجل الآن",
        "createAccount": "إنشاء حساب",
        "alreadyAccount": "لديك حساب بالفعل؟",
        "loginNow": "سجل الدخول الآن",
        "yourBalance": "رصيدك",
        "totalImpressions": "إجمالي مرات الظهور",
        "collectNowButton": "اجمع الآن",
        "withdrawButton": "سحب",
        "logoutButton": "تسجيل الخروج",
        "adLoading": "يتم تحميل الإعلان...",
        "pleaseWait": "الرجاء الانتظار:",
        "seconds": "ثانية",
        "timeUpReturn": "انتهى الوقت! عد.",
        "importantNotice": "ملاحظة هامة!",
        "adViewMessage": "لعرض الإعلان، انتقل إلى علامة التبويب الجديدة. بعد **30 ثانية**، ارجع إلى هذه الصفحة بنفسك حتى يتم احتساب ظهورك.",
        "gotItViewAd": "فهمت، عرض الإعلان",
        "withdrawalRequest": "طلب سحب",
        "currentBalance": "رصيدك الحالي",
        "minimumWithdrawal": "الحد الأدنى للسحب",
        "withdrawalAmountPlaceholder": "مبلغ السحب (PKR)", // Changed to PKR (if needed, adjust per country)
        "selectPaymentMethod": "اختر طريقة الدفع",
        "accountDetailsPlaceholder": "رقم الحساب / الهوية (مثال: JazzCash: 03xxxxxxxxx)",
        "submitRequest": "إرسال الطلب",
        "closeButton": "إغلاق",
        "alertLoginRegisterRequired": "الرجاء تسجيل الدخول أو التسجيل لكسب المال.",
        "alertNoInternetCollect": "اتصالك بالإنترنت غير متوفر. يرجى الاتصال بالإنترنت والمحاولة مرة أخرى.",
        "alertLoginRequiredWithdraw": "الرجاء تسجيل الدخول لطلب السحب.",
        "alertNoInternetWithdraw": "اتصالك بالإنترنت غير متوفر. الإنترنت مطلوب لطلب السحب.",
        "alertInsufficientBalance": "الحد الأدنى للرصيد للسحب هو {minAmount} PKR. رصيدك الحالي هو {currentBalance} PKR.",
        "alertPendingWithdrawal": "لديك طلب سحب معلق بالفعل. يرجى الانتظار حتى يكتمل قبل تقديم طلب جديد.",
        "alertEnterValidAmount": "الرجاء إدخال مبلغ صالح. بحد أدنى {minAmount} PKR ولا يزيد عن رصيدك الحالي {currentBalance} PKR.",
        "alertSelectPaymentMethod": "الرجاء اختيار طريقة دفع.",
        "alertEnterAccountDetails": "الرجاء إدخال رقم الحساب أو التفاصيل.",
        "alertWithdrawRequestSuccess": "تم تقديم طلب السحب الخاص بك بنجاح. سيتم معالجته قريبًا.",
        "alertWithdrawRequestError": "خطأ في إرسال طلب السحب:",
        "alertUserCreatedSuccess": "التسجيل ناجح! سجل الدخول الآن.",
        "alertAccountCreationError": "خطأ في إنشاء الحساب:",
        "alertRegistrationError": "خطأ في التسجيل:",
        "alertLoginError": "خطأ في تسجيل الدخول:",
        "alertLogoutSuccess": "تم تسجيل خروجك.",
        "alertLogoutError": "خطأ في تسجيل الخروج:",
        "alertEmailPasswordRequired": "الرجاء إدخال البريد الإلكتروني وكلمة المرور.",
        "alertFirebasePersistenceError": "خطأ في تعيين ثبات Firebase:",
        "alertImpressionCounted": "تهانينا! تم احتساب ظهورك وتم إضافة المال.",
        "alertMoneyUpdateIssue": "توجد مشكلة في تحديث المال، يرجى المحاولة لاحقًا.",
        "alertEarlyReturn": "لقد عدت قبل 30 ثانية. لذلك، لم يتم تضمين ظهورك. يرجى الانتظار {remainingTime} ثانية أخرى في علامة تبويب الإعلان ثم العودة.",
        "alertSuspiciousActivity": "تم العثور على نشاطك غير عادي، وتم إعادة تعيين رصيدك ومرات ظهورك. يرجى التصرف بإنصاف.",
        "currencyPKR": "PKR",
        "currencyUSD": "$",
        "selectLanguage": "اختر اللغة:"
    },
    // For country codes, assuming English for now. You might need to add specific languages for each if desired.
    // e.g., "de" for German (Germany), "fr" for French (Canada), "fil" for Filipino (Philippines) etc.
    // For now, I'll add them as "en" with a specific label in the dropdown.
    "us": { // United States (English) - Assuming en-US for display purposes
        "appTitle": "AP Earning App (US)",
        "loginTitle": "Login",
        "registerTitle": "Register",
        "emailPlaceholder": "Email",
        "passwordPlaceholder": "Password",
        "loginButton": "Login",
        "noAccount": "Don't have an account?",
        "registerNow": "Register Now",
        "createAccount": "Create Account",
        "alreadyAccount": "Already have an account?",
        "loginNow": "Login Now",
        "yourBalance": "Your Balance",
        "totalImpressions": "Total Impressions",
        "collectNowButton": "Collect Now",
        "withdrawButton": "Withdraw",
        "logoutButton": "Logout",
        "adLoading": "Ad Loading...",
        "pleaseWait": "Please wait:",
        "seconds": "seconds",
        "timeUpReturn": "Time's up! Return.",
        "importantNotice": "Important Notice!",
        "adViewMessage": "To view the ad, go to the new tab. After **30 seconds**, return to this page yourself so your impression can be counted.",
        "gotItViewAd": "Got It, View Ad",
        "withdrawalRequest": "Withdrawal Request",
        "currentBalance": "Your Current Balance",
        "minimumWithdrawal": "Minimum Withdrawal",
        "withdrawalAmountPlaceholder": "Withdrawal Amount (USD)", // Changed to USD
        "selectPaymentMethod": "Select Payment Method",
        "accountDetailsPlaceholder": "Account Number / ID (e.g., PayPal: your@email.com)",
        "submitRequest": "Submit Request",
        "closeButton": "Close",
        "alertLoginRegisterRequired": "Please login or register to earn money.",
        "alertNoInternetCollect": "Your internet connection is not available. Please connect to the internet and try again.",
        "alertLoginRequiredWithdraw": "Please login to request withdrawal.",
        "alertNoInternetWithdraw": "Your internet connection is not available. Internet is required for withdrawal request.",
        "alertInsufficientBalance": "Minimum balance for withdrawal is {minAmount} USD. Your current balance is {currentBalance} USD.", // Changed to USD
        "alertPendingWithdrawal": "You have a pending withdrawal request already. Please wait for it to complete before submitting a new request.",
        "alertEnterValidAmount": "Please enter a valid amount. Minimum {minAmount} USD and not more than your current balance {currentBalance} USD.", // Changed to USD
        "alertSelectPaymentMethod": "Please select a payment method.",
        "alertEnterAccountDetails": "Please enter account number or details.",
        "alertWithdrawRequestSuccess": "Your withdrawal request has been successfully submitted. It will be processed soon.",
        "alertWithdrawRequestError": "Error submitting withdrawal request:",
        "alertUserCreatedSuccess": "Registration successful! Now login.",
        "alertAccountCreationError": "Error creating account:",
        "alertRegistrationError": "Registration error:",
        "alertLoginError": "Login error:",
        "alertLogoutSuccess": "You have been logged out.",
        "alertLogoutError": "Logout error:",
        "alertEmailPasswordRequired": "Please enter email and password.",
        "alertFirebasePersistenceError": "Error setting Firebase persistence:",
        "alertImpressionCounted": "Congratulations! Your impression has been counted and money has been added.",
        "alertMoneyUpdateIssue": "There is an issue updating money, please try again later.",
        "alertEarlyReturn": "You returned before 30 seconds. Therefore, your impression could not be included. Please wait for {remainingTime} more seconds on the ad tab and then return.",
        "alertSuspiciousActivity": "Your activity has been found unusual, your balance and impressions have been reset. Please act fairly.",
        "currencyPKR": "PKR", // Still available for internal use if needed
        "currencyUSD": "$",
        "selectLanguage": "Select Language:"
    },
    "gb": { // Great Britain (English)
        "appTitle": "AP Earning App (UK)",
        "loginTitle": "Login",
        "registerTitle": "Register",
        "emailPlaceholder": "Email",
        "passwordPlaceholder": "Password",
        "loginButton": "Login",
        "noAccount": "Don't have an account?",
        "registerNow": "Register Now",
        "createAccount": "Create Account",
        "alreadyAccount": "Already have an account?",
        "loginNow": "Login Now",
        "yourBalance": "Your Balance",
        "totalImpressions": "Total Impressions",
        "collectNowButton": "Collect Now",
        "withdrawButton": "Withdraw",
        "logoutButton": "Logout",
        "adLoading": "Ad Loading...",
        "pleaseWait": "Please wait:",
        "seconds": "seconds",
        "timeUpReturn": "Time's up! Return.",
        "importantNotice": "Important Notice!",
        "adViewMessage": "To view the ad, go to the new tab. After **30 seconds**, return to this page yourself so your impression can be counted.",
        "gotItViewAd": "Got It, View Ad",
        "withdrawalRequest": "Withdrawal Request",
        "currentBalance": "Your Current Balance",
        "minimumWithdrawal": "Minimum Withdrawal",
        "withdrawalAmountPlaceholder": "Withdrawal Amount (GBP)", // Changed to GBP
        "selectPaymentMethod": "Select Payment Method",
        "accountDetailsPlaceholder": "Account Number / ID (e.g., Bank Transfer: Sort Code, Account No)",
        "submitRequest": "Submit Request",
        "closeButton": "Close",
        "alertLoginRegisterRequired": "Please login or register to earn money.",
        "alertNoInternetCollect": "Your internet connection is not available. Please connect to the internet and try again.",
        "alertLoginRequiredWithdraw": "Please login to request withdrawal.",
        "alertNoInternetWithdraw": "Your internet connection is not available. Internet is required for withdrawal request.",
        "alertInsufficientBalance": "Minimum balance for withdrawal is {minAmount} GBP. Your current balance is {currentBalance} GBP.", // Changed to GBP
        "alertPendingWithdrawal": "You have a pending withdrawal request already. Please wait for it to complete before submitting a new request.",
        "alertEnterValidAmount": "Please enter a valid amount. Minimum {minAmount} GBP and not more than your current balance {currentBalance} GBP.", // Changed to GBP
        "alertSelectPaymentMethod": "Please select a payment method.",
        "alertEnterAccountDetails": "Please enter account number or details.",
        "alertWithdrawRequestSuccess": "Your withdrawal request has been successfully submitted. It will be processed soon.",
        "alertWithdrawRequestError": "Error submitting withdrawal request:",
        "alertUserCreatedSuccess": "Registration successful! Now login.",
        "alertAccountCreationError": "Error creating account:",
        "alertRegistrationError": "Registration error:",
        "alertLoginError": "Login error:",
        "alertLogoutSuccess": "You have been logged out.",
        "alertLogoutError": "Logout error:",
        "alertEmailPasswordRequired": "Please enter email and password.",
        "alertFirebasePersistenceError": "Error setting Firebase persistence:",
        "alertImpressionCounted": "Congratulations! Your impression has been counted and money has been added.",
        "alertMoneyUpdateIssue": "There is an issue updating money, please try again later.",
        "alertEarlyReturn": "You returned before 30 seconds. Therefore, your impression could not be included. Please wait for {remainingTime} more seconds on the ad tab and then return.",
        "alertSuspiciousActivity": "Your activity has been found unusual, your balance and impressions have been reset. Please act fairly.",
        "currencyPKR": "PKR",
        "currencyUSD": "$",
        "selectLanguage": "Select Language:"
    },
    "ph": { // Philippines (English, assuming for now. Could be Tagalog/Filipino 'fil')
        "appTitle": "AP Earning App (PH)",
        "loginTitle": "Login",
        "registerTitle": "Register",
        "emailPlaceholder": "Email",
        "passwordPlaceholder": "Password",
        "loginButton": "Login",
        "noAccount": "Don't have an account?",
        "registerNow": "Register Now",
        "createAccount": "Create Account",
        "alreadyAccount": "Already have an account?",
        "loginNow": "Login Now",
        "yourBalance": "Your Balance",
        "totalImpressions": "Total Impressions",
        "collectNowButton": "Collect Now",
        "withdrawButton": "Withdraw",
        "logoutButton": "Logout",
        "adLoading": "Ad Loading...",
        "pleaseWait": "Please wait:",
        "seconds": "seconds",
        "timeUpReturn": "Time's up! Return.",
        "importantNotice": "Important Notice!",
        "adViewMessage": "To view the ad, go to the new tab. After **30 seconds**, return to this page yourself so your impression can be counted.",
        "gotItViewAd": "Got It, View Ad",
        "withdrawalRequest": "Withdrawal Request",
        "currentBalance": "Your Current Balance",
        "minimumWithdrawal": "Minimum Withdrawal",
        "withdrawalAmountPlaceholder": "Withdrawal Amount (PHP)", // Changed to PHP
        "selectPaymentMethod": "Select Payment Method",
        "accountDetailsPlaceholder": "Account Number / ID (e.g., Gcash: 09xxxxxxxxx)",
        "submitRequest": "Submit Request",
        "closeButton": "Close",
        "alertLoginRegisterRequired": "Please login or register to earn money.",
        "alertNoInternetCollect": "Your internet connection is not available. Please connect to the internet and try again.",
        "alertLoginRequiredWithdraw": "Please login to request withdrawal.",
        "alertNoInternetWithdraw": "Your internet connection is not available. Internet is required for withdrawal request.",
        "alertInsufficientBalance": "Minimum balance for withdrawal is {minAmount} PHP. Your current balance is {currentBalance} PHP.", // Changed to PHP
        "alertPendingWithdrawal": "You have a pending withdrawal request already. Please wait for it to complete before submitting a new request.",
        "alertEnterValidAmount": "Please enter a valid amount. Minimum {minAmount} PHP and not more than your current balance {currentBalance} PHP.", // Changed to PHP
        "alertSelectPaymentMethod": "Please select a payment method.",
        "alertEnterAccountDetails": "Please enter account number or details.",
        "alertWithdrawRequestSuccess": "Your withdrawal request has been successfully submitted. It will be processed soon.",
        "alertWithdrawRequestError": "Error submitting withdrawal request:",
        "alertUserCreatedSuccess": "Registration successful! Now login.",
        "alertAccountCreationError": "Error creating account:",
        "alertRegistrationError": "Registration error:",
        "alertLoginError": "Login error:",
        "alertLogoutSuccess": "You have been logged out.",
        "alertLogoutError": "Logout error:",
        "alertEmailPasswordRequired": "Please enter email and password.",
        "alertFirebasePersistenceError": "Error setting Firebase persistence:",
        "alertImpressionCounted": "Congratulations! Your impression has been counted and money has been added.",
        "alertMoneyUpdateIssue": "There is an issue updating money, please try again later.",
        "alertEarlyReturn": "You returned before 30 seconds. Therefore, your impression could not be included. Please wait for {remainingTime} more seconds on the ad tab and then return.",
        "alertSuspiciousActivity": "Your activity has been found unusual, your balance and impressions have been reset. Please act fairly.",
        "currencyPKR": "PKR",
        "currencyUSD": "$",
        "selectLanguage": "Select Language:"
    },
    "pl": { // Poland (Placeholder for Polish 'pl')
        "appTitle": "AP Aplikacja do Zarabiania",
        "loginTitle": "Zaloguj się",
        "registerTitle": "Zarejestruj się",
        "emailPlaceholder": "E-mail",
        "passwordPlaceholder": "Hasło",
        "loginButton": "Zaloguj się",
        "noAccount": "Nie masz konta?",
        "registerNow": "Zarejestruj się teraz",
        "createAccount": "Utwórz konto",
        "alreadyAccount": "Masz już konto?",
        "loginNow": "Zaloguj się teraz",
        "yourBalance": "Twoje Saldo",
        "totalImpressions": "Łączna Liczba Wyświetleń",
        "collectNowButton": "Odbierz teraz",
        "withdrawButton": "Wypłać",
        "logoutButton": "Wyloguj się",
        "adLoading": "Ładowanie reklamy...",
        "pleaseWait": "Proszę czekać:",
        "seconds": "sekund",
        "timeUpReturn": "Czas minął! Wróć.",
        "importantNotice": "Ważna informacja!",
        "adViewMessage": "Aby wyświetlić reklamę, przejdź do nowej karty. Po **30 sekundach** wróć na tę stronę, aby Twoje wyświetlenie zostało policzone.",
        "gotItViewAd": "Rozumiem, wyświetl reklamę",
        "withdrawalRequest": "Żądanie Wypłaty",
        "currentBalance": "Twoje obecne saldo",
        "minimumWithdrawal": "Minimalna Wypłata",
        "withdrawalAmountPlaceholder": "Kwota Wypłaty (PLN)", // Changed to PLN
        "selectPaymentMethod": "Wybierz Metodę Płatności",
        "accountDetailsPlaceholder": "Numer konta / ID (np. Bank Transfer: PLxxxx...)",
        "submitRequest": "Wyślij Żądanie",
        "closeButton": "Zamknij",
        "alertLoginRegisterRequired": "Zaloguj się lub zarejestruj, aby zarabiać pieniądze.",
        "alertNoInternetCollect": "Brak połączenia z internetem. Połącz się z internetem i spróbuj ponownie.",
        "alertLoginRequiredWithdraw": "Zaloguj się, aby złożyć wniosek o wypłatę.",
        "alertNoInternetWithdraw": "Brak połączenia z internetem. Internet jest wymagany do złożenia wniosku o wypłatę.",
        "alertInsufficientBalance": "Minimalne saldo do wypłaty to {minAmount} PLN. Twoje obecne saldo to {currentBalance} PLN.", // Changed to PLN
        "alertPendingWithdrawal": "Masz już oczekujący wniosek o wypłatę. Poczekaj, aż zostanie on zakończony, zanim złożysz nowy wniosek.",
        "alertEnterValidAmount": "Wprowadź poprawną kwotę. Minimum {minAmount} PLN i nie więcej niż Twoje obecne saldo {currentBalance} PLN.", // Changed to PLN
        "alertSelectPaymentMethod": "Wybierz metodę płatności.",
        "alertEnterAccountDetails": "Wprowadź numer konta lub dane.",
        "alertWithdrawRequestSuccess": "Twoje żądanie wypłaty zostało pomyślnie wysłane. Zostanie przetworzone wkrótce.",
        "alertWithdrawRequestError": "Błąd podczas wysyłania żądania wypłaty:",
        "alertUserCreatedSuccess": "Rejestracja zakończona sukcesem! Teraz zaloguj się.",
        "alertAccountCreationError": "Błąd podczas tworzenia konta:",
        "alertRegistrationError": "Błąd rejestracji:",
        "alertLoginError": "Błąd logowania:",
        "alertLogoutSuccess": "Zostałeś wylogowany.",
        "alertLogoutError": "Błąd podczas wylogowywania:",
        "alertEmailPasswordRequired": "Wprowadź adres e-mail i hasło.",
        "alertFirebasePersistenceError": "Błąd ustawiania trwałości Firebase:",
        "alertImpressionCounted": "Gratulacje! Twoje wyświetlenie zostało policzone, a pieniądze zostały dodane.",
        "alertMoneyUpdateIssue": "Wystąpił problem z aktualizacją pieniędzy, spróbuj ponownie później.",
        "alertEarlyReturn": "Wróciłeś przed upływem 30 sekund. Dlatego Twoje wyświetlenie nie mogło zostać wliczone. Proszę poczekaj jeszcze {remainingTime} sekund na karcie reklamy, a następnie wróć.",
        "alertSuspiciousActivity": "Twoja aktywność została uznana za niezwykłą, Twoje saldo i wyświetlenia zostały zresetowane. Proszę postępuj uczciwie.",
        "currencyPKR": "PKR",
        "currencyUSD": "$",
        "selectLanguage": "Wybierz Język:"
    },
    "de": { // Germany (Placeholder for German 'de')
        "appTitle": "AP Verdienst-App",
        "loginTitle": "Anmelden",
        "registerTitle": "Registrieren",
        "emailPlaceholder": "E-Mail",
        "passwordPlaceholder": "Passwort",
        "loginButton": "Anmelden",
        "noAccount": "Kein Konto?",
        "registerNow": "Jetzt registrieren",
        "createAccount": "Konto erstellen",
        "alreadyAccount": "Bereits ein Konto?",
        "loginNow": "Jetzt anmelden",
        "yourBalance": "Ihr Guthaben",
        "totalImpressions": "Gesamte Impressionen",
        "collectNowButton": "Jetzt sammeln",
        "withdrawButton": "Abheben",
        "logoutButton": "Abmelden",
        "adLoading": "Werbung wird geladen...",
        "pleaseWait": "Bitte warten Sie:",
        "seconds": "Sekunden",
        "timeUpReturn": "Zeit abgelaufen! Kehren Sie zurück.",
        "importantNotice": "Wichtiger Hinweis!",
        "adViewMessage": "Um die Anzeige anzusehen, wechseln Sie zum neuen Tab. Kehren Sie nach **30 Sekunden** selbst zu dieser Seite zurück, damit Ihre Impression gezählt werden kann.",
        "gotItViewAd": "Verstanden, Anzeige ansehen",
        "withdrawalRequest": "Auszahlungsanfrage",
        "currentBalance": "Ihr aktuelles Guthaben",
        "minimumWithdrawal": "Mindestauszahlung",
        "withdrawalAmountPlaceholder": "Auszahlungsbetrag (EUR)", // Changed to EUR
        "selectPaymentMethod": "Zahlungsmethode auswählen",
        "accountDetailsPlaceholder": "Kontonummer / ID (z.B. PayPal: Ihre@email.com)",
        "submitRequest": "Anfrage senden",
        "closeButton": "Schließen",
        "alertLoginRegisterRequired": "Bitte melden Sie sich an oder registrieren Sie sich, um Geld zu verdienen.",
        "alertNoInternetCollect": "Ihre Internetverbindung ist nicht verfügbar. Bitte stellen Sie eine Internetverbindung her und versuchen Sie es erneut.",
        "alertLoginRequiredWithdraw": "Bitte melden Sie sich an, um eine Auszahlung anzufordern.",
        "alertNoInternetWithdraw": "Ihre Internetverbindung ist nicht verfügbar. Für Auszahlungsanfragen ist Internet erforderlich.",
        "alertInsufficientBalance": "Das Mindestguthaben für eine Auszahlung beträgt {minAmount} EUR. Ihr aktuelles Guthaben beträgt {currentBalance} EUR.", // Changed to EUR
        "alertPendingWithdrawal": "Sie haben bereits eine ausstehende Auszahlungsanfrage. Bitte warten Sie, bis diese abgeschlossen ist, bevor Sie eine neue Anfrage senden.",
        "alertEnterValidAmount": "Bitte geben Sie einen gültigen Betrag ein. Mindestens {minAmount} EUR und nicht mehr als Ihr aktuelles Guthaben {currentBalance} EUR.", // Changed to EUR
        "alertSelectPaymentMethod": "Bitte wählen Sie eine Zahlungsmethode aus.",
        "alertEnterAccountDetails": "Bitte geben Sie die Kontonummer oder Details ein.",
        "alertWithdrawRequestSuccess": "Ihre Auszahlungsanfrage wurde erfolgreich gesendet. Sie wird in Kürze bearbeitet.",
        "alertWithdrawRequestError": "Fehler beim Senden der Auszahlungsanfrage:",
        "alertUserCreatedSuccess": "Registrierung erfolgreich! Jetzt anmelden.",
        "alertAccountCreationError": "Fehler beim Erstellen des Kontos:",
        "alertRegistrationError": "Registrierungsfehler:",
        "alertLoginError": "Anmeldefehler:",
        "alertLogoutSuccess": "Sie wurden abgemeldet.",
        "alertLogoutError": "Fehler beim Abmelden:",
        "alertEmailPasswordRequired": "Bitte geben Sie E-Mail und Passwort ein.",
        "alertFirebasePersistenceError": "Fehler beim Festlegen der Firebase-Persistenz:",
        "alertImpressionCounted": "Herzlichen Glückwunsch! Ihre Impression wurde gezählt und Geld wurde hinzugefügt.",
        "alertMoneyUpdateIssue": "Es gibt ein Problem beim Aktualisieren des Geldes, bitte versuchen Sie es später erneut.",
        "alertEarlyReturn": "Sie sind vor 30 Sekunden zurückgekehrt. Daher konnte Ihre Impression nicht berücksichtigt werden. Bitte warten Sie weitere {remainingTime} Sekunden auf dem Anzeigen-Tab und kehren Sie dann zurück.",
        "alertSuspiciousActivity": "Ihre Aktivität wurde als ungewöhnlich befunden, Ihr Guthaben und Ihre Impressionen wurden zurückgesetzt. Bitte handeln Sie fair.",
        "currencyPKR": "PKR",
        "currencyUSD": "$",
        "selectLanguage": "Sprache auswählen:"
    },
    "mz": { // Mozambique (Placeholder, assuming Portuguese 'pt-MZ' or English 'en-MZ')
        "appTitle": "AP Ganho App (MZ)",
        "loginTitle": "Entrar",
        "registerTitle": "Registrar",
        "emailPlaceholder": "Email",
        "passwordPlaceholder": "Senha",
        "loginButton": "Entrar",
        "noAccount": "Não tem uma conta?",
        "registerNow": "Registe-se Agora",
        "createAccount": "Criar Conta",
        "alreadyAccount": "Já tem uma conta?",
        "loginNow": "Entrar Agora",
        "yourBalance": "Seu Saldo",
        "totalImpressions": "Total de Impressões",
        "collectNowButton": "Recolher Agora",
        "withdrawButton": "Levantar",
        "logoutButton": "Sair",
        "adLoading": "A carregar anúncio...",
        "pleaseWait": "Por favor, espere:",
        "seconds": "segundos",
        "timeUpReturn": "Tempo esgotado! Volte.",
        "importantNotice": "Aviso Importante!",
        "adViewMessage": "Para ver o anúncio, vá para a nova aba. Após **30 segundos**, volte a esta página para que a sua impressão possa ser contada.",
        "gotItViewAd": "Entendido, Ver Anúncio",
        "withdrawalRequest": "Pedido de Levantamento",
        "currentBalance": "Seu Saldo Atual",
        "minimumWithdrawal": "Levantamento Mínimo",
        "withdrawalAmountPlaceholder": "Valor do Levantamento (MZN)", // Changed to MZN
        "selectPaymentMethod": "Selecione o Método de Pagamento",
        "accountDetailsPlaceholder": "Número da Conta / ID (e.g., M-Pesa: 84xxxxxxxxx)",
        "submitRequest": "Enviar Pedido",
        "closeButton": "Fechar",
        "alertLoginRegisterRequired": "Por favor, entre ou registe-se para ganhar dinheiro.",
        "alertNoInternetCollect": "A sua ligação à internet não está disponível. Por favor, conecte-se à internet e tente novamente.",
        "alertLoginRequiredWithdraw": "Por favor, entre para pedir um levantamento.",
        "alertNoInternetWithdraw": "A sua ligação à internet não está disponível. É necessário internet para o pedido de levantamento.",
        "alertInsufficientBalance": "O saldo mínimo para levantamento é {minAmount} MZN. O seu saldo atual é {currentBalance} MZN.", // Changed to MZN
        "alertPendingWithdrawal": "Já tem um pedido de levantamento pendente. Por favor, espere que ele seja concluído antes de submeter um novo pedido.",
        "alertEnterValidAmount": "Por favor, insira um valor válido. Mínimo {minAmount} MZN e não mais do que o seu saldo atual {currentBalance} MZN.", // Changed to MZN
        "alertSelectPaymentMethod": "Por favor, selecione um método de pagamento.",
        "alertEnterAccountDetails": "Por favor, insira o número da conta ou detalhes.",
        "alertWithdrawRequestSuccess": "O seu pedido de levantamento foi submetido com sucesso. Será processado em breve.",
        "alertWithdrawRequestError": "Erro ao submeter pedido de levantamento:",
        "alertUserCreatedSuccess": "Registo bem-sucedido! Agora entre.",
        "alertAccountCreationError": "Erro ao criar conta:",
        "alertRegistrationError": "Erro de registo:",
        "alertLoginError": "Erro de entrada:",
        "alertLogoutSuccess": "Você foi desconectado.",
        "alertLogoutError": "Erro ao sair:",
        "alertEmailPasswordRequired": "Por favor, insira o e-mail e a senha.",
        "alertFirebasePersistenceError": "Erro ao definir a persistência do Firebase:",
        "alertImpressionCounted": "Parabéns! Sua impressão foi contada e o dinheiro foi adicionado.",
        "alertMoneyUpdateIssue": "Há um problema ao atualizar o dinheiro, por favor, tente novamente mais tarde.",
        "alertEarlyReturn": "Você voltou antes de 30 segundos. Portanto, sua impressão não pôde ser incluída. Por favor, espere mais {remainingTime} segundos na guia do anúncio e depois retorne.",
        "alertSuspiciousActivity": "Sua atividade foi considerada incomum, seu saldo e impressões foram redefinidos. Por favor, aja com justiça.",
        "currencyPKR": "PKR",
        "currencyUSD": "$",
        "selectLanguage": "Selecionar Idioma:"
    },
    "cz": { // Czech Republic (Placeholder for Czech 'cs')
        "appTitle": "AP Výdělečná Aplikace",
        "loginTitle": "Přihlásit se",
        "registerTitle": "Zaregistrovat se",
        "emailPlaceholder": "E-mail",
        "passwordPlaceholder": "Heslo",
        "loginButton": "Přihlásit se",
        "noAccount": "Nemáte účet?",
        "registerNow": "Zaregistrujte se nyní",
        "createAccount": "Vytvořit účet",
        "alreadyAccount": "Už máte účet?",
        "loginNow": "Přihlásit se nyní",
        "yourBalance": "Váš zůstatek",
        "totalImpressions": "Celkem zobrazení",
        "collectNowButton": "Sbírat nyní",
        "withdrawButton": "Vybrat",
        "logoutButton": "Odhlásit se",
        "adLoading": "Reklama se načítá...",
        "pleaseWait": "Prosím čekejte:",
        "seconds": "sekund",
        "timeUpReturn": "Čas vypršel! Vraťte se.",
        "importantNotice": "Důležité upozornění!",
        "adViewMessage": "Pro zobrazení reklamy přejděte na novou záložku. Po **30 sekundách** se sami vraťte na tuto stránku, aby se vaše zobrazení započítalo.",
        "gotItViewAd": "Rozumím, zobrazit reklamu",
        "withdrawalRequest": "Žádost o výběr",
        "currentBalance": "Váš aktuální zůstatek",
        "minimumWithdrawal": "Minimální výběr",
        "withdrawalAmountPlaceholder": "Částka výběru (CZK)", // Changed to CZK
        "selectPaymentMethod": "Vyberte způsob platby",
        "accountDetailsPlaceholder": "Číslo účtu / ID (např. Bankovní převod: 123456789/0800)",
        "submitRequest": "Odeslat žádost",
        "closeButton": "Zavřít",
        "alertLoginRegisterRequired": "Pro vydělávání peněz se prosím přihlaste nebo zaregistrujte.",
        "alertNoInternetCollect": "Vaše internetové připojení není k dispozici. Připojte se k internetu a zkuste to znovu.",
        "alertLoginRequiredWithdraw": "Pro podání žádosti o výběr se prosím přihlaste.",
        "alertNoInternetWithdraw": "Vaše internetové připojení není k dispozici. Pro žádost o výběr je nutné připojení k internetu.",
        "alertInsufficientBalance": "Minimální zůstatek pro výběr je {minAmount} CZK. Váš aktuální zůstatek je {currentBalance} CZK.", // Changed to CZK
        "alertPendingWithdrawal": "Máte již čekající žádost o výběr. Počkejte prosím, než bude dokončena, než odešlete novou žádost.",
        "alertEnterValidAmount": "Zadejte prosím platnou částku. Minimálně {minAmount} CZK a ne více než váš aktuální zůstatek {currentBalance} CZK.", // Changed to CZK
        "alertSelectPaymentMethod": "Vyberte prosím způsob platby.",
        "alertEnterAccountDetails": "Zadejte prosím číslo účtu nebo podrobnosti.",
        "alertWithdrawRequestSuccess": "Vaše žádost o výběr byla úspěšně odeslána. Bude brzy zpracována.",
        "alertWithdrawRequestError": "Chyba při odesílání žádosti o výběr:",
        "alertUserCreatedSuccess": "Registrace úspěšná! Nyní se přihlaste.",
        "alertAccountCreationError": "Chyba při vytváření účtu:",
        "alertRegistrationError": "Chyba registrace:",
        "alertLoginError": "Chyba přihlášení:",
        "alertLogoutSuccess": "Byli jste odhlášeni.",
        "alertLogoutError": "Chyba při odhlašování:",
        "alertEmailPasswordRequired": "Zadejte prosím e-mail a heslo.",
        "alertFirebasePersistenceError": "Chyba nastavení perzistence Firebase:",
        "alertImpressionCounted": "Gratulujeme! Vaše zobrazení bylo započítáno a peníze byly přidány.",
        "alertMoneyUpdateIssue": "Vyskytl se problém s aktualizací peněz, zkuste to prosím později.",
        "alertEarlyReturn": "Vrátili jste se před 30 sekundami. Proto vaše zobrazení nemohlo být zahrnuto. Počkejte prosím dalších {remainingTime} sekund na kartě reklamy a poté se vraťte.",
        "alertSuspiciousActivity": "Vaše aktivita byla shledána neobvyklou, váš zůstatek a zobrazení byly vynulovány. Prosím, jednejte spravedlivě.",
        "currencyPKR": "PKR",
        "currencyUSD": "$",
        "selectLanguage": "Vyberte Jazyk:"
    },
    "za": { // South Africa (Placeholder, assuming English 'en-ZA' or Afrikaans 'af')
        "appTitle": "AP Earning App (ZA)",
        "loginTitle": "Login",
        "registerTitle": "Register",
        "emailPlaceholder": "Email",
        "passwordPlaceholder": "Password",
        "loginButton": "Login",
        "noAccount": "Don't have an account?",
        "registerNow": "Register Now",
        "createAccount": "Create Account",
        "alreadyAccount": "Already have an account?",
        "loginNow": "Login Now",
        "yourBalance": "Your Balance",
        "totalImpressions": "Total Impressions",
        "collectNowButton": "Collect Now",
        "withdrawButton": "Withdraw",
        "logoutButton": "Logout",
        "adLoading": "Ad Loading...",
        "pleaseWait": "Please wait:",
        "seconds": "seconds",
        "timeUpReturn": "Time's up! Return.",
        "importantNotice": "Important Notice!",
        "adViewMessage": "To view the ad, go to the new tab. After **30 seconds**, return to this page yourself so your impression can be counted.",
        "gotItViewAd": "Got It, View Ad",
        "withdrawalRequest": "Withdrawal Request",
        "currentBalance": "Your Current Balance",
        "minimumWithdrawal": "Minimum Withdrawal",
        "withdrawalAmountPlaceholder": "Withdrawal Amount (ZAR)", // Changed to ZAR
        "selectPaymentMethod": "Select Payment Method",
        "accountDetailsPlaceholder": "Account Number / ID (e.g., Bank Account: 123456789)",
        "submitRequest": "Submit Request",
        "closeButton": "Close",
        "alertLoginRegisterRequired": "Please login or register to earn money.",
        "alertNoInternetCollect": "Your internet connection is not available. Please connect to the internet and try again.",
        "alertLoginRequiredWithdraw": "Please login to request withdrawal.",
        "alertNoInternetWithdraw": "Your internet connection is not available. Internet is required for withdrawal request.",
        "alertInsufficientBalance": "Minimum balance for withdrawal is {minAmount} ZAR. Your current balance is {currentBalance} ZAR.", // Changed to ZAR
        "alertPendingWithdrawal": "You have a pending withdrawal request already. Please wait for it to complete before submitting a new request.",
        "alertEnterValidAmount": "Please enter a valid amount. Minimum {minAmount} ZAR and not more than your current balance {currentBalance} ZAR.", // Changed to ZAR
        "alertSelectPaymentMethod": "Please select a payment method.",
        "alertEnterAccountDetails": "Please enter account number or details.",
        "alertWithdrawRequestSuccess": "Your withdrawal request has been successfully submitted. It will be processed soon.",
        "alertWithdrawRequestError": "Error submitting withdrawal request:",
        "alertUserCreatedSuccess": "Registration successful! Now login.",
        "alertAccountCreationError": "Error creating account:",
        "alertRegistrationError": "Registration error:",
        "alertLoginError": "Login error:",
        "alertLogoutSuccess": "You have been logged out.",
        "alertLogoutError": "Logout error:",
        "alertEmailPasswordRequired": "Please enter email and password.",
        "alertFirebasePersistenceError": "Error setting Firebase persistence:",
        "alertImpressionCounted": "Congratulations! Your impression has been counted and money has been added.",
        "alertMoneyUpdateIssue": "There is an issue updating money, please try again later.",
        "alertEarlyReturn": "You returned before 30 seconds. Therefore, your impression could not be included. Please wait for {remainingTime} more seconds on the ad tab and then return.",
        "alertSuspiciousActivity": "Your activity has been found unusual, your balance and impressions have been reset. Please act fairly.",
        "currencyPKR": "PKR",
        "currencyUSD": "$",
        "selectLanguage": "Select Language:"
    },
    "ao": { // Angola (Placeholder, assuming Portuguese 'pt-AO')
        "appTitle": "AP Ganho App (AO)",
        "loginTitle": "Entrar",
        "registerTitle": "Registrar",
        "emailPlaceholder": "Email",
        "passwordPlaceholder": "Senha",
        "loginButton": "Entrar",
        "noAccount": "Não tem uma conta?",
        "registerNow": "Registe-se Agora",
        "createAccount": "Criar Conta",
        "alreadyAccount": "Já tem uma conta?",
        "loginNow": "Entrar Agora",
        "yourBalance": "Seu Saldo",
        "totalImpressions": "Total de Impressões",
        "collectNowButton": "Recolher Agora",
        "withdrawButton": "Levantar",
        "logoutButton": "Sair",
        "adLoading": "A carregar anúncio...",
        "pleaseWait": "Por favor, espere:",
        "seconds": "segundos",
        "timeUpReturn": "Tempo esgotado! Volte.",
        "importantNotice": "Aviso Importante!",
        "adViewMessage": "Para ver o anúncio, vá para a nova aba. Após **30 segundos**, volte a esta página para que a sua impressão possa ser contada.",
        "gotItViewAd": "Entendido, Ver Anúncio",
        "withdrawalRequest": "Pedido de Levantamento",
        "currentBalance": "Seu Saldo Atual",
        "minimumWithdrawal": "Levantamento Mínimo",
        "withdrawalAmountPlaceholder": "Valor do Levantamento (AOA)", // Changed to AOA
        "selectPaymentMethod": "Selecione o Método de Pagamento",
        "accountDetailsPlaceholder": "Número da Conta / ID (e.g., Bank Transfer: IBAN)",
        "submitRequest": "Enviar Pedido",
        "closeButton": "Fechar",
        "alertLoginRegisterRequired": "Por favor, entre ou registe-se para ganhar dinheiro.",
        "alertNoInternetCollect": "A sua ligação à internet não está disponível. Por favor, conecte-se à internet e tente novamente.",
        "alertLoginRequiredWithdraw": "Por favor, entre para pedir um levantamento.",
        "alertNoInternetWithdraw": "A sua ligação à internet não está disponível. É necessário internet para o pedido de levantamento.",
        "alertInsufficientBalance": "O saldo mínimo para levantamento é {minAmount} AOA. O seu saldo atual é {currentBalance} AOA.", // Changed to AOA
        "alertPendingWithdrawal": "Já tem um pedido de levantamento pendente. Por favor, espere que ele seja concluído antes de submeter um novo pedido.",
        "alertEnterValidAmount": "Por favor, insira um valor válido. Mínimo {minAmount} AOA e não mais do que o seu saldo atual {currentBalance} AOA.", // Changed to AOA
        "alertSelectPaymentMethod": "Por favor, selecione um método de pagamento.",
        "alertEnterAccountDetails": "Por favor, insira o número da conta ou detalhes.",
        "alertWithdrawRequestSuccess": "O seu pedido de levantamento foi submetido com sucesso. Será processado em breve.",
        "alertWithdrawRequestError": "Erro ao submeter pedido de levantamento:",
        "alertUserCreatedSuccess": "Registo bem-sucedido! Agora entre.",
        "alertAccountCreationError": "Erro ao criar conta:",
        "alertRegistrationError": "Erro de registo:",
        "alertLoginError": "Erro de entrada:",
        "alertLogoutSuccess": "Você foi desconectado.",
        "alertLogoutError": "Erro ao sair:",
        "alertEmailPasswordRequired": "Por favor, insira o e-mail e a senha.",
        "alertFirebasePersistenceError": "Erro ao definir a persistência do Firebase:",
        "alertImpressionCounted": "Parabéns! Sua impressão foi contada e o dinheiro foi adicionado.",
        "alertMoneyUpdateIssue": "Há um problema ao atualizar o dinheiro, por favor, tente novamente mais tarde.",
        "alertEarlyReturn": "Você voltou antes de 30 segundos. Portanto, sua impressão não pôde ser incluída. Por favor, espere mais {remainingTime} segundos na guia do anúncio e depois retorne.",
        "alertSuspiciousActivity": "Sua atividade foi considerada incomum, seu saldo e impressões foram redefinidos. Por favor, aja com justiça.",
        "currencyPKR": "PKR",
        "currencyUSD": "$",
        "selectLanguage": "Selecionar Idioma:"
    },
    "ca": { // Canada (Placeholder, assuming English 'en-CA' or French 'fr-CA')
        "appTitle": "AP Earning App (CA)",
        "loginTitle": "Login",
        "registerTitle": "Register",
        "emailPlaceholder": "Email",
        "passwordPlaceholder": "Password",
        "loginButton": "Login",
        "noAccount": "Don't have an account?",
        "registerNow": "Register Now",
        "createAccount": "Create Account",
        "alreadyAccount": "Already have an account?",
        "loginNow": "Login Now",
        "yourBalance": "Your Balance",
        "totalImpressions": "Total Impressions",
        "collectNowButton": "Collect Now",
        "withdrawButton": "Withdraw",
        "logoutButton": "Logout",
        "adLoading": "Ad Loading...",
        "pleaseWait": "Please wait:",
        "seconds": "seconds",
        "timeUpReturn": "Time's up! Return.",
        "importantNotice": "Important Notice!",
        "adViewMessage": "To view the ad, go to the new tab. After **30 seconds**, return to this page yourself so your impression can be counted.",
        "gotItViewAd": "Got It, View Ad",
        "withdrawalRequest": "Withdrawal Request",
        "currentBalance": "Your Current Balance",
        "minimumWithdrawal": "Minimum Withdrawal",
        "withdrawalAmountPlaceholder": "Withdrawal Amount (CAD)", // Changed to CAD
        "selectPaymentMethod": "Select Payment Method",
        "accountDetailsPlaceholder": "Account Number / ID (e.g., Interac: your@email.com)",
        "submitRequest": "Submit Request",
        "closeButton": "Close",
        "alertLoginRegisterRequired": "Please login or register to earn money.",
        "alertNoInternetCollect": "Your internet connection is not available. Please connect to the internet and try again.",
        "alertLoginRequiredWithdraw": "Please login to request withdrawal.",
        "alertNoInternetWithdraw": "Your internet connection is not available. Internet is required for withdrawal request.",
        "alertInsufficientBalance": "Minimum balance for withdrawal is {minAmount} CAD. Your current balance is {currentBalance} CAD.", // Changed to CAD
        "alertPendingWithdrawal": "You have a pending withdrawal request already. Please wait for it to complete before submitting a new request.",
        "alertEnterValidAmount": "Please enter a valid amount. Minimum {minAmount} CAD and not more than your current balance {currentBalance} CAD.", // Changed to CAD
        "alertSelectPaymentMethod": "Please select a payment method.",
        "alertEnterAccountDetails": "Please enter account number or details.",
        "alertWithdrawRequestSuccess": "Your withdrawal request has been successfully submitted. It will be processed soon.",
        "alertWithdrawRequestError": "Error submitting withdrawal request:",
        "alertUserCreatedSuccess": "Registration successful! Now login.",
        "alertAccountCreationError": "Error creating account:",
        "alertRegistrationError": "Registration error:",
        "alertLoginError": "Login error:",
        "alertLogoutSuccess": "You have been logged out.",
        "alertLogoutError": "Logout error:",
        "alertEmailPasswordRequired": "Please enter email and password.",
        "alertFirebasePersistenceError": "Error setting Firebase persistence:",
        "alertImpressionCounted": "Congratulations! Your impression has been counted and money has been added.",
        "alertMoneyUpdateIssue": "There is an issue updating money, please try again later.",
        "alertEarlyReturn": "You returned before 30 seconds. Therefore, your impression could not be included. Please wait for {remainingTime} more seconds on the ad tab and then return.",
        "alertSuspiciousActivity": "Your activity has been found unusual, your balance and impressions have been reset. Please act fairly.",
        "currencyPKR": "PKR",
        "currencyUSD": "$",
        "selectLanguage": "Select Language:"
    },
    "th": { // Thailand (Placeholder for Thai 'th')
        "appTitle": "แอปพลิเคชันสร้างรายได้ AP",
        "loginTitle": "เข้าสู่ระบบ",
        "registerTitle": "ลงทะเบียน",
        "emailPlaceholder": "อีเมล",
        "passwordPlaceholder": "รหัสผ่าน",
        "loginButton": "เข้าสู่ระบบ",
        "noAccount": "ไม่มีบัญชีใช่หรือไม่?",
        "registerNow": "ลงทะเบียนตอนนี้",
        "createAccount": "สร้างบัญชี",
        "alreadyAccount": "มีบัญชีอยู่แล้ว?",
        "loginNow": "เข้าสู่ระบบตอนนี้",
        "yourBalance": "ยอดเงินของคุณ",
        "totalImpressions": "จำนวนการแสดงผลทั้งหมด",
        "collectNowButton": "รับตอนนี้",
        "withdrawButton": "ถอนเงิน",
        "logoutButton": "ออกจากระบบ",
        "adLoading": "กำลังโหลดโฆษณา...",
        "pleaseWait": "โปรดรอ:",
        "seconds": "วินาที",
        "timeUpReturn": "หมดเวลา! กลับมา",
        "importantNotice": "ประกาศสำคัญ!",
        "adViewMessage": "หากต้องการดูโฆษณา ให้ไปที่แท็บใหม่ หลังจาก **30 วินาที** ให้กลับมาที่หน้านี้เอง เพื่อให้นับการแสดงผลของคุณ",
        "gotItViewAd": "เข้าใจแล้ว, ดูโฆษณา",
        "withdrawalRequest": "คำขอถอนเงิน",
        "currentBalance": "ยอดเงินปัจจุบันของคุณ",
        "minimumWithdrawal": "การถอนขั้นต่ำ",
        "withdrawalAmountPlaceholder": "จำนวนเงินที่ถอน (THB)", // Changed to THB
        "selectPaymentMethod": "เลือกวิธีการชำระเงิน",
        "accountDetailsPlaceholder": "หมายเลขบัญชี / รหัส (เช่น PromptPay: 08xxxxxxxxx)",
        "submitRequest": "ส่งคำขอ",
        "closeButton": "ปิด",
        "alertLoginRegisterRequired": "โปรดเข้าสู่ระบบหรือลงทะเบียนเพื่อรับเงิน",
        "alertNoInternetCollect": "ไม่มีการเชื่อมต่ออินเทอร์เน็ต โปรดเชื่อมต่ออินเทอร์เน็ตแล้วลองอีกครั้ง",
        "alertLoginRequiredWithdraw": "โปรดเข้าสู่ระบบเพื่อร้องขอการถอนเงิน",
        "alertNoInternetWithdraw": "ไม่มีการเชื่อมต่ออินเทอร์เน็ต จำเป็นต้องใช้อินเทอร์เน็ตสำหรับคำขอถอนเงิน",
        "alertInsufficientBalance": "ยอดเงินขั้นต่ำสำหรับการถอนคือ {minAmount} THB ยอดเงินปัจจุบันของคุณคือ {currentBalance} THB", // Changed to THB
        "alertPendingWithdrawal": "คุณมีคำขอถอนเงินที่รอดำเนินการอยู่แล้ว โปรดรอให้เสร็จสิ้นก่อนส่งคำขอใหม่",
        "alertEnterValidAmount": "โปรดป้อนจำนวนเงินที่ถูกต้อง ขั้นต่ำ {minAmount} THB และไม่เกินยอดเงินปัจจุบันของคุณ {currentBalance} THB", // Changed to THB
        "alertSelectPaymentMethod": "โปรดเลือกวิธีการชำระเงิน",
        "alertEnterAccountDetails": "โปรดป้อนหมายเลขบัญชีหรือรายละเอียด",
        "alertWithdrawRequestSuccess": "ส่งคำขอถอนเงินของคุณเรียบร้อยแล้ว จะดำเนินการในไม่ช้า",
        "alertWithdrawRequestError": "ข้อผิดพลาดในการส่งคำขอถอนเงิน:",
        "alertUserCreatedSuccess": "ลงทะเบียนสำเร็จ! เข้าสู่ระบบตอนนี้",
        "alertAccountCreationError": "ข้อผิดพลาดในการสร้างบัญชี:",
        "alertRegistrationError": "ข้อผิดพลาดในการลงทะเบียน:",
        "alertLoginError": "ข้อผิดพลาดในการเข้าสู่ระบบ:",
        "alertLogoutSuccess": "คุณได้ออกจากระบบแล้ว",
        "alertLogoutError": "ข้อผิดพลาดในการออกจากระบบ:",
        "alertEmailPasswordRequired": "โปรดป้อนอีเมลและรหัสผ่าน",
        "alertFirebasePersistenceError": "ข้อผิดพลาดในการตั้งค่า Firebase persistence:",
        "alertImpressionCounted": "ขอแสดงความยินดี! การแสดงผลของคุณถูกนับและเพิ่มเงินแล้ว",
        "alertMoneyUpdateIssue": "มีปัญหาในการอัปเดตเงิน โปรดลองอีกครั้งในภายหลัง",
        "alertEarlyReturn": "คุณกลับมาก่อน 30 วินาที ดังนั้นการแสดงผลของคุณจึงไม่สามารถนับได้ โปรดรออีก {remainingTime} วินาทีในแท็บโฆษณาแล้วกลับมา",
        "alertSuspiciousActivity": "ตรวจพบกิจกรรมผิดปกติ ยอดเงินและการแสดงผลของคุณถูกรีเซ็ต โปรดดำเนินการอย่างยุติธรรม",
        "currencyPKR": "PKR",
        "currencyUSD": "$",
        "selectLanguage": "เลือกภาษา:"
    }
};

let currentLang = localStorage.getItem('appLanguage') || 'en'; // Default to English if not set

// Make getTranslation globally accessible
window.getTranslation = function(key, replacements = {}) {
    let text = translations[currentLang][key] || translations['en'][key] || key; // Fallback to English, then key itself
    for (const placeholder in replacements) {
        text = text.replace(`{${placeholder}}`, replacements[placeholder]);
    }
    return text;
};

// Function to set language and apply translations
function setLanguage(langCode) {
    if (translations[langCode]) {
        currentLang = langCode;
        localStorage.setItem('appLanguage', langCode);
        applyTranslations();
        updateCurrencySymbol(); // Update currency symbol based on language
    } else {
        console.warn(`Translation for language code '${langCode}' not found. Falling back to English.`);
        // Fallback to default English if the selected language is not defined
        currentLang = 'en';
        localStorage.setItem('appLanguage', 'en');
        applyTranslations();
        updateCurrencySymbol();
    }
}

// Function to apply translations to all elements with data-translate attribute
function applyTranslations() {
    // Update document title
    document.title = getTranslation('appTitle');

    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        // Only update textContent for elements that are purely for translation
        // Avoid updating elements whose content is dynamically set by main JavaScript (e.g., balance, impressions, timer)
        // Ensure buttons and links are updated
        if (element.tagName === 'BUTTON' || element.tagName === 'A' || element.tagName === 'H1' || element.tagName === 'H2' || element.tagName === 'H3' || element.tagName === 'P' || element.tagName === 'SPAN') {
            // Exclude elements that are known to be updated by main script for values
            if (!['balance', 'impressions', 'timer', 'currentBalanceWithdraw', 'minWithdrawAmount'].includes(element.id)) {
                element.textContent = getTranslation(key);
            }
        } else if (element.tagName === 'OPTION' && element.parentElement.id === 'paymentMethod') {
            // Handle select options if they are static and need translation
            element.textContent = getTranslation(key);
        }
    });

    // Manually update specific element texts for buttons/links using their IDs
    // This is safer to ensure they are always set correctly.
    const elementsToUpdateById = {
        'loginButton': 'loginButton',
        'showRegister': 'registerNow',
        'registerButton': 'createAccount',
        'showLogin': 'loginNow',
        'collectNowButton': 'collectNowButton',
        'withdrawButton': 'withdrawButton',
        'logoutButton': 'logoutButton',
        'closePopupAndOpenAd': 'gotItViewAd',
        'submitWithdrawRequestButton': 'submitRequest',
        'closeWithdrawPopup': 'closeButton',
        'languageSelectTitle': 'selectLanguage', // Assuming you have an H3 or P with this ID
        'adNoticeTitle': 'importantNotice', // For "Important Notice!"
        'adViewMessageText': 'adViewMessage', // For the ad view instructions
        'withdrawRequestTitle': 'withdrawalRequest', // For "Withdrawal Request" title
        'withdrawCloseButton': 'closeButton' // If you have a separate close button for withdraw popup
    };

    for (const id in elementsToUpdateById) {
        const element = document.getElementById(id);
        if (element) {
            element.textContent = getTranslation(elementsToUpdateById[id]);
        }
    }

    // Update placeholders manually
    const placeholders = {
        'loginEmail': 'emailPlaceholder',
        'loginPassword': 'passwordPlaceholder',
        'registerEmail': 'emailPlaceholder',
        'registerPassword': 'passwordPlaceholder',
        'withdrawAmount': 'withdrawalAmountPlaceholder',
        'accountDetails': 'accountDetailsPlaceholder'
    };

    for (const id in placeholders) {
        const element = document.getElementById(id);
        if (element) {
            element.placeholder = getTranslation(placeholders[id]);
        }
    }

    // Special handling for select payment method default option
    const paymentMethodOption = document.querySelector('#paymentMethod option[value=""]');
    if (paymentMethodOption) {
        paymentMethodOption.textContent = getTranslation('selectPaymentMethod');
    }
}

// Function to update currency symbol
function updateCurrencySymbol() {
    // This function's primary role is to ensure initial display or update when language changes
    // The main script's Firebase listener will handle actual balance value updates dynamically.
    const balanceSpan = document.getElementById('balance');
    const currentBalanceWithdrawSpan = document.getElementById('currentBalanceWithdraw');
    const minWithdrawAmountSpan = document.getElementById('minWithdrawAmount');
    const withdrawAmountInput = document.getElementById('withdrawAmount');

    let currencySymbol = getTranslation('currencyPKR'); // Default to PKR
    let placeholderAmountCurrency = 'PKR';

    if (currentLang === 'us') {
        currencySymbol = getTranslation('currencyUSD');
        placeholderAmountCurrency = 'USD';
    } else if (currentLang === 'gb') {
        currencySymbol = 'GBP'; 
        placeholderAmountCurrency = 'GBP';
    } else if (currentLang === 'ph') {
        currencySymbol = 'PHP';
        placeholderAmountCurrency = 'PHP';
    } else if (currentLang === 'pl') {
        currencySymbol = 'PLN';
        placeholderAmountCurrency = 'PLN';
    } else if (currentLang === 'de') {
        currencySymbol = 'EUR';
        placeholderAmountCurrency = 'EUR';
    } else if (currentLang === 'mz') {
        currencySymbol = 'MZN';
        placeholderAmountCurrency = 'MZN';
    } else if (currentLang === 'cz') {
        currencySymbol = 'CZK';
        placeholderAmountCurrency = 'CZK';
    } else if (currentLang === 'za') {
        currencySymbol = 'ZAR';
        placeholderAmountCurrency = 'ZAR';
    } else if (currentLang === 'ao') {
        currencySymbol = 'AOA';
        placeholderAmountCurrency = 'AOA';
    } else if (currentLang === 'ca') {
        currencySymbol = 'CAD';
        placeholderAmountCurrency = 'CAD';
    } else if (currentLang === 'th') {
        currencySymbol = 'THB';
        placeholderAmountCurrency = 'THB';
    }
    
    // Update balance and withdrawal popup text content with the correct currency symbol.
    // Ensure that these elements are still correctly tied to the dynamic updates from Firebase.
    // For elements like 'balance', 'currentBalanceWithdraw', 'minWithdrawAmount', their text content
    // is often set by the Firebase listener in `index.html` after a user logs in.
    // This function primarily ensures the *currency symbol part* is updated or on initial load.
    
    // Example for initial display or when language changes (before Firebase data loads/updates)
    if (balanceSpan) {
        const currentBalanceValue = parseFloat(balanceSpan.textContent);
        if (!isNaN(currentBalanceValue)) {
            balanceSpan.textContent = `${currentBalanceValue.toFixed(2)} ${currencySymbol}`;
        } else {
            balanceSpan.textContent = `0.00 ${currencySymbol}`; // Default if not a number
        }
    }
    if (currentBalanceWithdrawSpan) {
        const currentWithdrawValue = parseFloat(currentBalanceWithdrawSpan.textContent);
        if (!isNaN(currentWithdrawValue)) {
            currentBalanceWithdrawSpan.textContent = `${currentWithdrawValue.toFixed(2)} ${currencySymbol}`;
        } else {
            currentBalanceWithdrawSpan.textContent = `0.00 ${currencySymbol}`; // Default if not a number
        }
    }
    if (minWithdrawAmountSpan) {
        // This is usually a fixed minimum, so we can set it directly
        minWithdrawAmountSpan.textContent = `${MIN_WITHDRAW_AMOUNT_FROM_MAIN_SCRIPT.toFixed(2)} ${currencySymbol}`; // Assuming MIN_WITHDRAW_AMOUNT is accessible or passed
    }
    
    // Update the placeholder for the withdrawal amount input
    if (withdrawAmountInput) {
        withdrawAmountInput.placeholder = getTranslation('withdrawalAmountPlaceholder', { currency: placeholderAmountCurrency });
    }
}

// Function to show language selection popup
function showLanguageSelection() {
    const langOverlay = document.createElement('div');
    langOverlay.id = 'languageOverlay';
    langOverlay.style.cssText = `
        position: fixed;
        top: 0; left: 0; right: 0; bottom: 0;
        background-color: rgba(0,0,0,0.8);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 9999;
    `;

    const langContent = document.createElement('div');
    langContent.style.cssText = `
        background-color: white;
        padding: 40px;
        border-radius: 10px;
        text-align: center;
        box-shadow: 0 5px 20px rgba(0,0,0,0.5);
        max-width: 300px;
    `;

    const langTitle = document.createElement('h3');
    langTitle.textContent = getTranslation('selectLanguage'); // Use translation for title
    langTitle.style.cssText = 'margin-bottom: 25px; color: #333; font-size: 1.4em;';

    const langSelect = document.createElement('select');
    langSelect.id = 'languageSelector';
    langSelect.style.cssText = `
        width: 100%;
        padding: 12px;
        margin-bottom: 20px;
        border: 1px solid #ccc;
        border-radius: 5px;
        font-size: 1.1em;
        appearance: none; /* Remove default select arrow */
        background-image: url('data:image/svg+xml;utf8,<svg fill="%23333" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 10l5 5 5-5z"/><path d="M0 0h24v24H0z" fill="none"/></svg>');
        background-repeat: no-repeat;
        background-position: right 10px center;
        background-size: 20px;
        cursor: pointer;
    `;

    // Add language options
    const langOptions = {
        "en": "English",
        "ur": "اردو",
        "hi": "हिन्दी",
        "tr": "Türkçe",
        "ar": "العربية",
        "us": "English (US)", 
        "gb": "English (UK)", 
        "ph": "English (Philippines)", 
        "pl": "Polski", 
        "de": "Deutsch", 
        "mz": "Português (Moçambique)", 
        "cz": "Čeština", 
        "za": "English (South Africa)", 
        "ao": "Português (Angola)", 
        "ca": "English (Canada)", 
        "th": "ไทย" 
    };

    for (const code in langOptions) {
        const option = document.createElement('option');
        option.value = code;
        option.textContent = langOptions[code];
        langSelect.appendChild(option);
    }

    // Pre-select current language
    langSelect.value = currentLang;

    const confirmButton = document.createElement('button');
    confirmButton.textContent = 'Confirm'; // This specific button text can be kept simple or translated
    confirmButton.style.cssText = `
        background-color: #28a745;
        color: white;
        border: none;
        padding: 12px 25px;
        border-radius: 5px;
        cursor: pointer;
        font-size: 1.1em;
        transition: background-color 0.3s ease;
        width: 100%;
        box-sizing: border-box;
    `;
    confirmButton.onmouseover = () => confirmButton.style.backgroundColor = '#218838';
    confirmButton.onmouseout = () => confirmButton.style.backgroundColor = '#28a745';

    langContent.appendChild(langTitle);
    langContent.appendChild(langSelect);
    langContent.appendChild(confirmButton);
    langOverlay.appendChild(langContent);
    document.body.appendChild(langOverlay);

    confirmButton.addEventListener('click', () => {
        const selectedLang = langSelect.value;
        setLanguage(selectedLang);
        langOverlay.remove(); // Remove the popup
        // Important: After the language popup is closed, the main screen needs to be made visible
        // This should be handled by the main script after Firebase auth state is checked.
        // For initial load, if a user is already logged in, the mainScreen should become active.
        // If not, authScreen should remain active.
        // We'll rely on the main script's onAuthStateChanged for this.
    });
}

// Initial check and apply language on load
document.addEventListener('DOMContentLoaded', () => {
    // Check if language is not set in local storage OR if the 'languageOverlay' is somehow still present from a previous reload state
    if (!localStorage.getItem('appLanguage') || document.getElementById('languageOverlay')) {
        showLanguageSelection();
    } else {
        // If language is already set, apply it directly
        setLanguage(localStorage.getItem('appLanguage'));
    }
});
