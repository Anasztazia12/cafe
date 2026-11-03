const form = document.getElementById('booking-form');
const thanks = document.getElementById('thanks');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  thanks.showModal();
  form.reset();
});

document.getElementById('close').addEventListener('click', function () {
  thanks.close();
});
