var comment;

function getNumberOrString(value) {
  // Convert a string value to a number if possible
  let number_value = Number(value);
  if (Number.isNaN(number_value)) {
    return value
  } else {
    return number_value
  }
}


let element_comment = document.getElementById('comment');
element_comment.replaceChildren();
comment = [];


document.getElementById('button-comment').addEventListener('click', (event) => {
  comment.unshift(getNumberOrString(document.getElementById('text-area').value));
  let element_comment2 = document.getElementById('comment');
  let new_li = document.createElement('li');
  new_li.innerText = comment.shift();

  element_comment2.appendChild(new_li);

});
