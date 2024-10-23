const charactersPerPage = 10; 
let currentPage = 1;
let totalPages = 1; 

// Dropdown
document.querySelector('.dropdown-button').addEventListener('click', function() {
    const dropdownContent = document.querySelector('.dropdown-content');
    dropdownContent.classList.toggle('show'); 

  
    if (dropdownContent.classList.contains('show')) {
        fetchCharacters(currentPage);
    }
});

// Fetch
function fetchCharacters(page) {
    fetch(`https://swapi.dev/api/people/?page=${page}`)
        .then(response => response.json())
        .then(data => {
            const characterList = document.getElementById('character-list');
            
           
            const paginationButtons = document.querySelector('.pagination-buttons');
            characterList.innerHTML = ''; 
            characterList.appendChild(paginationButtons); 

          
            data.results.forEach((character) => {
                const characterLink = document.createElement('a');
                const characterId = character.url.split('/')[5]; 
                characterLink.href = `detail.html?id=${characterId}`;
                characterLink.textContent = character.name;

                characterList.insertBefore(characterLink, paginationButtons); 
            });

       
            updatePaginationButtons();
        })
        .catch(error => console.error('Error fetching characters:', error));
}

// Pagination buttons
function updatePaginationButtons() {
    const prevButton = document.getElementById('prev-button');
    const nextButton = document.getElementById('next-button');

    prevButton.disabled = (currentPage === 1); 
    nextButton.disabled = (currentPage === totalPages); 

    prevButton.onclick = () => {
        if (currentPage > 1) {
            currentPage--;
            fetchCharacters(currentPage); 
        }
    };

    nextButton.onclick = () => {
        if (currentPage < totalPages) {
            currentPage++;
            fetchCharacters(currentPage); 
        }
    };
}

// Fetch total number of characters and calculate total pages
function fetchTotalCharacterCount() {
    fetch('https://swapi.dev/api/people')
        .then(response => response.json())
        .then(data => {
            const totalCharacters = data.count;
            totalPages = Math.ceil(totalCharacters / charactersPerPage);
            fetchCharacters(currentPage); 
        })
        .catch(error => console.error('Error fetching total character count:', error));
}

// Function to initialize the page
fetchTotalCharacterCount();


