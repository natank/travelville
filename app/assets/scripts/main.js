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

  // Autocomplete
  let destinations = {
    "Aruba": null,
    "Cancun Mexico": null,
    "Hawaii": null,
    "Florida": null,
    "California": null,
    "Jamaica": null,
    "Europe": null,
    "The Bahamas": null
  }

  // Sort function for sorting autocomplete results
  let sortDestinations = function (a, b, inputString) {
    return a.indexOf(inputString) - b.indexOf(inputString);
  }

  options = {
    data: destinations,
    sortFunctions: sortDestinations
  };

  elems = document.querySelectorAll('.autocomplete');
  instances = M.Autocomplete.init(elems, options);
})

