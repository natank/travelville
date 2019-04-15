document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems);

  elems = document.querySelectorAll('.slider');
  var instances = M.Slider.init(elems);

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
  var instances = M.Autocomplete.init(elems, options);
});
