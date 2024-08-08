function newItem() {
let li = $('<li></li>');
  let inputValue = $('#input').val();
  li.append(inputValue);

  if (inputValue === '') {
    alert('Add an element');
  } else {
    let list = $('#list');
        list.append(li);
        $('#input').val(''); 
  }



//Crossing out an item from the list of items //
function crossOut() {
  li.toggleClass("strike");
}

li.on('dblclick',function crossOut() {
  li.toggleClass("strike");
});



// Adding the delete button "X" //
let deleteButton = $('<deleteButton></deleteButton>');
deleteButton.append(document.createTextNode('X'));
 li.append(deleteButton);

deleteButton.on('click', deleteListItem);
// Adding CLASS DELETE (DISPLAY: NONE) from the css //
function deleteListItem(){
  li.addClass('delete');
}

// Reordering the items //
$('#list').sortable();

}

