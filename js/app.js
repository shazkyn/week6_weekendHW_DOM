document.addEventListener('DOMContentLoaded', () => {
  const FormInput = document.querySelector('#new-item-form');
  FormInput.addEventListener('submit', handleSaveClicked);

  const ButtonInput = document.querySelector('#delete-button');
  ButtonInput.addEventListener('click', handleDeleteClicked)
});

const handleDeleteClicked = function(event) {
  const buttonDelete = document.querySelector('#wish-list')
  const wishList = document.querySelector('#wish-list');
  wishList.innerHTML = '';
};

const handleSaveClicked = function(event) {
  event.preventDefault()
   const makeCell = document.createElement('td')
   makeCell.textContent = `${event.target.make.value}`;
   const modelCell = document.createElement('td')
   modelCell.textContent = `${event.target.model.value}`;
   const colorCell = document.createElement('td')
   colorCell.textContent = `${event.target.color.value}`;
   const yearCell = document.createElement('td')
   yearCell.textContent = `${event.target.year.value}`;
   const priceCell = document.createElement('td')
   priceCell.textContent = `${event.target.price.value}`;

  const resultGuitar = document.createElement('tr')
  resultGuitar.appendChild(makeCell);
  resultGuitar.appendChild(modelCell);
  resultGuitar.appendChild(colorCell);
  resultGuitar.appendChild(yearCell);
  resultGuitar.appendChild(priceCell);


  const wishListAdd = document.querySelector('#wish-list');
  wishListAdd.appendChild(resultGuitar);

  document.querySelector('#new-item-form').reset();
};
