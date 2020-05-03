import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  state = {
    employees: [
      {name: "Tom",
      email: "tom@employee.com", phone: '410222222'} ,
      {name: "Lety",
       email: "lety@employee.com",phone: '410222222'},
       {name: "Sue",
       email: "su@employee.com",phone: '410222222'},
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
  
      console.log('this is our new order!!', newOrder)
      this.setState({employees: newOrder, showOrder: 'dsc'})

    } else if (this.state.showOrder === 'dsc') {
      console.log('make dsc')
      var newOrder = this.state.employees.sort( function ( a, b ) {
        if ( a.name < b.name ){
          return 1;
        }
        if (a.name > b.name){
          return -1;
        }
        return 0;
      } );
      console.log('this is our new order!!', newOrder)
      this.setState({employees: newOrder, showOrder: 'asc'})
      
    }
        
    
  }

  render(){
    console.log("this is our state", this.state)
  
    
  

  return (
    <div className="App">
      <table>
        <thead>

          <tr>
            <td style={{cursor: 'pointer'}} onClick={this.handleorder}>Name</td>
            <td>Email</td>
            <td>Phone</td>
            <td>DOB</td>
          </tr>
        </thead>
      <tbody>
        {this.state.employees.map(function (singledude){
          return (
            <tr> 
              <td>
                {singledude.name}
              </td>
              <td>
                {singledude.email}
              </td>
              <td>
                {singledude.phone}
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
