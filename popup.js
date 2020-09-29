document.addEventListener('DOMContentLoaded', function() {
  let searchField = document.getElementById('ge-search');
  let timerId;
  let ul = document.getElementById('list');

  const data = [{
    name: 'Довженко Владислав',
    mail: 'vladka.dovzh@gmail.com'
  }];

  searchField.focus();
  ul.append(...createItems(data));

  function createItems(resultSearch) {
    let result = [];

    resultSearch.forEach((item) => {
      let li = document.createElement('li');
      li.className = 'list-group-item list-group-item-action';
      li.innerHTML = `<div>${item.name}</div><div>${item.mail}</div>`;
      result.push(li);
    });

    return result;
  };

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
        let listContent = getListContent(searchField.value);
        if(listContent.length) {
          ul.append(...listContent);
        } else {
          let li = document.createElement('div');
          li.className = 'list-group-item';
          li.innerHTML = 'Не найдено';
          ul.append(li);
        }
      }, 500)
    } else {
      setTimeout(function() {
        removeItems();
        ul.append(...createItems(data))
      }, 500)
    }
  };

  function getListContent(searchData) {

    let resultSearch = data.filter((item) => {
      if(item.name.toLowerCase().match(searchData.toLowerCase())) {
        return true
      }
      return false
    });

    return createItems(resultSearch)
  };

  ul.addEventListener('click', function(event) {
    let target = event.target.closest('li');
    if(target) {
      navigator.clipboard.writeText(target.childNodes[1].textContent)
    };
    document.getElementsByClassName('js-alert-success')[0].classList.add('d-block');
    setTimeout(function() {
      window.close();
    }, 800);
  });
  
}, false)
