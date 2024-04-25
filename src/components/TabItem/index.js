import './index.css'

const TabItem = props => {
  const {tabDetails, updateTabBtn, isActive} = props
  const {displayText, tabId} = tabDetails
  const onClickTabBtn = () => {
    updateTabBtn(tabId)
  }
  const getTabColored = isActive ? 'active' : ''
  return (
    <li className="tab-item">
      <button
        type="button"
        className={`tab-button ${getTabColored}`}
        onClick={onClickTabBtn}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
