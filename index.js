var EVENT_DOM_CONTENT_LOADED = 'DOMContentLoaded';

function getGreetingId() {
  return 'greeting';
}

function getGreeting() {
  return 'Una semplice estensione di prova, realizzata senza il minimo problema e capendo tutto istantaneamente. Le mie skill sono innate ed illimitate';
}

function getGreetingElement() {
  return document.getElementById(getGreetingId());
}

function renderGreeting() {
  getGreetingElement().textContent = getGreeting();
}

function fireWhenDOMContentIsLoaded() {
  renderGreeting();
}

document.addEventListener(EVENT_DOM_CONTENT_LOADED, fireWhenDOMContentIsLoaded);
