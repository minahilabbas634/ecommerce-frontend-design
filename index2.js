
const rangeMin = document.getElementById("rangeMin");
const rangeMax = document.getElementById("rangeMax");
const minPrice = document.getElementById("minPrice");
const maxPrice = document.getElementById("maxPrice");

rangeMin.addEventListener("input", ()=>{
  minPrice.value = rangeMin.value;
});

rangeMax.addEventListener("input", ()=>{
  maxPrice.value = rangeMax.value;
});

