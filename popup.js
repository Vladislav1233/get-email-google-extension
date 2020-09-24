document.addEventListener('DOMContentLoaded', function() {
  let searchField = document.getElementById('ge-search');
  let timerId;
  let ul = document.getElementById('list');

  searchField.oninput = function() {

    function removeItems() {
      while (ul.firstChild) {
        ul.removeChild(ul.firstChild);
      }
    };

    if(searchField.value.length) {
      clearTimeout(timerId);
      timerId = setTimeout(function() {
        removeItems();
        ul.append(...getListContent(searchField.value));
      }, 500)
    } else {
      setTimeout(function() {
        removeItems();
      }, 500)
    }
  };

  function getListContent(searchData) {
    let result = [];
    const data = [{
      name: 'Довженко Владислав',
      mail: 'vladislav.dovzhenko@irlix.ru'
    }, {
      name: 'Гришин Максим',
      mail: 'maksim.grishin@irlix.ru'
    }];

    let resultSearch = data.filter((item) => {
      if(item.name.match(searchData)) {
        return true
      }
      return false
    });

    resultSearch.forEach((item) => {
      let li = document.createElement('li');
      li.className = 'list-group-item list-group-item-action';
      li.innerHTML = `<div>${item.name}</div><div>${item.mail}</div>`;
      result.push(li);
    })
  
    return result;
  }

  ul.addEventListener('click', function(event) {
    let target = event.target.closest('li');
    navigator.clipboard.writeText(target.childNodes[1].textContent)
  })
  
}, false)