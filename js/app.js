'use strict';

//display all of the iamges
  //jQuery on load
  //$.get() to read JSON



function HornedAnimal(hornedAnimal) {
  this.url = hornedAnimal.image_url;
  this.name = hornedAnimal.title;
  this.description = hornedAnimal.description;
  this.keyword = hornedAnimal.keyword;
  this.horns = hornedAnimal.horns;

  allHornedAnimals.push(this);
}

const allHornedAnimals = [];

let createHornedAnimals = () => {
  $.getJSON('./data/page-1.json', data => {
    data.forEach (animalObj => new HornedAnimal(animalObj));
  });
  console.log(allHornedAnimals);
}

createHornedAnimals();
  //use jQuery to make a copy of the template that we need fron HTML
    //copy template
    //fill in template with properties
    //append to DOM with properties

  