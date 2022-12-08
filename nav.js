export { navAnimation, navToggle }

function navAnimation() {
  const navButton = document.getElementById('button');
  navButton.addEventListener('click', navToggle);
}

function navToggle() {
  const navTab = document.querySelector('nav');
  if (navTab.style.display != 'none') {
    navTab.style.display = 'none'
  } else {
    navTab.style.display = 'inline'
  }
}
 