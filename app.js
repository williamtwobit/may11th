$(function(){
  $('.thumbnail').on('click', 'img', function(event){
    let img = $(this).attr('src');
    $('.hero img').attr('src', img)
  })
  
})