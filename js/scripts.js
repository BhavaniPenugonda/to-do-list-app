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