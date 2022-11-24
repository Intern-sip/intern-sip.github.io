// var collapse = document.getElementsByClassName("dropdown");
// var i = 0;

// while (i < collapse.length) {
//   collapse[i].addEventListener("click", function() {
//     this.classList.toggle("active");
//     var content = this.nextElementSibling;
//     if (content.style.maxHeight) {
//       content.style.maxHeight = null;
//     } else {
//       content.style.maxHeight = content.scrollHeight + "px";
//     }
//   });
//   i++;
// }

(function(){
    function scrollH(e){
        e.preventDefault();
        e = window.event || e;
        let delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
        document.querySelector('.events-card').scrollLeft -= (delta * 40);
    }
    if(document.querySelector('.events-card').addEventListener){
        document.querySelector('.events-card').addEventListener('mousewheel', scrollH, false);
        document.querySelector('.events-card').addEventListener('DOMMouseScroll', scrollH, false);
    }
})();
