import React, { Component } from 'react';
class NewComponent extends React.Component {
    render() {
      return (
        <div>
          Hello {this.props.name}
        </div>
      );
    }
  }


  export default NewComponent;