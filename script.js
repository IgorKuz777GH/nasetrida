/// Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyDkUuL25Ipo0Pg_o6hjTey1zAP40ENyxns",
    authDomain: "nasetrida-3adeb.firebaseapp.com",
    projectId: "nasetrida-3adeb",
    storageBucket: "nasetrida-3adeb.firebasestorage.app",
    messagingSenderId: "881472052797",
    appId: "1:881472052797:web:128ebf94df4af382285454",
    measurementId: "G-0Q9ZJFRRQQ"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// DOM Elements
const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');
const loginLink = document.getElementById('login-link');
const registerLink = document.getElementById('register-link');

// Switch between login and register form
loginLink.addEventListener('click', () => {
    loginForm.style.display = 'none';
    registerForm.style.display = 'block';
});

registerLink.addEventListener('click', () => {
    loginForm.style.display = 'block';
    registerForm.style.display = 'none';
});

// Firebase Authentication
const auth = firebase.auth();

// Login functionality
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    
    auth.signInWithEmailAndPassword(email, password)
        .then(userCredential => {
            const user = userCredential.user;
            // Check if email is verified
            if (user.emailVerified) {
                window.location.href = 'mainpage.html'; // Redirect to main page
            } else {
                alert('Prosím, potvrďte svůj e-mail před přihlášením!');
            }
        })
        .catch(error => {
            alert('Chyba při přihlášení: ' + error.message);
        });
});

// Register functionality
registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const surname = document.getElementById('surname').value;
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;

    auth.createUserWithEmailAndPassword(email, password)
        .then(userCredential => {
            const user = userCredential.user;
            // Update user profile with name and surname
            user.updateProfile({
                displayName: `${name} ${surname}`
            });

            // Send verification email
            user.sendEmailVerification()
                .then(() => {
                    alert('Registrace úspěšná! Prosím, potvrďte svůj e-mail.');
                    // Redirect to login page after registration
                    window.location.href = 'login.html';
                })
                .catch(error => {
                    alert('Chyba při odesílání ověřovacího e-mailu: ' + error.message);
                });
        })
        .catch(error => {
            alert('Chyba při registraci: ' + error.message);
        });
});
