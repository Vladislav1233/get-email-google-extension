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
    }, {
      name: 'Филиппов Дмитрий',
      mail: 'dmitriy.filippov@irlix.com'
    }, {
      name: 'Урваев Петр',
      mail: 'petr.urvaev@irlix.com'
    }, {
      name: 'Игонин Иван',
      mail: 'ivan.igonin@irlix.com'
    }, {
      name: 'Сеппар Татьяна',
      mail: 'tatiana.seppar@irlix.com'
    }, {
      name: 'Алимова Яна',
      mail: 'yana.alimova@irlix.com'
    }, {
      name: 'Демин Сергей',
      mail: 'demin.sergej@irlix.com'
    }, {
      name: 'Коротков Андрей',
      mail: 'andrej.korotkov@irlix.ru'
    }, {
      name: 'Провалов Кирилл',
      mail: 'kirill.provalov@irlix.ru'
    }, {
      name: 'Логинов Николай',
      mail: 'nikolaj.loginov@irlix.com'
    }, {
      name: 'Фролов Александр',
      mail: 'aleksandr.frolov@irlix.ru'
    }, {
      name: 'Поротикова Анна',
      mail: 'anna.porotikova@irlix.ru'
    }, {
      name: 'Илюхин Геннадий',
      mail: 'ilyuhin.gennadij@irlix.ru'
    }, {
      name: 'Баннов Евгений',
      mail: 'evgenij.bannov@irlix.ru'
    }, {
      name: 'Богданова Екатерина',
      mail: 'ekaterina.bogdanova@irlix.ru'
    }, {
      name: 'Макаревич Анатолий',
      mail: 'anatoly.makarevich@irlix.ru'
    }, {
      name: 'Володин Сергей',
      mail: 'sergey.volodin@irlix.ru'
    }, {
      name: 'Кузьмин Александр',
      mail: 'aleksandr.kuzmin@irlix.ru'
    }, {
      name: 'Абсатарова Регина',
      mail: 'regina.absatarova@irlix.ru'
    }, {
      name: 'Колесник Анастасия',
      mail: 'anastasiya.kolesnik@irlix.ru'
    }, {
      name: 'Балашов Сергей',
      mail: 'sergei.balashov@irlix.ru'
    }, {
      name: 'Редькин Сергей',
      mail: 'sergei.redkin@irlix.ru'
    }, {
      name: 'Захаров Клим',
      mail: 'klim.zakharov@irlix.ru'
    }, {
      name: 'Богданов Никита',
      mail: 'nikita.bogdanov@irlix.ru'
    }, {
      name: 'Морозов Артем',
      mail: 'artеm.morozov@irlix.ru'
    }, {
      name: 'Мороз Иван',
      mail: 'ivan.moroz@irlix.ru'
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