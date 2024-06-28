const baseUrl = "http://localhost:3001";

function processServer(res) {
  return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
}

function getItems() {
  return fetch(`${baseUrl}/items`).then((res) => processServer(res));
}

function addItem({ name, weather, imageUrl }) {
  return fetch(`${baseUrl}/items`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: name,
      imageUrl: imageUrl,
      weather: weather,
    }),
  }).then((res) => processServer(res));
}

function deleteItem({ _id }) {
  debugger;
  return fetch(`${baseUrl}/items/${_id}`, {
    method: "DELETE",
  }).then((res) => processServer(res));
}

export { getItems, addItem, deleteItem };
