import React from 'react';

class LifecycleComponent extends React.Component {
  // Mouting
  // constructor(props) {
  //   super(props);
  //   this.state = { favoritecolor: 'red' };
  // }
  // componentDidMount() {
  //   setTimeout(() => {
  //     console.log('Call componentDidMount');
  //     this.setState({ favoritecolor: 'yellow' });
  //   }, 4000);
  // }
  // // componentDidUpdate() {
  // //   document.getElementById('mydiv').innerHTML =
  // //     'The updated favorite is ' + this.state.favoritecolor;
  // // }
  // render() {
  //   return (
  //     <div>
  //       <h1>My Favorite Color is {this.state.favoritecolor}</h1>
  //       {/* <div id="mydiv"></div> */}
  //     </div>
  //   );
  // }
  constructor(props) {
    super(props);
    this.state = { show: true };
  }
  deleteComponent = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <div>
        {this.state.show && <Child />}
        <button type="button" onClick={this.deleteComponent}>
          Delete Component
        </button>
      </div>
    );
  }
}

class Child extends React.Component {
  componentWillUnmount() {
    alert('Delete me?');
  }
  render() {
    return <h1>Hello World!</h1>;
  }
}

export default LifecycleComponent;
