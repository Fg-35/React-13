import React from 'react';
import './App.css';
// import DisplayEmployee from './components/DisplayEmployee';
// import FormEmployee from './components/FormMovies';
// import axios from 'axios';
import FormMovies from './components/FormMovies';

// const sampleEmployee = {
//   gender: 'male',
//   name: {
//     first: 'Charlie',
//     last: 'Thompson',
//   },
//   location: {
//     street: {
//       number: 761,
//       name: 'Tay Street',
//     },
//     city: 'Timaru',
//     postcode: 76111,
//   },
//   email: 'charlie.thompson@example.com',
//   picture: {
//     medium: 'https://randomuser.me/api/portraits/med/men/40.jpg',
//   },
// };

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     employee: null
  //   };
  //   this.getEmployee = this.getEmployee.bind(this);
  // }
  
  // componentDidMount() {
  //   this.getEmployee();
  // }

  // getEmployee() {
  //   // Send the request
  //   axios.get('https://randomuser.me/api?nat=fr')
  //     // Extract the DATA from the received response
  //     .then(response => response.data)
  //     // Use this data to update the state
  //     .then(data => {
  //       this.setState({
  //         employee: data.results[0],
  //       });
  //   });
  // }

  render() {
    return (
      <div className="App">
        {/* {
          this.state.employee ? <DisplayEmployee employee={this.state.employee} /> : <p>No data yet</p>
        }
        <button type="button" onClick={this.getEmployee}>Get employee</button> */}
        <FormMovies />
      </div> 
    );
  };
}

export default App;
