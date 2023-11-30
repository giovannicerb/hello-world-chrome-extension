var EVENT_DOM_CONTENT_LOADED = 'DOMContentLoaded';

function getGreetingId() {
  return 'greeting';
}

function getGreeting() {
  return 'Una semplice estensione di prova, realizzata "senza il minimo problema" e "capendo tutto istantaneamente". Ho trovato la estensione originale su github, e la ho copiata tramite fork. Ho finalmente capito come funzioni manifest, e come si aggiungano estensioni a Chrome. Poco ma buono, direi            ';
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
