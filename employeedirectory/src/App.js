import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import SearchBox from "./components/SearchBox";



class App extends React.Component {
  state = {
    employees: [
      {name: "Edwin", email: "edwin@employee.com", phone: '410222222'} ,
      {name: "Lety", email: "lety@employee.com",phone: '410222222'},
      {name: "Adrian", email: "adrian@employee.com",phone: '410222222'},
      {name: "Nancy", email: "nancy@employee.com",phone: '410222222'},
      {name: "Carlos", email: "carlos@employee.com",phone: '410222222'},
      {name: "Ramon", email: "ramon@employee.com",phone: '410222222'},
      {name: "Fatima", email: "fatima@employee.com",phone: '410222222'},

    ],
    showOrder: 'asc'
  }

  handleorder = () => {
    console.log("you got clicked", this.state)

    if (this.state.showOrder === 'asc') {
      console.log('make asc')
      var newOrder = this.state.employees.sort( function ( a, b ) {
        if ( a.name < b.name ){
          return -1;
        }
        if (a.name > b.name){
          return 1;
        }
        return 0;
      } );
  
      // console.log('this is our new order!!', newOrder)
      this.setState({employees: newOrder, showOrder: 'dsc'})

    } else if (this.state.showOrder === 'dsc') {
      // console.log('make dsc')
      var newOrder = this.state.employees.sort( function ( a, b ) {
        if ( a.name < b.name ){
          return 1;
        }
        if (a.name > b.name){
          return -1;
        }
        return 0;
      } );
      this.setState({employees: newOrder, showOrder: 'asc'})
      
    }  
    
  }

  handleSearchChange = event => {
    console.log(event.target.value);
    const filter = event.target.value;
    const filteredList = this.state.users.filter(item => {
      // merge data together, then see if user input is anywhere inside
      let values = Object.values(item)
        .join("")
        .toLowerCase();
      return values.indexOf(filter.toLowerCase()) !== -1;
    });
    this.setState({ filteredUsers: filteredList });
  }

  render(){
  
  return (
    <div className="App">
      <Header /> 

      <table class="tabledesign">
        <thead>

          <tr>
            <td style={{cursor: 'pointer'}} onClick={this.handleorder}><h2>Name</h2></td>
            <td><h2>Email</h2></td>
            <td><h2>Phone</h2></td>
            <td><h2>DOB</h2></td>
          </tr>
        </thead>
      <tbody>
        {this.state.employees.map(function (eachemployee){
          return (
            <tr> 
              <td>
                {eachemployee.name}
              </td>
              <td>
                {eachemployee.email}
              </td>
              <td>
                {eachemployee.phone}
              </td>
            </tr>
          )
        })}
      </tbody>
      </table>
    </div>
  );
}
}

export default App;
