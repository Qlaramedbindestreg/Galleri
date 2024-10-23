const params = new URLSearchParams(window.location.search);
const id = params.get('id');


fetch(`https://swapi.dev/api/people/${id}/`)
    .then(response => response.json())
    .then(character => {
        const detailsDiv = document.getElementById('character-details');
        detailsDiv.innerHTML = `
            <h2>${character.name}</h2>
            <p>Height: ${character.height}</p>
            <p>Mass: ${character.mass}</p>
            <p>Hair Color: ${character.hair_color}</p>
            <p>Skin Color: ${character.skin_color}</p>
            <p>Eye Color: ${character.eye_color}</p>
            <p>Birth Year: ${character.birth_year}</p>
            <p>Gender: ${character.gender}</p>
        `;
    })

