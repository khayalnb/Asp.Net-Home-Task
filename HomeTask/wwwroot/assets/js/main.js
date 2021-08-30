
$('#simple_timer').syotimer({

  year: 2021,

  month: 10,

  day: 9,

  hour: 20,

  minute: 30

});

// let icon=document.querySelectorAll('.icon_hover')
// let change=document.querySelector('.menu-change')




// icon.forEach(element=>{
//   element.addEventListener('click', ()=>{
//     element.classList.toggle('rotateIcon');
//     let change=document.querySelector('.menu-change');
//     change.classList.toggle('menu-active')


// })})


$(".icon_hover").on("click", function () {
  $(".icon_hover").children().not($(this)).removeClass('rotateIcon');
  $(this).children().toggleClass("rotateIcon")
  $(this).on("click", ()=>{
    $(this).children().not($(this)).toggleClass('rotateIcon');
  })
  $(".icon_hover").next().not($(this).next()).removeClass('menu-active')
  $(this).next().toggleClass("menu-active")
})



var modal = document.getElementById("myModal");


var btn = document.getElementById("myBtn");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";

}

span.onclick = function() {
  modal.style.display = "none";
}



setTimeout(() => {
  window.onclick = function btn(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
},1500)