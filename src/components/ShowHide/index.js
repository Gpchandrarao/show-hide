// Write your code here
import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {
    isFirstName: true,
    isLastName: true,
  }

  onFirstName = () => {
    this.setState(prevState => ({isFirstName: !prevState.isFirstName}))
  }

  onLastName = () => {
    this.setState(prevState => ({isLastName: !prevState.isLastName}))
  }

  getFirstNameText = () => {
    const {isFirstName} = this.state

    return isFirstName ? ' ' : <p className="name">Joe</p>
  }

  getLastName = () => {
    const {isLastName} = this.state

    return isLastName ? ' ' : <p className="name">jonas</p>
  }

  render() {
    const onFirstName = this.getFirstNameText()

    const onLastName = this.getLastName()

    return (
      <div className="container">
        <h1 className="heading">Show/Hide</h1>
        <div className="show">
          <div className="textContainer">
            <button className="button" type="button" onClick={this.onFirstName}>
              Show/Hide Firstname
            </button>
            {onFirstName}
          </div>
          <div>
            <button className="button" type="button" onClick={this.onLastName}>
              Show/Hide Lastname
            </button>
            {onLastName}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
