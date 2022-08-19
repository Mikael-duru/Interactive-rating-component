const btns = document.querySelectorAll('.rating-btn');
const submitBtn = document.getElementById('submit');
const feedBack = document.getElementById('feedback');
const thankYou = document.getElementById('thank-you');
const selectedRating = document.getElementById('selected-rating');


// rating button selection

btns.forEach((btn) => {

  btn.addEventListener('click', (e) => {

    let selectedBtn = e.currentTarget;
    for (let i = 0; i < btns.length; i++) {

      if (btns[i].getAttribute('aria-pressed') == 'true') {

        // Sets all rating-btn aria to false
        btns[i].setAttribute('aria-pressed', false);

        // Sets user selected rating-btn aria to true
        selectedBtn.setAttribute('aria-pressed', true);


        // Prints user selected rating value to thank-you box
        selectedRating.innerHTML = selectedBtn.id;

      }
      else
      {
        selectedBtn.setAttribute('aria-pressed', true);
        selectedRating.innerHTML = selectedBtn.id;
      }
    }

  })

});


// Submit section

submitBtn.addEventListener('click', () => {

  // Ensures user selects a rating
  if (selectedRating.innerHTML === '') {

    alert('Please select a rating before submitting');

  }
  else
  {

    // Hides feedback box
    feedBack.setAttribute('hidden', true);

    // Makes thank-you section visible
    thankYou.removeAttribute('hidden');

  }
});