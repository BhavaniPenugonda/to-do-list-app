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

