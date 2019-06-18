console.log('test')
var menuBtn = document.getElementById('mobile-menu');
menuBtn.addEventListener("click", openMenu)

function openMenu(){
  console.log('Menu')
  var list;
  list = document.querySelectorAll(".navigation > li");
  for (var i = 0; i < list.length; ++i) {
     list[i].classList.toggle('hide');
  }
}
