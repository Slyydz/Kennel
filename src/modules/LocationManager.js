const remoteURL = "http://localhost:5002"

export const getLocationById = (locationId) => {
  //be sure your locations have good data and related to a location and location
  return fetch(`${remoteURL}/locations/${locationId}`)
  .then(res => res.json())
}

export const getAllLocations = () => {
  return fetch(`${remoteURL}/locations`)
  .then(res => res.json())
}

export const deleteLocation = (id) => {
  return fetch(`${remoteURL}/locations/${id}`, {
    method: "DELETE"
  })
  .then(res => res.json())
}

export const addLocation = (newLocation) => {
  return fetch(`${remoteURL}/locations`, {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(newLocation)
  }).then(response => response.json())
}