import Table from 'react-bootstrap/Table';
import BootstrapTable from 'react-bootstrap-table-next';

import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {

 
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      id:0,
    }
  }
  async getData(){
    const res = await axios.get('https://restcountries.eu/rest/v2/all')
    console.log(res.data)
    this.setState({data:res.data})
  }
  componentDidMount() {
   this.getData();
  }

  render() {
    const { data = [] } = this.state;
   
    return (
      <div className="App">
        <header className="App-header">
          <Table  striped bordered hover variant="dark" responsive="sm">
            <thead>
              <tr>
                <th>Name</th>
                <th>Capital</th>
                <th>Region</th>
                <th>Flag</th>
              </tr>
            </thead>
            <tbody>
            {data.length ? 
              data.map(data => (
                <tr>
                  <td>{data.name}</td>
                  <td>{data.capital}</td>
                  <td>{data.region}</td>
                  <td><svg ><image width="100" height="100" href={data.flag}></image></svg></td>
                </tr>
              ))
              : 
              (<tr>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
              </tr>)
            }
            </tbody>
          </Table>
        </header>
      </div>
     
    );
  }
}

export default App;

