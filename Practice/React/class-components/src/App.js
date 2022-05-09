import React from 'react'
import SeasonDisplay from './SeasonDisplay'

class App extends React.Component {
  state = { lat: null, errorMessage: '' }

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
    )
  }

  render() {
    return (
      <div>
        {this.state.lat && <SeasonDisplay lat={this.state.lat} />}
        {this.state.errorMessage && <div>Error: {this.state.errorMessage}</div>}
      </div>
    )
  }
}

export default App
