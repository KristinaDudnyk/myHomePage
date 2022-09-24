var pages;


pages = ['A farmer had a dog who used to wait by the roadside for vehicles to come.', 'As soon as one came, he would run down the road, barking and trying to overtake the car.', 'One day the farmer’s neighbor asked the farmer, “Do you think the dog is ever going to overtake those vehicles?”', 'The farmer replied, “That is not what bothers me. What bothers me is what he would do if he ever caught one.”', 'Many people in life behave like that dog who is pursuing meaningless goals.'];


document.getElementById('turn_page').addEventListener('click', (event) => {
  let element_list = document.getElementById('list');
  if (!!pages.length) {
    let new_li = document.createElement('li');
    new_li.innerText = pages.shift();

    element_list.appendChild(new_li);
  }

});

document.getElementById('the_end').addEventListener('click', (event) => {
  let element_end = document.getElementById('end');
  let new_img = document.createElement('img');
  new_img.setAttribute("src", 'https://kb.rspca.org.au/wp-content/uploads/2018/11/golder-retriever-puppy.jpeg');

  element_end.appendChild(new_img);

});

document.getElementById('repeat').addEventListener('click', (event) => {
  let element_list2 = document.getElementById('list');
  element_list2.replaceChildren();

});
if (!!pages.length) {
}
