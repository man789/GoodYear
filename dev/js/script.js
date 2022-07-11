const video = document.querySelector('.header__video').innerHTML;
const mobileDiv = document.querySelector('.main__video');

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

let burger = document.querySelector('.burger__nav');
let menu = document.querySelector('.main__nav__links');
let link = document.querySelectorAll('.nav__link');
let bg = document.querySelector('.bg__burger');

function hasClick(){
  menu.classList.toggle("active");
  burger.classList.toggle("burger-active");
  bg.classList.toggle('d-block');
}
burger.addEventListener("click", hasClick);
for(i=0; i<link.length; i++){
  link[i].addEventListener("click", hasClick)
}


// Select JQuery

// Iterate over each select element
$('select').each(function () {

  // Cache the number of options
  var $this = $(this),
      numberOfOptions = $(this).children('option').length;

  // Hides the select element
  $this.addClass('s-hidden');

  // Wrap the select element in a div
  $this.wrap('<div class="select"></div>');

  // Insert a styled div to sit over the top of the hidden select element
  $this.after('<div class="styledSelect"></div>');

  // Cache the styled div
  var $styledSelect = $this.next('div.styledSelect');

  // Show the first select option in the styled div
  $styledSelect.text($this.children('option').eq(0).text());

  // Insert an unordered list after the styled div and also cache the list
  var $list = $('<ul />', {
      'class': 'options'
  }).insertAfter($styledSelect);

  // Insert a list item into the unordered list for each select option
  for (var i = 0; i < numberOfOptions; i++) {
      $('<li />', {
          text: $this.children('option').eq(i).text(),
          rel: $this.children('option').eq(i).val()
      }).appendTo($list);
  }

  // Cache the list items
  var $listItems = $list.children('li');

  // Show the unordered list when the styled div is clicked (also hides it if the div is clicked again)
  $styledSelect.click(function (e) {
      e.stopPropagation();
      $('div.styledSelect.active').each(function () {
          $(this).removeClass('activ').next('ul.options').hide();
      });
      $(this).toggleClass('activ').next('ul.options').toggle();
  });

  // Hides the unordered list when a list item is clicked and updates the styled div to show the selected list item
  // Updates the select element to have the value of the equivalent option
  $listItems.click(function (e) {
      e.stopPropagation();
      $styledSelect.text($(this).text()).removeClass('activ');
      $this.val($(this).attr('rel'));
      $list.hide();
      /* alert($this.val()); Uncomment this for demonstration! */
  });

  // Hides the unordered list when clicking outside of it
  $(document).click(function () {
      $styledSelect.removeClass('active');
      $list.hide();
  });

});