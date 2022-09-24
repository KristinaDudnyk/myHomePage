var web, link;


web = ['CYF', 'Cambridge Dictionary', 'GitHub'];
link = ['https://codeyourfuture.io', 'https://dictionary.cambridge.org/us/', 'https://github.com/'];
while (!!web.length) {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  let element_list = document.getElementById('list');
  let new_li = document.createElement('li');
  let new_a = document.createElement('a');
  new_a.setAttribute("href", link.shift());
  new_a.innerText = web.shift();

  new_li.appendChild(new_a);

  element_list.appendChild(new_li);
}
