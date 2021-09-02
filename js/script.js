/* load data from API  */
const loadData = data => {

   /* input field created */
  const inputField = document.getElementById('input-field')
  const inputValue = inputField.value

  /* clear input  */
  inputField.value = ''

  displaySpinner('block')
  displayErrorMessage('none')

  const url =`https://openlibrary.org/search.json?q=${inputValue}`
  fetch(url)
  .then(res => res.json())
  .then(data => loadBooks(data.numFound,data.docs))
}

/* spinner handling */
const displaySpinner = displayStyle =>{
  document.getElementById("spinner").style.display = displayStyle;
}

/* Error message handling */
const displayErrorMessage = displayStyle =>{
  document.getElementById("error-handle").style.display = displayStyle;
}


/* Books Loaded */
const loadBooks = (result,books) =>{
  const resultFound = document.getElementById('result');
  const res = resultFound.innerText = `${result} result found`;
  const divContainer = document.getElementById('div-container')
  divContainer.textContent = ''
  if(books.length === 0){
    displayErrorMessage('block')
  }
  books?.forEach(book => {
    const div = document.createElement('div')
    div.classList.add('col')
    div.innerHTML = `
        <div class="card p-4">
          <img src="https://covers.openlibrary.org/b/id/%7B
            ${book.cover_i}%7D-M.jpg" class="img-fluid rounded "  alt="...">
          <div class="card-body">
            <h5 class="card-title fs-4">Name: ${book.title}</h5></h5>
            <p class="card-text text-lg-start">
              Author: ${book.author_name ? book.author_name[0]: '' }
            </p>
            <p class="card-text text-lg-start">
              Publisher: ${book.publisher ? book.publisher[0]: ''}
            </p>
            <p class="card-text text-lg-start">
              Date Of Publish: ${book.first_publish_year ? book.first_publish_year: ''}
            </p>
          </div>
        </div>
    `
    divContainer.appendChild(div)
    
  });
  displaySpinner('none')
}