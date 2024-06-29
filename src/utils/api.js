const baseUrl = "http://localhost:3001";

function request(url, options) {
  return fetch(url, options).then(parseRequest);
}

function parseRequest(res) {
  return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
}

function getItems() {
  return request(`${baseUrl}/items`);
}

function addItem({ name, imageUrl, weather }) {
  return request(`${baseUrl}/items`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: name,
      imageUrl: imageUrl,
      weather: weather,
    }),
  });
}

function deleteItem({ _id }) {
  return request(`${baseUrl}/items/${_id}`, {
    method: "DELETE",
  });
}

export { getItems, addItem, deleteItem, request, parseRequest };
