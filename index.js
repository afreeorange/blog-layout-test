(() => {
  const main = document.querySelector("main");

  /**
   * Create an Aside element and put it right after main. Have to do this
   * because there is no `insertAfter` 🤣
   */
  const aside = document.createElement("aside");
  main.parentNode.insertBefore(aside, main.nextSibling);

  const asideTypes = ["link", "media"];

  asideTypes.map((type) =>
    Array.from(document.querySelectorAll(`article[data-type=${type}]`)).map(
      (t) => aside.appendChild(t.cloneNode(true))
    )
  );
})();
