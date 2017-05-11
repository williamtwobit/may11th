// DRILL 1

// $(function(){
//   $('.thumbnail').on('click', 'img', function(event){
//     let img = $(this).attr('src');
//     $('.hero img').attr('src', img)
//   })

// })

// DRILL 2

// function fizzBuzz(countTo) {
//   var list=[];
//   for (var i=1; i <= countTo; i++){
//     if (i % 3 === 0 && i % 5 === 0){
//       list.push('fizzbuzz')
//     }
//     else if (i % 3 === 0){
//       list.push('fizz')
//     }
//     else if (i % 5 === 0){
//       list.push('buzz')
//     }
//     else {
//       list.push(i)
//     }
//   }
//   return list
// }

// $(function(){
// 	$('#button').click(function(event){
// 		event.preventDefault();
// 		let countTo = $('#number-choice').val();
// 		let result = fizzBuzz(countTo);
// 		console.log(result);

// 		result.forEach(item => {
// 				if (item === 'fizz'){
// 					$('.js-results').append(`<div class="fizz-buzz-item fizz"> <span>${item}</span> </div>`);
// 				}
// 				else if(item === 'buzz'){
// 					$('.js-results').append(`<div class="fizz-buzz-item buzz"> <span>${item}</span> </div>`);
// 				}
// 				else if(item === 'fizzbuzz'){
// 					$('.js-results').append(`<div class="fizz-buzz-item fizzbuzz"> <span>${item}</span> </div>`);
// 				}
// 				else{
// 					$('.js-results').append(`<div class="fizz-buzz-item"> <span>${item}</span> </div>`);
// 				}
// 			})
// 		})

// 	});

$(function(){
  $('.js-lightbulb').click(function(event){
    console.log(this);
    $('.js-lightbulb').removeClass('bulb-on');
    $(this).toggleClass('bulb-on');
    console.log("this");
  })
})
