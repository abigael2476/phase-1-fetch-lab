// fetchBooks is called automatically when index.html loads
function fetchBooks() {
  // return fetch so tests can access it
  return fetch("https://anapioficeandfire.com/api/books")
    .then((resp) => resp.json())
    .then((books) => renderBooks(books));
}

// this function is already provided for you in the lab
function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach((book) => {
    const h2 = document.createElement('h2');
    h2.textContent = book.name;
    main.appendChild(h2);
  });
}

// call fetchBooks so it runs when page loads
document.addEventListener("DOMContentLoaded", fetchBooks);

