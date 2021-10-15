let min = document.getElementsByClassName("min");

Array.from(min).forEach(function(iter) {
      iter.addEventListener('click', function(e) {
         iter.nextElementSibling.classList.toggle('text');
         iter.childNodes[3].classList.toggle("arrow");
         iter.childNodes[1].classList.toggle('bold');
      });
   }
);