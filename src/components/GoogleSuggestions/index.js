import {Component} from 'react'

import Item from '../SuggestionItem'

import './index.css'

class GoogleSuggestions extends Component {
  state = {
    searchInput: '',
  }

  updateSearchInput = value => {
    this.setState({
      searchInput: value,
    })
  }

  OnChangeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  render() {
    const {suggestionsList} = this.props
    const {searchInput} = this.state
    const searchedResult = suggestionsList.filter(each =>
      each.suggestion.toLowerCase().includes(searchInput.toLocaleLowerCase()),
    )

    return (
      <div className="bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
          className="image"
        />
        <div className="card-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
            alt="search icon"
            className="search-logo"
          />
          <input
            type="search"
            value={searchInput}
            placeholder="Search Google"
            className="input"
            onChange={this.OnChangeSearchInput}
          />
          <ul>
            {searchedResult.map(eachItem => (
              <Item
                itemDetails={eachItem}
                key={eachItem.id}
                updateSearchInput={this.updateSearchInput}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
