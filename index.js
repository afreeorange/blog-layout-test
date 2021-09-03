(() => {
  const main = document.querySelector("main");

  // Create an Aside element and put it next to main
  const aside = document.createElement("aside");
  main.parentNode.insertBefore(aside, main.nextSibling);

  const links = document.querySelectorAll("article[data-type=links]");
  const media = document.querySelectorAll("article[data-type=media]");
  const pasta = document.querySelectorAll("article[data-type=pasta]");

  Array.from(links).map((l) => aside.appendChild(l.cloneNode(true)));
  Array.from(media).map((m) => aside.appendChild(m.cloneNode(true)));
  Array.from(pasta).map((m) => aside.appendChild(m.cloneNode(true)));
})();
