import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import '../styles/main.css';

/* Setup font-awesome */
import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fas, far, fab);

dom.i2svg();

/* Init sidenav */
document.addEventListener('DOMContentLoaded', function() {
  let elems = document.querySelectorAll('.sidenav');
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

  // Autocomplete
  let destinations = {
    Aruba: null,
    'Cancun Mexico': null,
    Hawaii: null,
    Florida: null,
    California: null,
    Jamaica: null,
    Europe: null,
    'The Bahamas': null
  };

  // Sort function for sorting autocomplete results
  let sortDestinations = function(a, b, inputString) {
    return a.indexOf(inputString) - b.indexOf(inputString);
  };

  options = {
    data: destinations,
    sortFunctions: sortDestinations
  };

  elems = document.querySelectorAll('.autocomplete');
  instances = M.Autocomplete.init(elems, options);

  // materialbox
  elems = document.querySelectorAll('.materialboxed');
  instances = M.Materialbox.init(elems);

  // scrollspy
  elems = document.querySelectorAll('.scrollspy');
  instances = M.ScrollSpy.init(elems);
});
