const paragraphs = document.getElementsByTagName("p");
console.log(paragraphs);
const numFestivals = document.getElementById("festivalsdiv").getElementsByTagName("p");
const numRaves = document.getElementById("ravesdiv").getElementsByTagName("p");

document.getElementById('Elements').addEventListener('click', e => {
  totalElements();
})

document.getElementById('Festivals').addEventListener('click', e => {
  totalFestivals();
})

document.getElementById('Raves').addEventListener('click', e => {
  totalRaves();
})

function totalElements(){
   document.getElementById("one").innerHTML = `There are ` +(paragraphs.length) +` total paragraph elements (concerts) on the page.`;
}

function totalFestivals(){
  document.getElementById("two").innerHTML = `I went to ` +(numFestivals.length) +` festivals.`;
}

function totalRaves(){
  document.getElementById("three").innerHTML = `I went to ` +(numRaves .length) +` raves.`;
}
