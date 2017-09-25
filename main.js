$('.readmore a').click(displayMessage);

function displayMessage(event) {
event.preventDefault();
$('#show-this-on-click').slideDown();
$('.readmore').hide();
$('.readless').show();
}

$('.readless a').click(hideMessage);

function hideMessage(event) {
  event.preventDefault();
  $('#show-this-on-click').slideUp();
  $('.readless').hide();
  $('.readmore').show();
}

$('.learnmore').click(displayLearn);

function displayLearn(event) {
  event.preventDefault();
  $('#learnmoretext').slideDown();
  $('.learnmore').hide();
}
