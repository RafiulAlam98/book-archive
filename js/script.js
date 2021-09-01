/* load data from API  */

const loadData = data => {
   // input field created
  const inputField = document.getElementById('input-field')
  const inputValue = inputField.value
  // clear input 
  inputField.value = ''
  displaySpinner('block')
  // displaySearchResult('none')
  const url =`http://openlibrary.org/search.json?q=${inputValue}`;
  fetch(url)
  .then(res => res.json())
  .then(data => loadUser(data.docs))
}

/* spinner handling */

const displaySpinner = (displayStyle) =>{
  document.getElementById("spinner").style.display = displayStyle;
}
const displayErrorMessage = (displayStyle) =>{
  document.getElementById("error-handle").style.display = displayStyle;
}
// const displaySearchResult = (displayStyle) =>{
//   document.getElementById("div-container").style.display = displayStyle;
// }



const loadUser = books =>{
  const divContainer = document.getElementById('div-container')
  divContainer.textContent = ''
  if(books.length === 0){
    console.log('no item found')
    displayErrorMessage('block')
  }
  books?.forEach(book => {
    const div = document.createElement('div')
    div.classList.add('col')
    div.innerHTML = `
        <div class="card">
          <img src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">Name: ${book.title}</h5></h5>
            <h5 class="card-title">
              Author: ${book.author_name ? book.author_name[0]: '' }
            </h5>
            <p class="card-text">
              Publisher: ${book.publisher ? book.publisher[0]: ''}
            </p>
            <p class="card-text">
              Date Of Publish: ${book.publish_date ? book.publish_date[0]: ''}
            </p>
          </div>
        </div>
    `
    divContainer.appendChild(div)
    
  });
  displaySpinner('none')
  // displaySearchResult('block')
}