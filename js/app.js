'use strict';
const $select = $('select');
const keywordArr = [];

function HornedAnimal(hornedAnimal) {
  this.url = hornedAnimal.image_url;
  this.name = hornedAnimal.title;
  this.description = hornedAnimal.description;
  this.keyword = hornedAnimal.keyword;
  this.horns = hornedAnimal.horns;

  allHornedAnimals.push(this);
}

const allHornedAnimals = [];

HornedAnimal.prototype.render = function () {
  $('main').append('<div class="clone"></div>');
  let $hornedAnimalContainer = $('div[class="clone"]');
  let $clonedHornedAnimal = $('#photo-template').html();

  $hornedAnimalContainer.html($clonedHornedAnimal);
  $hornedAnimalContainer.find('h2').text(this.name);
  $hornedAnimalContainer.find('img').attr('src', this.url);
  $hornedAnimalContainer.find('img').attr('alt', this.keyword);
  $hornedAnimalContainer.find('img').attr('data-horns', this.horns);
  $hornedAnimalContainer.find('p').text(this.description);
  
  $hornedAnimalContainer.attr('class', '');
}

let createHornedAnimals = () => {
  $.getJSON('./data/page-1.json', data => {
    data.forEach (animalObj => {
      new HornedAnimal(animalObj);

      generateDropdown(animalObj);
    }) 
  }).then(renderAllHorndedAnimals);
}

function renderAllHorndedAnimals () {
  allHornedAnimals.forEach(animal => animal.render());
}

let generateDropdown = (object) => 
{
  if (!keywordArr.includes(object.keyword)) 
  {
    $select.append(`<option value= ${object.keyword}>${object.keyword}</option>`);
    keywordArr.push(object.keyword);
  }
  console.log(keywordArr);
  // if (keywordArr)
  // allHornedAnimals.forEach(animal => {

  //   if (object.keyword !== object.keyword)
  //   {
  //     $select.append(`<option value= ${object.keyword}>${object.keyword}</option>`);
  //   }

  // })
}

createHornedAnimals();