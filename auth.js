/ 🔥 Подключение Firebase (без `import`)
const firebaseConfig = {
    apiKey: "AIzaSyDkUuL25Ipo0Pg_o6hjTey1zAP40ENyxns",
    authDomain: "nasetrida-3adeb.firebaseapp.com",
    projectId: "nasetrida-3adeb",
    storageBucket: "nasetrida-3adeb.firebasestorage.app",
    messagingSenderId: "881472052797",
    appId: "1:881472052797:web:128ebf94df4af382285454",
    measurementId: "G-0Q9ZJFRRQQ"
};

// ✅ Инициализация Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// 📌 Функция входа
document.getElementById("login-form").addEventListener("submit", function (e) {
    e.preventDefault();
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    auth.signInWithEmailAndPassword(email, password)
        .then(() => {
            alert("✅ Přihlášení úspěšné!");
            window.location.href = "main.html";
        })
        .catch((error) => {
            alert("❌ Chyba při přihlašování: " + error.message);
            console.error("Login error:", error);
        });
});

// 📌 Функция регистрации
document.getElementById("register-form").addEventListener("submit", function (e) {
    e.preventDefault();
    const email = document.getElementById("register-email").value;
    const password = document.getElementById("register-password").value;

    auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            alert("✅ Registrace úspěšná!");
            console.log("Registrovaný uživatel:", user);
            window.location.href = "main.html";
        })
        .catch((error) => {
            alert("❌ Chyba při registraci: " + error.message);
            console.error("Register error:", error);
        });
});

// 📌 Отслеживание состояния пользователя
auth.onAuthStateChanged((user) => {
    if (user) {
        console.log("✅ Uživatel je přihlášen:", user.email);
    } else {
        console.log("❌ Nikdo není přihlášen.");
    }
});
