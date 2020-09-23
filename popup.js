document.addEventListener('DOMContentLoaded', function() {
  function getListContent() {
    let result = [];
    let name = 'Андрей Инкерман';
    let mail = 'inkerman@irlix.com';
  
    for(let i=1; i<=3; i++) {
      let li = document.createElement('li');
      li.className = 'list-group-item list-group-item-action';
      li.innerHTML = `<div>${i}${name}</div><div>${mail}</div>`;
      result.push(li);
    }
  
    return result;
  }
  let ul = document.getElementById('list');
  ul.append(...getListContent());
  
}, false)