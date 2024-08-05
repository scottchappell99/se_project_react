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

function addItem({ name, imageUrl, weather }, token) {
  return request(`${baseUrl}/items`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      name: name,
      imageUrl: imageUrl,
      weather: weather,
    }),
  });
}

function deleteItem({ _id }, token) {
  return request(`${baseUrl}/items/${_id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  });
}

function editUser({ name, avatar }, token) {
  return request(`${baseUrl}/users/me`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      name: name,
      avatar: avatar,
    }),
  });
}

export { getItems, addItem, deleteItem, editUser, request };
