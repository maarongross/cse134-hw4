const name = document.getElementById('name');
const comments = document.getElementById('usermsg');
const errorMsgs = document.getElementsByName('error-message');
const infoMsgs = document.getElementsByName('info-message');

const nameRegExp = /[A-Za-z\s]/;
let remainingCharacters = 300;

name.addEventListener('keydown', function (event) {
  if (typeof event.key !== 'string' || event.key.length !== 1) {
    return;
  }
  if (!nameRegExp.test(event.key)) {
    errorMsgs[0].textContent = 'Please input a valid name!\n';
    event.preventDefault();
    errorMsgs[0].style.transition = 'all .1s ease-out';
  }
}, false);
