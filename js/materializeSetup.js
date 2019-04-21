document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems);

  elems = document.querySelectorAll('.slider');
  instances = M.Slider.init(elems);

  // Autocomplete

  options = {
    data: {
      Aruba: null,
      'Cancun Mexico': null,
      Hawaii: null,
      Florida: null,
      California: null,
      Jamaica: null,
      Europe: null,
      'The Bahamas': null
    }
  };
  elems = document.querySelectorAll('.autocomplete');
  instances = M.Autocomplete.init(elems, options);

  // scrollspy
  elems = document.querySelectorAll('.scrollspy');
  instances = M.ScrollSpy.init(elems, options);
});
