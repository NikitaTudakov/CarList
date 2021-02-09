const APi_URL = 'https://test-backend.esverito.com/';

const request = (url, options) => {
  return fetch(`${APi_URL}${url}`,options)
    .then(response => {
      if(!response.ok) {
        throw `${response.status} - ${response.statusText}`
      }

      return response.json();
    })
}

export const getCars = () => request('api/car/');

export const createCar = (brand, model, carNumber, engineType) => {
  return request('api/car/',{
    method: 'POST',
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    },
    body: JSON.stringify({
      brand,
      model,
      carNumber,
      engineType,
    }),
  });
}

export const removeCar = (url) => {
  return fetch(`${APi_URL}${url}`, {method: 'DELETE'})
}

export const editCar = (carId, data) => {
  return request(`api/car/${carId}`,{
    method: 'PATCH',
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    },
    body: JSON.stringify(data)
  });
}