function app() {
  const counter = document.createElement('span');
  counter.classList.add('counter');

  const renderCount = (count: number) => {
    while (counter.firstChild) {
      counter.removeChild(counter.firstChild);
    }

    counter.appendChild(document.createTextNode(count.toString()));
  };

  let count = 0;

  // Display initial count
  renderCount(count);

  const incBtn = document.createElement('button');
  const decBtn = document.createElement('button');

  incBtn.appendChild(document.createTextNode('+'));
  decBtn.appendChild(document.createTextNode('-'));

  incBtn.classList.add('buttons-plus', 'buttons');
  decBtn.classList.add('buttons-minus', 'buttons');

  incBtn.addEventListener('click', () => renderCount(++count));
  decBtn.addEventListener('click', () => renderCount(--count));

  const container = document.createElement('div');
  container.classList.add('container');

  container.append(decBtn, counter, incBtn);

  document.body.appendChild(container);
}

app();
