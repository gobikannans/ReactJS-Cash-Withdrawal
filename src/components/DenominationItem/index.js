import './index.css'

const DenominationItem = props => {
  const {details, onSubtract} = props
  const {value} = details

  const onClickSub = () => {
    onSubtract(value)
  }

  return (
    <li className="list-value-container">
      <button className="value-container" type="button" onClick={onClickSub}>
        <p className="value">{value}</p>
      </button>
    </li>
  )
}

export default DenominationItem
