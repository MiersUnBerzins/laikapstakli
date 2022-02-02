//prasa datus no json

function fetchData() {
  fetch("./laiks.json")
  .then(response => {
    if (!response.ok) {
      throw Error("erawr");
    }

//iegūst atbildi no json

    return response.json();
  })

  .then(data => {
    const tabula = data.map(persona => {
      return `
          <tr>
            <td>${persona.datums}</td>
            <td>${persona.pilseta}</td>
            <td>${persona.laikapstakli}</td>
            <td>${persona.vejs}</td>
            <td>${persona.temp}</td>
            <td>${persona.vards}</td>
          </tr>
      `;
    })
    .join("");

    document.querySelector('#showdata').innerHTML = tabula;
  })

// ko sistēmai darīt, ja notiek kļūda

  .catch(error => {
    console.log(error);
  });
}

fetchData();
