/**
 * Created by root on 11/3/16.
 */
// alert("hello World!");
// console.log("Hello World!");

// document.getElementById('Text').innerHTML = 'HI';
// var t = document.getElementById('Text').innerHTML;
// console.log(t);
// var num = 0;
// function boxclick() {
//     num++;
//     document.getElementById('My_Text').setAttribute("style",'background-color: red');
// }

// $('#Text').css('background-color','blue');
// $('#Text').click(function () {
//     // $('#My_Text').html('clicked');
//     $('#My_Text').html($('input').val())
//     $('#My_Text').css('width','5rem');
// })
// var my_text = $('#my_text');
// var i = my_text.width();
// var j = my_text.height();
// var num = 1;
// $('#Text').click(function () {
//     num++;
//     my_text.css('height',j*num);
//     my_text.css('width',i*num);
// });

$('.th').click(function () {
    var loc = $(this).attr('src');
    $('.display').attr('src', loc);
});

$('.plus').click(function () {
    $('.holder').append('<div class="content a2"></div>')
    $('.a2').addClass('border')
});
var t = 0;
var image_array = [$('.f1').attr('src'),$('.f2').attr('src'),$('.f3').attr('src'),$('.f4').attr('src')];
setInterval(function () {
    t++;
    $('.display').attr('src', image_array[t % 4])
},2000);