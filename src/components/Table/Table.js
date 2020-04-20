import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';


const todayCases = (cell, row) =>{
  if (row.todayCases) {
    return (
      <span>
         
      {row.confirmed}
    <strong style={ { color: 'red', fontSize: '0.7rem' } }>  +{row.todayCases}</strong>
      </span>
    );
  }
  return (
    <span>
       
    {row.confirmed}
    </span>);

}


const styValues = (cell, row, rowIndex, colIndex) => {
  if (rowIndex % 2 === 0) {
    return {
      backgroundColor: '#fff',
      fontSize: '1rem',

    };
  }
  return {
    backgroundColor: '#D3D3D3',
    fontSize: '1rem'
  };
}

const headerStyle={
  fontSize: '1rem',
  fontWeight: 'bold',
  backgroundColor: '#D3D3D3'
}

const smColumns = [{
  dataField: 'countryName',
  text: 'CTY',
  sort: true,
  style: styValues,
  headerStyle: headerStyle
}
, {
  dataField: 'confirmed',
  text: 'C',
  sort: true,
  formatter: todayCases,
  style:styValues,
  headerStyle: headerStyle

}, {
  dataField: 'recovered',
  text: 'R',
  style:styValues,
  headerStyle: headerStyle,
  sort: true

},
{
  dataField: 'deaths',
  text: 'D',
  style:styValues,
  headerStyle: headerStyle,
  sort: true

}
];

const lColumns = [{
  dataField: 'countryName',
  text: 'Country Name',
  sort: true,
  style:styValues,
  headerStyle: headerStyle,

}, {
  dataField: 'confirmed',
  text: 'Confirmed',
  formatter: todayCases,
  style:styValues,
  headerStyle: headerStyle,
  sort:true

}, {
  dataField: 'recovered',
  text: 'Recovered',
  style:styValues,
  headerStyle: headerStyle,
  sort: true

},
{
  dataField: 'deaths',
  text: 'Deaths',
  style:styValues,
  headerStyle: headerStyle,
  sort: true

}
];
const defaultSorted = [{
  dataField: 'name',
  order: 'desc'
}];


const Table = ({tableData, smTableData, width})=>{
  return (    <div className='table'>

 {width<500?<BootstrapTable   bootstrap4
    keyField='id' columns={smColumns} data={smTableData}  headers={true} defaultSorted={defaultSorted} />:
    <BootstrapTable   bootstrap4
    keyField='id' columns={lColumns} data={tableData}  headers={true} defaultSorted={defaultSorted} />
 }
</div>
    
    );
}


export default Table;