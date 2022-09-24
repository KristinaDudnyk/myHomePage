var photo;

// Describe this function...
function first() {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  let element_img2 = document.getElementById('img');
  element_img2.setAttribute("src", photo[0]);
  photo.push(photo.shift());
}


photo = ['https://images.unsplash.com/photo-1639341267320-2d062b250c0d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60', 'https://i.pinimg.com/736x/98/ec/63/98ec639332536b757d746a5cea2601fb--revolution-knights.jpg', 'https://images.unsplash.com/photo-1630227286297-f7cc7c97f415?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHVrcmFpbmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60', 'https://images.unsplash.com/photo-1517055313140-2dfe513e38e9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODB8fHVrcmFpbmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60', 'https://images.unsplash.com/photo-1597953754223-614067d67723?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjZ8fHVrcmFpbmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'];
first();


document.getElementById('next').addEventListener('click', (event) => {
  first();

});

document.getElementById('previous').addEventListener('click', (event) => {
  let element_img = document.getElementById('img');
  element_img.setAttribute("src", photo.slice(-1)[0]);
  photo.unshift(photo.pop());

});
