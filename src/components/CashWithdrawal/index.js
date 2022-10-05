import {Component} from 'react'
import DenominationItem from '../DenominationItem'
import './index.css'

class CashWithdrawal extends Component {
  state = {count: 2000}

  onSubtract = value => {
    this.setState(prevState => ({
      count: prevState.count - value,
    }))
  }

  render() {
    const {count} = this.state
    const {denominationsList} = this.props

    return (
      <div className="bg-container">
        <div className="card">
          <div className="initial">
            <div className="initial-name-container">
              <p className="initial-name">S</p>
            </div>
            <p className="full-name">Sarah Williams</p>
          </div>
          <div className="balance-container">
            <p className="balance">Your Balance</p>
            <div>
              <p className="balanceRs">{count}</p>
              <p className="rupees">In Rupees</p>
            </div>
          </div>
          <p className="heading">Withdraw</p>
          <p className="paragraph">CHOOSE SUM (IN RUPEES)</p>
          <ul className="list-container">
            {denominationsList.map(eachItem => (
              <DenominationItem
                details={eachItem}
                key={eachItem.id}
                onSubtract={this.onSubtract}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
