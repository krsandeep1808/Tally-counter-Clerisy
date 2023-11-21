import React, { Component } from 'react';
import DisplayContainer from './Components/DisplayContainer'
import ButtonContainer from './Components/ButtonContainer'


export default class TallyCounterApp extends Component {

  constructor() {
    super();

    this.state = {
      title: 'Tally Counter (Clerisy)',
      data: [
        { id: 1, title: 'ADD', color: 'green' },
        { id: 2, title: 'OUT', color: 'gray' },
        { id: 3, title: 'TOTAL', color: 'red' }
      ],
      countIn: 0,
      countOut: 0,
      countTotal: 0
    };


    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);

  }

  increment() {
    console.log("Increment Elements");

    this.setState((prevState) => ({
      countIn: prevState.countIn + 1,
      countTotal: prevState.countTotal + 1
    }));


  }



  decrement() {
    console.log("Decrement Elements");
    if (this.state.countIn != 0) {
      this.setState((prevState) => ({
        countIn: prevState.countIn - 1,
        countOut: prevState.countOut + 1
      }));
    } else {
      console.log("In is Empty");
    }


  }

  reset() {
    console.log("Reset Elements");
    this.setState(state => ({
      countIn: 0,
      countOut: 0,
      countTotal: 0
    }));
  }




  render() {

    return (
      <div className="container" style={{ padding: 16 }}>
        <div className="navbar navbar-dark bg-dark">
          <h2 style={{ color: "white" }}>{this.state.title}</h2>
        </div>
        <DisplayContainer data={this.state.data}
          countIn={this.state.countIn}
          countOut={this.state.countOut}
          countTotal={this.state.countTotal}
        />
        <div>
          <ButtonContainer
            increment={this.increment}
            decrement={this.decrement}
            reset={this.reset} />
        </div>
      </div>
    );
  }
}
