let lists = document.getElementsByClassName('list');
let rightBox = document.getElementById('right');
let leftBox = document.getElementById('left');
let resetButton = document.getElementById('reset');
let selected = null;

for (let list of lists) {
  list.addEventListener('dragstart', function (e) {
    selected = e.target;
  });
}

rightBox.addEventListener('dragover', function (e) {
  e.preventDefault();
});

rightBox.addEventListener('drop', function (e) {
  if (selected) {
    rightBox.appendChild(selected);
    selected = null;
  }
});

leftBox.addEventListener('dragover', function (e) {
  e.preventDefault();
});

leftBox.addEventListener('drop', function (e) {
  if (selected) {
    leftBox.appendChild(selected);
    selected = null;
  }
});

resetButton.addEventListener('click', function () {
  let items = rightBox.querySelectorAll('.list');
  items.forEach(function (item) {
    leftBox.appendChild(item);
  });
});
