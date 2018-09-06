document.addEventListener('DOMContentLoaded', () => {

  const form = document.querySelector('#new-item-form');
  form.addEventListener('submit', handleFormSubmit);
})

const handleFormSubmit = function (event) {
  event.preventDefault();
  const output = `Title: ${event.target.title.value} Author: ${event.target.author.value} Category: ${event.target.category.value}`;
  // const resultList =  document.querySelector('#reading-list');
  const newElement = document.createElement('p')
  newElement.textContent = output

  const readingList = document.querySelector('#reading-list');
  readingList.appendChild(newElement)


  // resultList.textContent = output;


 //reset
  const form = document.querySelector('#new-item-form').reset()


  console.log(resultList);
};
