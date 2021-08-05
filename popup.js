document.addEventListener('DOMContentLoaded', function() {
  let searchField = document.getElementById('ge-search');
  let timerId;
  let ul = document.getElementById('list');

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
  }, {
    name: 'Дмитрий Янушкевич',
    mail: 'dmitrii.yankushevich@irlix.ru'
  }, {
    name: 'Дмитрий Морозов',
    mail: 'dmitrii.morozov@irlix.ru'
  }, {
    name: 'Татьяна Зиганшина',
    mail: 'tatyana.ziganshina@irlix.ru'
  }, {
    name: 'Александр Рысев',
    mail: 'aleksandr.rysev@irlix.ru'
  }, {
    name: 'Лидия Милованова',
    mail: 'lidiya.milovanova@irlix.ru'
  }, {
    name: 'Станислав Лукин',
    mail: 'stanislav.lukin@irlix.ru'
  }, {
    name: 'Павел Ахрамеев',
    mail: 'pavel.akhrameev@irlix.ru'
  }, {
    name: 'Андрей Иванин',
    mail: 'andrey.ivanin@irlix.ru'
  }, {
    name: 'Юрий Платонов',
    mail: 'yuriy.platonov@irlix.ru'
  }, {
    name: 'Семён Дякин',
    mail: 'semen.dyakin@irlix.ru'
  }, {
    name: 'Илья Редькин',
    mail: 'iliya.redkin@irlix.ru'
  }, {
    name: 'Алексей Сторчак',
    mail: 'aleksey.storchak@irlix.ru'
  }, {
    name: 'Степан Еграшин',
    mail: 'egrashin.stepan@irlix.ru'
  }, {
    name: 'Владимир Калязин',
    mail: 'vladimir.kalyazin@irlix.ru'
  }, {
    name: 'Василий Кучкин',
    mail: 'vasily.kuchkin@irlix.ru'
  }, {
    name: 'Дарья Черёмухина',
    mail: 'daria.cheryomuhina@irlix.ru'
  }, {
    name: 'Вадим Пономарёв',
    mail: 'vadim.ponomaryov@irlix.ru'
  }, {
    name: 'Эмиль Ахметов',
    mail: 'emil.akhmetov@irlix.ru'
  }, {
    name: 'Даниил Староверов',
    mail: 'daniil.staroverov@irlix.ru' 
  }, {
    name: 'Егор Кощенков',
    mail: 'egor.koshchenkov@irlix.ru' 
  }, {
    name: 'Станислав Герлингер',
    mail: 'stanislav.gerlinger@irlix.ru' 
  }, {
    name: 'Мария Первак',
    mail: 'mariia.pervak@irlix.ru' 
  }, {
    name: 'Георгий Белинис',
    mail: 'georgii.belinis@irlix.ru' 
  }, {
    name: 'Мария Клопова',
    mail: 'mariia.klopova@irlix.ru' 
  }, {
    name: 'Михаил Синельников',
    mail: 'mikhail.sinelnikov@irlix.ru' 
  }, {
    name: 'Алексей Моисевич',
    mail: 'aleksei.moiseichev@irlix.ru' 
  }, {
    name: 'Иван Вязовкин',
    mail: 'ivan.viazovkin@irlix.ru' 
  }, {
    name: 'Сослан Цомаев',
    mail: 'soslan.tsomaev@irlix.ru' 
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