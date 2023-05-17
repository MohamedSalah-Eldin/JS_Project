

let prevScrollPos = window.scrollY;
let headerHeight = document.querySelector('.some').offsetHeight;
window.onscroll = function() {
    let navi = document.querySelector('nav');
    if (navi) {
      navi.style.backdropFilter = 'blur(9px)';
    }
  const header = document.querySelector('.some');
  let currentScrollPos = window.scrollY;
  if (prevScrollPos > currentScrollPos || currentScrollPos < headerHeight) {
    header.classList.remove('hidden');

  } else {
    header.classList.add('hidden');
  }
  prevScrollPos = currentScrollPos;
}