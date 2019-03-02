/* Init sidenav */
document.addEventListener('DOMContentLoaded', function() {
  let elems=document.querySelectorAll('.sidenav');
  let options = {};
  let instances = M.Sidenav.init(elems, options);
// Init slider
  options = {
    indicators: false,
    height: 500,
    transition: 500,
    interval: 6000
  };
  elems = document.querySelectorAll('.slider');
  instances = M.Slider.init(elems, options);
})