import React, { Component } from 'react';


class ButtonContainer extends Component {

constructor(props) {
    super();
 
  }

  render() {
    return (
      <div className="container">
        <div className="row" style={{ border: 'solid gray' }}>
           
            <button type="button"  
              className="btn btn-primary"
              onClick={this.props.increment}
            >
              +
        </button>

            <button type="button"  
                className="btn btn-primary"
                onClick={this.props.decrement}
                >
              -
        </button>
         
          <button type="button"  
              className="btn btn-primary"
              onClick={this.props.reset}
              >
            Reset
        </button>

        </div>


      </div>

    );
  }
}


export default ButtonContainer;