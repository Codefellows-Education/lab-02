'use strict';

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
    }) 
  }).then(renderAllHorndedAnimals);
}

function renderAllHorndedAnimals () {
  allHornedAnimals.forEach(animal => animal.render());
}

createHornedAnimals();



  //use jQuery to make a copy of the template that we need fron HTML
    //copy template
    //fill in template with properties
    //append to DOM with properties

