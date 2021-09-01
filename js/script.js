


const loadData = () => {
  // input field created
  const inputField = document.getElementById('input-field')
  const inputValue = inputField.value
  // clear input 
  inputField.value = ''
  const url =`http://openlibrary.org/search.json?q=${inputValue}`;
  fetch(url)
  .then(res => res.json())
  .then(data => loadUser(data.docs))
}



const loadUser = (books) =>{
  const divContainer = document.getElementById('div-container')
  books.forEach(book => {
    console.log(book)
    const div = document.createElement('div')
    div.classList.add('col')
    div.innerHTML = `
        <div class="card">
          <img src="..." class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">name</h5></h5>
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
}