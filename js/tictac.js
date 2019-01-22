console.log('tictactoe js connected');


var baris_size = 3,
  kosong = '&nbsp;',
  boxes = [],
  turn = 'X',
  score,
  moves;

  

function settingboard() {
  var board = document.createElement('table');
  board.setAttribute('border', 1);
  board.setAttribute('cellspacing', 0);

  var identifier = 1;
  for (var i = 0; i < baris_size; i++) {
    var row = document.createElement('tr');
    board.appendChild(row);

    for (var j = 0; j < baris_size; j++) {

      var cell = document.createElement('td');
      cell.setAttribute('height', 120);
      cell.setAttribute('width', 120);
      cell.setAttribute('align', 'center');
      cell.setAttribute('valign', 'center');
      cell.classList.add('col' + j, 'row' + i);

      if (i == j) {
        cell.classList.add('diagonal0');
      }

      if (j == baris_size - i - 1) {
        cell.classList.add('diagonal1');
      }

      cell.identifier = identifier;
      cell.addEventListener('click', set);
      row.appendChild(cell);
      boxes.push(cell);
      identifier += identifier;
    }

  }

  document.getElementById('tictactoe').appendChild(board);
  startNewGame();

}


function startNewGame() {
  score = {
    'X': 0,
    'O': 0
  };
  moves = 0;
  turn = 'X';
  boxes.forEach(function (kotak) {
    kotak.innerHTML = kosong;
  });
  
}


function win(clicked) {
 
  var memberOf = clicked.className.split(/\s+/);
  for (var i = 0; i < memberOf.length; i++) {
    var testClass = '.' + memberOf[i];
    var items = contains('#tictactoe ' + testClass, turn);
    
    if (items.length == baris_size) {
      return true;
    }
  }
  return false;
}


function contains(selector, text) {

  var elements = document.querySelectorAll(selector);
  

  return [].filter.call(elements, function (element) 
  {
    return RegExp(text).test(element.textContent);
  });

}


function set() {
  if (this.innerHTML !== kosong) {
    return;
  }

  this.innerHTML = turn;
  moves += 1;
  score[turn] += this.identifier;

  if (win(this)) {
   
    setTimeout(function(){  alert('Winner: Player ' + turn); }, 500);
    setTimeout(function(){startNewGame();}, 600);

  } else if (moves === baris_size * baris_size) {
    alert('Draw');
    startNewGame();

  } else {
    turn = turn === 'X' ? 'O' : 'X';
    document.getElementById('turn').textContent = 'Player ' + turn;
  }

}
settingboard() 

