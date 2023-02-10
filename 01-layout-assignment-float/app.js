$(document).ready(function () {
  console.log("We are rady");
  $('.ph-ham').click(function (e) { 
    e.preventDefault();
    $(this).toggleClass('_clicked');
    $('.menu').slideToggle();
  });
});