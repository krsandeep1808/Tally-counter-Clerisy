import React, { Component } from 'react';
import Display from './Display'

class DisplayContainer extends Component {

  render() {

    return (
      <div style={{ padding: '5px 5px' }}>
        <div className="row">
          <Display
            key={this.props.data[0].id}
            title={this.props.data[0].title}
            color={this.props.data[0].color}
            count={this.props.countIn}
          />
          <Display
            key={this.props.data[1].id}
            title={this.props.data[1].title}
            color={this.props.data[1].color}
            count={this.props.countOut}
          />
           <Display
            key={this.props.data[2].id}
            title={this.props.data[2].title}
            color={this.props.data[2].color}
            count={this.props.countTotal}
          />
        </div>

      </div>

    );
  }
}


export default DisplayContainer;