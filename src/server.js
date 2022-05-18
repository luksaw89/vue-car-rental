const carsEndpoint = 'http://localhost:3000/cars';
const clientsEndpoint = 'http://localhost:3000/clients';

export async function fetchCars() {
  const response = await fetch(carsEndpoint);
  return response.json();
}
export async function fetchClients() {
  const response = await fetch(clientsEndpoint)
  return response.json();
}
export async function addCar(car) {
  await fetch(carsEndpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(car),
  });
}
export async function addClient(client) {
  await fetch(clientsEndpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(client),
  });
}
export async function editClient(client) {
  await fetch(`${clientsEndpoint}/${client.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(client),
  });
}