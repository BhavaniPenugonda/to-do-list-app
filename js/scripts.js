function newItem() {
let li = $('<li></li>');
  let inputValue = $('#input').val();
  li.append(inputValue);

  if (inputValue === '') {
    alert('Add an element');
  } else {
    $('#list').append(li);
  }
}


//Crossing out an item from the list of items //
function crossOut() {
  li.classList.toggle("strike");
}

li.addEventListener('dblclick',crossOut);



// Adding the delete button "X" //
let crossOutButton = document.createElement('crossOutButton');
crossOutButton.appendChild(document.createTextNode('X'));
li.appendChild(crossOutButton);

crossOutButton.addEventListener('click', deleteListItem);
// Adding CLASS DELETE (DISPLAY: NONE) from the css //
function deleteListItem(){
  li.classList.add('delete');
}

