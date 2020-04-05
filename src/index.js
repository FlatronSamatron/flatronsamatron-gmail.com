const keyEn = [
  ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
  ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del'],
  ['CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter'],
  ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '↑', 'Shift'],
  ['Ctrl', 'Win', 'Alt', ' ', 'Alt', '←', '↓', '→', 'Ctrl'],
];
const keyRu = [
  ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
  ['Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'Del'],
  ['CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter'],
  ['Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '↑', 'Shift'],
  ['Ctrl', 'Win', 'Alt', ' ', 'Alt', '←', '↓', '→', 'Ctrl'],
];

const keyEnShift = [
  ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace'],
  ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '{', '}', '|', 'Del'],
  ['CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ':', '"', 'Enter'],
  ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', '<', '>', '?', '↑', 'Shift'],
  ['Ctrl', 'Win', 'Alt', ' ', 'Alt', '←', '↓', '→', 'Ctrl'],
].map((el) => el.map((ell) => {
  if (el === 'Tab'
        || ell === 'Backspace'
        || ell === 'CapsLock'
        || ell === 'Del'
        || ell === 'Enter'
        || ell === 'Shift'
        || ell === 'Win'
        || ell === 'Alt'
        || ell === 'Ctrl') {
    return ell;
  }
  return ell.toUpperCase();
}));

const keyRuShift = [
  ['Ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'Backspace'],
  ['Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '/', 'Del'],
  ['CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter'],
  ['Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', ',', '↑', 'Shift'],
  ['Ctrl', 'Win', 'Alt', ' ', 'Alt', '←', '↓', '→', 'Ctrl'],
].map((el) => el.map((ell) => {
  if (el === 'Tab'
          || ell === 'Backspace'
          || ell === 'CapsLock'
          || ell === 'Del'
          || ell === 'Enter'
          || ell === 'Shift'
          || ell === 'Win'
          || ell === 'Alt'
          || ell === 'Ctrl') {
    return ell;
  }
  return ell.toUpperCase();
}));

let wordKey = keyEn;

if (localStorage.getItem('lang') === 0) {
  localStorage.setItem('lang', 'en');
}

if (localStorage.getItem('lang') === 'en') {
  wordKey = keyEn;
} else {
  wordKey = keyRu;
}


let p = document.querySelectorAll('p');
const keyboard = document.createElement('div');
const textArea = document.createElement('textarea');

keyboard.className = 'keyboard';
textArea.className = 'text-area';
document.body.appendChild(textArea);
document.body.appendChild(keyboard);
let innerHtml = '';

function changeClass(el, idx, i) {
  const ell = el;
  if (idx === 0 && i === 0) { ell.className = 'Backquote'; } else if ((idx === 0 && i === 1)
        || (idx === 0 && i === 2)
        || (idx === 0 && i === 3)
        || (idx === 0 && i === 4)
        || (idx === 0 && i === 5)
        || (idx === 0 && i === 6)
        || (idx === 0 && i === 7)
        || (idx === 0 && i === 8)
        || (idx === 0 && i === 9)
        || (idx === 0 && i === 10)) { ell.className = `Digit${i}`; } else if (idx === 0 && i === 11) { ell.className = 'Minus'; } else if (idx === 0 && i === 12) { ell.className = 'Equal'; } else if (idx === 0 && i === 13) { ell.className = 'Backspace'; } else if (idx === 1 && i === 0) { ell.className = 'Tab'; } else if (idx === 1 && i === 11) { ell.className = 'BracketLeft'; } else if (idx === 1 && i === 12) { ell.className = 'BracketRight'; } else if (idx === 1 && i === 13) { ell.className = 'Backslash'; } else if (idx === 1 && i === 14) { ell.className = 'Delete'; } else if (idx === 2 && i === 0) { ell.className = 'CapsLock'; } else if (idx === 2 && i === 10) { ell.className = 'Semicolon'; } else if (idx === 2 && i === 11) { ell.className = 'Quote'; } else if (idx === 2 && i === 12) { ell.className = 'Enter'; } else if (idx === 3 && i === 0) { ell.className = 'ShiftLeft'; } else if (idx === 3 && i === 8) { ell.className = 'Comma'; } else if (idx === 3 && i === 9) { ell.className = 'Period'; } else if (idx === 3 && i === 10) { ell.className = 'Slash'; } else if (idx === 3 && i === 11) { ell.className = 'ArrowUp'; } else if (idx === 3 && i === 12) { ell.className = 'ShiftRight'; } else if (idx === 4 && i === 0) { ell.className = 'ControlLeft'; } else if (idx === 4 && i === 1) { ell.className = 'MetaLeft'; } else if (idx === 4 && i === 2) { ell.className = 'AltLeft'; } else if (idx === 4 && i === 3) { ell.className = 'Space'; } else if (idx === 4 && i === 4) { ell.className = 'AltRight'; } else if (idx === 4 && i === 5) { ell.className = 'ArrowLeft'; } else if (idx === 4 && i === 6) { ell.className = 'ArrowDown'; } else if (idx === 4 && i === 7) { ell.className = 'ArrowRight'; } else if (idx === 4 && i === 8) { ell.className = 'ControlRight'; } else { ell.className = `Key${keyEn[idx][i].toUpperCase()}`; }
}


function render(keys) {
  keys.forEach((el, idx) => {
    const div = document.createElement('div');
    let key;
    div.className = `div${idx}`;
    keyboard.appendChild(div);
    el.forEach((ell, i) => {
      key = document.createElement('p');
      key.innerHTML = ell;
      changeClass(key, idx, i);
      div.appendChild(key);
    });
  });
  p = document.querySelectorAll('p');
  p.forEach((el) => el.addEventListener('mousedown', (e) => {
    e.target.style.borderRadius = `${50}px`;
    e.target.style.background = '#2CFD72';
    if (e.target.innerText === 'Backspace') { innerHtml = (innerHtml.substring(0, innerHtml.length - 1)); } else if (e.target.innerText === 'Tab') { innerHtml += '     '; } else if (e.target.innerText === 'Enter') { innerHtml += '\n'; } else if (e.target.innerText === 'Space') { innerHtml += ' '; } else if (e.target.innerText === 'Shift') { innerHtml += ''; } else if (e.target.innerText === 'Alt') { innerHtml += ''; } else if (e.target.innerText === 'Ctrl') { innerHtml += ''; } else if (e.target.innerText === 'Win') { innerHtml += ''; } else if (e.target.innerText === 'CapsLock') { innerHtml += ''; } else if (e.target.innerText === '←') { innerHtml += ''; } else if (e.target.innerText === '→') { innerHtml += ''; } else if (e.target.innerText === '↓') { innerHtml += ''; } else if (e.target.innerText === '↑') { innerHtml += ''; } else if (e.target.innerText === 'Del') { innerHtml += ''; } else { innerHtml += el.innerText; }
    textArea.value = innerHtml;
  }));
  p.forEach((el) => el.addEventListener('mouseup', (e) => {
    e.target.style.borderRadius = `${5}px`;
    e.target.style.background = '#444444';
  }));
  p.forEach((el) => el.addEventListener('mouseout', (e) => {
    e.target.style.borderRadius = `${5}px`;
    e.target.style.background = '#444444';
  }));
}

let caps = 0;

function logKey(e) {
  e.preventDefault();
  if (e.code === 'ShiftLeft' && e.altKey) {
    if (wordKey === keyEn) {
      wordKey = keyRu;
    } else {
      wordKey = keyEn;
    }

    if (wordKey === keyEn) {
      localStorage.setItem('lang', 'en');
    } else {
      localStorage.setItem('lang', 'ru');
    }

    keyboard.innerHTML = '';
    render(wordKey);
  }
  if (e.code === 'CapsLock') {
    if (caps === 0) {
      caps = 1;
    } else {
      caps = 0;
    }
    if (caps === 1) {
      if (wordKey[0][0] === '`') {
        wordKey = keyEnShift;
        keyboard.innerHTML = '';
        render(wordKey);
      }
      if (wordKey[0][0] === 'ё') {
        wordKey = keyRuShift;
        keyboard.innerHTML = '';
        render(wordKey);
      }
    }
    if (caps === 0) {
      if (wordKey[0][0] === '~') {
        wordKey = keyEn;
        keyboard.innerHTML = '';
        render(wordKey);
      }
      if (wordKey[0][0] === 'Ё') {
        wordKey = keyRu;
        keyboard.innerHTML = '';
        render(wordKey);
      }
    }
  }
  if ((e.code === 'ShiftLeft' || e.code === 'ShiftRight') && caps !== 1) {
    if (wordKey[0][0] === '`') {
      wordKey = keyEnShift;
      keyboard.innerHTML = '';
      render(wordKey);
    }
    if (wordKey[0][0] === 'ё') {
      wordKey = keyRuShift;
      keyboard.innerHTML = '';
      render(wordKey);
    }
  }

  p.forEach((el) => {
    if (e.code === el.getAttribute('class')) {
      const ell = el;
      ell.style.borderRadius = `${50}px`;
      ell.style.background = '#2CFD72';
      if (e.code === 'Backspace') { innerHtml = (innerHtml.substring(0, innerHtml.length - 1)); } else if (e.code === 'Tab') { innerHtml += '     '; } else if (e.code === 'Enter') { innerHtml += '\n'; } else if (e.code === 'Space') { innerHtml += ' '; } else if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') { innerHtml += ''; } else if (e.code === 'AltLeft' || e.code === 'AltRight') { innerHtml += ''; } else if (e.code === 'ControlLeft' || e.code === 'ControlRight') { innerHtml += ''; } else if (e.code === 'MetaLeft') { innerHtml += ''; } else if (e.code === 'CapsLock') { innerHtml += ''; } else if (e.code === 'ArrowLeft') { innerHtml += ''; } else if (e.code === 'ArrowRight') { innerHtml += ''; } else if (e.code === 'ArrowDown') { innerHtml += ''; } else if (e.code === 'ArrowUp') { innerHtml += ''; } else if (e.code === 'Delete') { innerHtml += ''; } else { innerHtml += el.innerText; }
    }
  });
  textArea.value = innerHtml;
}

function logaoutKey(e) {
  p.forEach((el) => {
    const ell = el;
    if (e.code === el.getAttribute('class')) {
      ell.style.borderRadius = `${5}px`;
      ell.style.background = '#444444';
      if (caps === 1) {
        if (el.getAttribute('class') === 'CapsLock') {
          ell.style.borderRadius = `${50}px`;
          ell.style.background = '#2CFD72';
        }
      }
    }
  });
  if ((e.code === 'ShiftLeft' || e.code === 'ShiftRight') && caps !== 1) {
    if (wordKey[0][0] === '~') {
      wordKey = keyEn;
      keyboard.innerHTML = '';
      render(wordKey);
    }
    if (wordKey[0][0] === 'Ё') {
      wordKey = keyRu;
      keyboard.innerHTML = '';
      render(wordKey);
    }
  }
}


document.addEventListener('keydown', logKey);
document.addEventListener('keyup', logaoutKey);
render(wordKey);
