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
var photo;

// Describe this function...
function first() {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  let element_img2 = document.getElementById('img');
  element_img2.setAttribute("src", photo[0]);
  photo.push(photo.shift());
}


photo = ['https://i1.wp.com/poshyk.info/wp-content/uploads/2017/06/mark-cuberg.jpg', 'https://ok-wifi.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/12-Lamarr.jpg.webp', 'https://i2.wp.com/poshyk.info/wp-content/uploads/2017/06/pavel-durov.jpg'];
first();


document.getElementById('next').addEventListener('click', (event) => {
  first();

});

document.getElementById('previous').addEventListener('click', (event) => {
  let element_img = document.getElementById('img');
  element_img.setAttribute("src", photo.slice(-1)[0]);
  photo.unshift(photo.pop());

});
