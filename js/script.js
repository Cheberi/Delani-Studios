$(document).ready(function() {

    $("#design").click(function(){
      $("#design-showing").toggle();
      $(".hide-design-image").toggle();
    })
  
    $("#development").click(function(){
      $("#development-showing").toggle();
      $(".hide-development-image").toggle();
    })
  
    $("#productManagement").click(function(){
      $("#product-management-showing").toggle();
      $(".hide-product-management").toggle();
    })
  
    $(".Hover").hover(function(){
      $(this).animate({opacity:'1'});
    },
    function(){
      $(this).animate({opacity:'0'});
    })
  $('.submit').click(function () {
          var Name = $('#mce-FNAME').val();
          var Email = $('#mce-EMAIL').val();
          var Message = $('#mce-MESSAGE');
          var key ='c8fbd9a0cf3958e02be2822e55cfbfc5-us4';
          if (Name == '' || Email == '' || Message == '') {
              alert('Please make sure you have filled in the form correctly!');
          } else {
              alert(' Hi ' + Name + ' We have received your message. Thank you for reaching out to us.');
          }
    });
  });