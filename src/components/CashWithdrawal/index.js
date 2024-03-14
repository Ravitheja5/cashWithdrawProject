import {Component} from 'react'
import DenominationItem from '../DenominationItem'

import './index.css'

class CashWithdraw extends Component {
  render() {
    const {list} = this.props
    return (
      <div className="outer-container">
        <div className="bg-container">
          <div className="name-box">
            <p className="s-para">S</p>
            <p className="paragraph">Sarah Williams</p>
          </div>
          <div className="balance-box">
            <p className="balance-para">Your Balance</p>
            <div className="rupees-box">
              <h1 className="rupees-heading">2000</h1>
              <p className="in-rupees-para">in Rupees</p>
            </div>
          </div>
          <h1 className="withdraw-heading">Withdraw</h1>
          <p className="choose-sum-para">CHOOSE SUM (IN RUPEES)</p>
          <div className="cards-container">
            {list.map(object => (
              <DenominationItem item={object} key={object.id} />
            ))}
          </div>
        </div>
      </div>
    )
  }
}
export default CashWithdraw
