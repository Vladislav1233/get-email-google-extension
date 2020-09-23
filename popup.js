document.addEventListener('DOMContentLoaded', function() {
  function getListContent() {
    let result = [];
  
    for(let i=1; i<=3; i++) {
      let li = document.createElement('li');
      li.append(i);
      result.push(li);
    }
  
    return result;
  }
  let ul = document.getElementById('list');
  
}, false)