document.addEventListener('DOMContentLoaded', () => {

  const form = document.querySelector('#new-item-form');
  form.addEventListener('submit', handleFormSubmit);

  const remove = document.querySelector('#delete');
  remove.addEventListener('click', handleRemoveClick)
})

const handleFormSubmit = function (event) {
  event.preventDefault();
  const output = `Title: ${event.target.title.value} Author: ${event.target.author.value} Category: ${event.target.category.value}`;

  const newElement = document.createElement('p')
  newElement.textContent = output

  const readingList = document.querySelector('#reading-list');
  readingList.appendChild(newElement)


 //reset
  const form = document.querySelector('#new-item-form').reset()
};

const handleRemoveClick = function (event) {
  const readingList = document.querySelector('#reading-list')
  readingList.textContent = ""
};
