const video = document.querySelector('.header__video').innerHTML;
const mobileDiv = document.querySelector('.video__mq');

const displayMobileForm = () => {
  if (window.innerWidth <= 991) {
    mobileDiv.innerHTML = video;
  } else {
    mobileDiv.innerHTML = '';
  }
};

window.addEventListener('load', () => {
  displayMobileForm();
});

window.addEventListener('resize', () => {
  displayMobileForm();
});