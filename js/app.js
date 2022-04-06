const searchBook = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    // clear data
    searchField.value = '';
    if(searchText == ''){
        const p = document.createElement('p');
        p.innerHTML = `
        <p>Inter Valid Book Name</p>
        `;
        
    }
    else{
           //load data
        const url = `https://openlibrary.org/search.json?q=${searchText}`;
         console.log(url);
        fetch(url)
        .then(res => res.json())
        .then(data => displaySearchResult(data.docs));
    }

}
const displaySearchResult = docs => {
    const searchResult = document.getElementById('search-result');
    searchResult.textContent = ``;
    docs.forEach(doc => {
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
            <div style="padding: 10%; border: 3px solid gray" class="card-body">
            <img src="https://covers.openlibrary.org/b/id/${doc.cover_i}-M.jpg" class="card-img-top" alt="...">
             <h2 class="card-title">${doc.title}</h2>
             <h5 class="card-title">${doc.author_name}</h5>
             <h6 class="card-text">${doc.first_publish_year}</h6>
             <p class="card-text">${doc.publisher}</p>
        </div>
      </div>
        `;
        searchResult.appendChild(div);
    })
}
