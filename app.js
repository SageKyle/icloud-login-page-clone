
const emailForm = document.querySelector('.email-form');
const email = document.querySelector('.email-input');
const password = document.querySelector('.pswd');
const loading = document.querySelector('.loading-icon');

emailForm.addEventListener('submit', function (e) {
    loading.style.display = 'flex'
    setTimeout(() => {
        password.style.visibility = 'visible';
        loading.style.display = 'none'
        
    }, 1000);

    e.preventDefault();
});
