import Table from 'react-bootstrap/Table';
import BootstrapTable from 'react-bootstrap-table-next';
import imageFormatter from 'react-bootstrap-table-next';
import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  
 
  constructor(props) {
    super(props);
    this.state = {
      data: [],
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
    const columns = [
      {
      dataField: data.name,
      text: 'Name'
    }, {
      dataField: data.caption,
      text: 'Caption'
    }, {
      dataField: data.region,
      text: 'Region',
    },
  {
    dataField: data.flag,
    text: 'Flag',
    dataFormat:imageFormatter
  }
  ];

    return (
      <div>
        <BootstrapTable keyField={this.state.data.name} data={this.state.data} striped={true} hover={true} columns={columns}>
  </BootstrapTable>
     
      </div>
    
    );
  }
}
export default App;