import React, { Component } from 'react';


class Display extends Component {
  

  render() {

    return (
      <div className="col-sm col-md col-lg">
        <div className="card">

          <div className="card-body">
            <h5 className="card-title">{this.props.title}</h5>
            <div className="text-center ">
              <h1 style={{ color: `${this.props.color}` }}>
                {this.props.count}
          </h1></div>
          </div>

        </div>
      </div>


    );
  }
}


export default Display;