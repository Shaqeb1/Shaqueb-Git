import React, { Component } from 'react'

export default class SearchBar extends Component {
  state = { term: '' }

  render() {
    return (
      <div className='ui segment'>
        <form
          onSubmit={(e) => {
            e.preventDefault()
            this.props.onSubmit(this.state.term)
          }}
          className='ui form'
        >
          <div className='field'>
            <label>IMAGE SEARCH</label>
            <input
              type='text'
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    )
  }
}
