import Table from 'react-bootstrap/Table';
import BootstrapTable from 'react-bootstrap-table-next';
import imageFormatter from 'react-bootstrap-table-next';
import React, { Component } from 'react';
import axios from 'axios';
import 'react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';

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
    const keys=[];
    const columns = [
      {
      dataField: data.name,
      text: 'Name',
      filter: textFilter()
    }, {
      dataField: data.caption,
      text: 'Caption',
      filter: textFilter()
    }, {
      dataField: data.region,
      text: 'Region',
      filter: textFilter()
    },
  {
    dataField: data.flag,
    text: 'Flag',
    dataFormat:imageFormatter
  }
  ];
  for(var i=0;i<250;i++)
  {
    keys.push(i);
  }
    return (
      <div responsive='sm'>
        <BootstrapTable keyField={keys} data={data} striped={true} hover={true} columns={columns} filter={ filterFactory() }>
  </BootstrapTable>
     
      </div>
    
    );
  }
}
export default App;