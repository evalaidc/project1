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
    var value2 = $(this).children(':first-child').text();
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
  // if ($('#post3').children().length === 4) {
  //   setInterval(wonAlert(), 2000);
  //   clearInterval()

  // var won = setInterval(wonAlert(),5000);
  setTimeout(function(){
    if ($('#post3').children().length === 4) {
    alert('You Won! The cookie monster thanks you for your help!')
    }
},3000)
    // clearInterval();
  // }

});

$('button').on('click', function(){
  $('.disc').appendTo($('#post1'))
})
