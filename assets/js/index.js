const roomsList = document.querySelector(".rooms-list");

const render = (data) => {
  data.map(room => {
    const li = document.createElement('li')

    li.classList.add('room')

    li.innerHTML = `
    <div>
      <img src="${room.photo}" alt="${room.name}">
    </div>
    <div class="details">
      <span class="room-type">${room.property_type}</span>
      <h3 class="room-title">${room.name.toLowerCase()}</h3>
      <span class="room-price"><strong>R$ ${room.price}</strong>/noite</span>
    </div>
    `

    roomsList.appendChild(li)
  })
};

fetch(
  "https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72"
)
  .then((response) => response.json())
  .then((data) => render(data))
  .catch((err) => console.error(err));
