var index = 0;

show_image(index);

function show_image(i){

    index += i;

    var img = document.getElementsByClassName("image");

    for(i=0; i<img.length; i++){
        img[i].style.display = "none";
    }

    if(index > img.length - 1){
        index = 0;
    }else if(index < 0){
        index = img.length - 1;
    }

    img[index].style.display = "block";


}

function filterBooks() {
  const authorFilter = document.getElementById('sort-author').value.toLowerCase();
  const genreFilter = document.getElementById('sort-genre').value.toLowerCase();
  const dateFilter = document.getElementById('sort-date').value;

  const books = document.querySelectorAll('.book');

  books.forEach(book => {
    const bookAuthor = book.getAttribute('data-author').toLowerCase();
    const bookGenre = book.getAttribute('data-genre').toLowerCase();
    const bookDate = book.getAttribute('data-date');

    const matchesAuthor = authorFilter === 'all' || bookAuthor.includes(authorFilter);
    const matchesGenre = genreFilter === 'all' || bookGenre.includes(genreFilter);
    const matchesDate = dateFilter === 'all' || bookDate === dateFilter;

    if (matchesAuthor && matchesGenre && matchesDate) {
      book.style.display = 'block';
    } else {
      book.style.display = 'none';
    }
  });
}

