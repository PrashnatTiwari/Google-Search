import './index.css'

const Item = props => {
  const {itemDetails, updateSearchInput} = props
  const {suggestion} = itemDetails
  const onClickSuggestion = () => {
    updateSearchInput(suggestion)
  }
  return (
    <li className="list-item">
      <p>{suggestion}</p>
      <div>
        <button className="button" type="button" onClick={onClickSuggestion}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
            alt="arrow"
            className="arrow-image"
          />
        </button>
      </div>
    </li>
  )
}

export default Item
