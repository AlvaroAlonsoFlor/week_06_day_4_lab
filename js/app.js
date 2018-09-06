document.addEventListener('DOMContentLoaded', () => {

  const form = document.querySelector('#new-item-form');
  form.addEventListener('submit', handleFormSubmit);
})

const handleFormSubmit = function (event) {
  event.preventDefault();
  // console.log(event.target.title.value);
  // console.log(event.target.author.value);
  // console.log(event.target.category.value);
  const output = `Title: ${event.target.title.value} Author: ${event.target.author.value} Category: ${event.target.category.value}`;
  const resultList =  document.querySelector('#reading-list');
  console.log(resultList);
  resultList.textContent = output;
};
