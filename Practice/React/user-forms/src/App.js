import unsplash from './api/unsplash'
import React, { Component } from 'react'
import SearchBar from './components/SearchBar'
import ImageList from './components/ImageList'

export default class App extends Component {
  state = { images: [] }
  onSearchSubmit = async (term) => {
    const { data } = await unsplash.get('/search/photos', {
      params: { query: term },
    })
    this.setState({ images: data.results })
  }
  render() {
    return (
      <div className='ui container' style={{ marginTop: '10px' }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    )
  }
}
