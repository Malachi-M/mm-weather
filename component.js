class Weather extends HTMLElement {
  constructor() {
    super()

  }

  connectedCallback() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        const lat = position.coords.latitude
        const lon = position.coords.longitude

        const weatherServiceUrl = `api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}`

        fetch(weatherServiceUrl, {
          method: 'GET',
          mode: 'cors',
          headers: {
            "Content-Type": "application/json; charset=utf-8",
          }
        })
          .then(res => res.json())
          .then(data => { console.log('received: ', data) })
          .catch(e => console.log(new Error(e)))
      })
    }
  }
}

customElements.define('mm-weather', Weather)