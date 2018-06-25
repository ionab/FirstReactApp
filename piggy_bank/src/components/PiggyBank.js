import React from "react";

class PiggyBank extends React.Component{
  constructor(props){
    super(props);
    this.state = {  //a Component manages it's own state
      total: 0
    }
    this.deposit = this.deposit.bind(this);
    this.withdraw = this.withdraw.bind(this);
  }
  deposit() {
    // this.setState({total: 10})
    this.setState((prevState) => {
      return {total: prevState.total + this.props.depositAmount};
    })
  }

  withdraw(){
    this.setState((prevState) => {
      return {total: prevState.total - this.props.depositAmount};
    })
  }

  //props are fixed and come from the super class
  //state comes from the class and can be changed and will be the things you want to change
  render(){
    return ( //JSX
      <div>
        <h1>{this.props.owner}'s Piggy Bank</h1>
        <p>I contain £{this.state.total}</p>
        <button onClick={this.deposit}>Add funds</button>
        <button onClick={this.withdraw}>Withdraw Funds</button>

      </div>
    )
  }
}
export default PiggyBank;
