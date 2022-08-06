const btns = document.querySelectorAll('[role="button"]');
const submitBtn = document.getElementById('submit');
const feedBack = document.getElementById('feedback');
const thankYou = document.getElementById('thank-you');
const selectedRating = document.getElementById('selected-rating');


// rating button selection

btns.forEach((btn) => {

  btn.addEventListener('click', (e) => {

    let selectedBtn = e.currentTarget;
    for (let i = 0; i < btns.length; i++) {

      if (btns[i].getAttribute('aria-selected') == 'true') {

        // Sets all rating-btn aria to false
        btns[i].setAttribute('aria-selected', false);
        
        // Sets user selected rating-btn aria to true and increase background opacity
        selectedBtn.setAttribute('aria-selected', true);
        selectedBtn.style.background = 'hsla(216, 12%, 54%, .8)';
        
        // Prints user selected rating value to thank-you box
        selectedRating.textContent = selectedBtn.id;

      }
      else
      {
        selectedBtn.setAttribute('aria-selected', true);
        selectedRating.textContent = selectedBtn.id;
      }
    }

  })
  
});


// Submit section

submitBtn.addEventListener('click', () => {

  // Hides feedback box
  feedBack.setAttribute('hidden', true);
  
  // Makes thank-you section visible
  thankYou.removeAttribute('hidden');

});
