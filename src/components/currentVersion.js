function currentVersion() {
  const verEl = document.querySelectorAll("#current-version");
  const verName = '0.1.6-jean-michel-basquiat--igor-pink';
  for(let i = 0; i < verEl.length; i++) {
    verEl[i].textContent = verName;
  }
}

currentVersion();
