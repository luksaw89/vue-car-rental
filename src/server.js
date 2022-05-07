const carsEndpoint = 'http://localhost:3000/cars';

export function fetchCars() {
  return fetch(carsEndpoint)
    .then((response) => response.json());
}
export function addCar(car) {
  return fetch(carsEndpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(car),
  });
}