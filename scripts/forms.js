const name = document.getElementById('name');
const comments = document.getElementById('usermsg');
const errorMsgs = document.getElementsByName('error-message');
const infoMsgs = document.getElementsByName('info-message');

const nameRegExp = /[A-Za-z\s]/;

const maxLength = comments.getAttribute('maxlength');
const lengthOnReload = comments.value.length;
infoMsgs[2].innerHTML = maxLength - lengthOnReload + ' characters left.';

let form_errors = [];

name.addEventListener('keydown', function (event) {
  if (typeof event.key !== 'string' || event.key.length !== 1) {
    return;
  }
  if (!nameRegExp.test(event.key)) {
    errorMsgs[0].innerHTML = 'Please input a valid name!';
    event.preventDefault();
    setTimeout(() => {
      errorMsgs[0].innerHTML = '';
    }, 2000);
  }
}, false);

comments.addEventListener('input', event => {
  const currentLength = comments.value.length;
  if (currentLength >= maxLength - 10) {
    comments.style.borderColor = 'red';
    infoMsgs[2].style.color = 'red';
    infoMsgs[2].innerHTML = maxLength - currentLength + ' characters left!';
  } else {
    comments.style.borderColor = '';
    infoMsgs[2].style.color = '';
    infoMsgs[2].innerHTML = maxLength - currentLength + ' characters left.';
  }
}, false);
