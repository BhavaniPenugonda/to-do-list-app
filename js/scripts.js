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
  li.toggleClass("strike");
}

li.on('dblclick',function crossOut() {
  li.toggleClass("strike");
});



// Adding the delete button "X" //
let crossOutButton = $('<crossOutButton></crossOutButton>');
crossOutButton.append(document.createTextNode('X'));
li.append(crossOutButton);

crossOutButton.on('click', deleteListItem);
// Adding CLASS DELETE (DISPLAY: NONE) from the css //
function deleteListItem(){
  li.addClass('delete');
}

// Reordering the items //
$('#list').sortable();

