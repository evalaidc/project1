//Pseudocode
var selection = false;
// select the cookie to be moved
$('.post').on('click', function() {
  // a cookie is selected
  if (selection == true) {
    // run the conditional
      // value of selected box
    var value1 = $('.active').text();
      // # in selected Post's top cookie
    var value2 = $(this).children(':first-child').text(); //// It took me a second to understand that "this" is the destination location. Essentially user step 2. Maybe a something more symantic than value1, value2.
    // checks to see if there is a cookie at the place already
    // or if the cookie is small enough to go on top.
    if ($(this).children().length === 0 || +value1 < +value2) {
      $('.active').prependTo($(this))
      $('.active').removeClass('active');
      selection = false;
    }
    // alerts you if a cookie is too large to go on the top cookie of the seleted place
    else  {
      $('.active').removeClass('active');
      selection = false;
    }
  }
  // if a cookie was not selected
  else {
    $(this).children(':first').addClass('active');
    selection = true;
  }
  // if player gets all cookies in order to cookie monster.
    if ($('#post3').children().length == 4) {
      // sets delay time until function runs
    setTimeout(function(){
      alert('You Won! The cookie monster thanks you for your help!')
    },2000)
  };
  // reset button to refresh page and restart
  $('button').on('click', function(){
    location.reload(true);
    // $('.disc').sort().prependTo('#post1');
    // $('#post1').sort(function(a,b) {return 1-4});
  });
});
