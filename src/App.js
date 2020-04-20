import React from 'react';
import './App.css';
import Card from './components/Card/Card';
import Map from './components/Map/Map';
// import Country from './components/Country/Country';
import Tables from './components/Table/Table';
import ReactResizeDetector from 'react-resize-detector';
import Spinner from 'react-bootstrap/Spinner';
import Navbar from 'react-bootstrap/Navbar';
// import Select from 'react-select';
import Logo from './logo.svg';
import {CircleArrow as ScrollUpButton} from "react-scroll-up-button";


const isoCountries = {
  'AF' : 'Afghanistan',
  'AX' : 'Aland Islands',
  'AL' : 'Albania',
  'DZ' : 'Algeria',
  'AS' : 'American Samoa',
  'AD' : 'Andorra',
  'AO' : 'Angola',
  'AI' : 'Anguilla',
  'AQ' : 'Antarctica',
  'AG' : 'Antigua And Barbuda',
  'AR' : 'Argentina',
  'AM' : 'Armenia',
  'AW' : 'Aruba',
  'AU' : 'Australia',
  'AT' : 'Austria',
  'AZ' : 'Azerbaijan',
  'BS' : 'Bahamas',
  'BH' : 'Bahrain',
  'BD' : 'Bangladesh',
  'BB' : 'Barbados',
  'BY' : 'Belarus',
  'BE' : 'Belgium',
  'BZ' : 'Belize',
  'BJ' : 'Benin',
  'BM' : 'Bermuda',
  'BT' : 'Bhutan',
  'BO' : 'Bolivia',
  'BA' : 'Bosnia And Herzegovina',
  'BW' : 'Botswana',
  'BV' : 'Bouvet Island',
  'BR' : 'Brazil',
  'IO' : 'British Indian Ocean Territory',
  'BN' : 'Brunei Darussalam',
  'BG' : 'Bulgaria',
  'BF' : 'Burkina Faso',
  'BI' : 'Burundi',
  'KH' : 'Cambodia',
  'CM' : 'Cameroon',
  'CA' : 'Canada',
  'CV' : 'Cape Verde',
  'KY' : 'Cayman Islands',
  'CF' : 'Central African Republic',
  'TD' : 'Chad',
  'CL' : 'Chile',
  'CN' : 'China',
  'CX' : 'Christmas Island',
  'CC' : 'Cocos (Keeling) Islands',
  'CO' : 'Colombia',
  'KM' : 'Comoros',
  'CG' : 'Congo',
  'CD' : 'Congo, Democratic Republic',
  'CK' : 'Cook Islands',
  'CR' : 'Costa Rica',
  'CI' : 'Cote D\'Ivoire',
  'HR' : 'Croatia',
  'CU' : 'Cuba',
  'CY' : 'Cyprus',
  'CZ' : 'Czech Republic',
  'DK' : 'Denmark',
  'DJ' : 'Djibouti',
  'DM' : 'Dominica',
  'DO' : 'Dominican Republic',
  'EC' : 'Ecuador',
  'EG' : 'Egypt',
  'SV' : 'El Salvador',
  'GQ' : 'Equatorial Guinea',
  'ER' : 'Eritrea',
  'EE' : 'Estonia',
  'ET' : 'Ethiopia',
  'FK' : 'Falkland Islands (Malvinas)',
  'FO' : 'Faroe Islands',
  'FJ' : 'Fiji',
  'FI' : 'Finland',
  'FR' : 'France',
  'GF' : 'French Guiana',
  'PF' : 'French Polynesia',
  'TF' : 'French Southern Territories',
  'GA' : 'Gabon',
  'GM' : 'Gambia',
  'GE' : 'Georgia',
  'DE' : 'Germany',
  'GH' : 'Ghana',
  'GI' : 'Gibraltar',
  'GR' : 'Greece',
  'GL' : 'Greenland',
  'GD' : 'Grenada',
  'GP' : 'Guadeloupe',
  'GU' : 'Guam',
  'GT' : 'Guatemala',
  'GG' : 'Guernsey',
  'GN' : 'Guinea',
  'GW' : 'Guinea-Bissau',
  'GY' : 'Guyana',
  'HT' : 'Haiti',
  'HM' : 'Heard Island & Mcdonald Islands',
  'VA' : 'Holy See (Vatican City State)',
  'HN' : 'Honduras',
  'HK' : 'Hong Kong',
  'HU' : 'Hungary',
  'IS' : 'Iceland',
  'IN' : 'India',
  'ID' : 'Indonesia',
  'IR' : 'Iran, Islamic Republic Of',
  'IQ' : 'Iraq',
  'IE' : 'Ireland',
  'IM' : 'Isle Of Man',
  'IL' : 'Israel',
  'IT' : 'Italy',
  'JM' : 'Jamaica',
  'JP' : 'Japan',
  'JE' : 'Jersey',
  'JO' : 'Jordan',
  'KZ' : 'Kazakhstan',
  'KE' : 'Kenya',
  'KI' : 'Kiribati',
  'KR' : 'Korea',
  'KW' : 'Kuwait',
  'KG' : 'Kyrgyzstan',
  'LA' : 'Lao People\'s Democratic Republic',
  'LV' : 'Latvia',
  'LB' : 'Lebanon',
  'LS' : 'Lesotho',
  'LR' : 'Liberia',
  'LY' : 'Libyan Arab Jamahiriya',
  'LI' : 'Liechtenstein',
  'LT' : 'Lithuania',
  'LU' : 'Luxembourg',
  'MO' : 'Macao',
  'MK' : 'Macedonia',
  'MG' : 'Madagascar',
  'MW' : 'Malawi',
  'MY' : 'Malaysia',
  'MV' : 'Maldives',
  'ML' : 'Mali',
  'MT' : 'Malta',
  'MH' : 'Marshall Islands',
  'MQ' : 'Martinique',
  'MR' : 'Mauritania',
  'MU' : 'Mauritius',
  'YT' : 'Mayotte',
  'MX' : 'Mexico',
  'FM' : 'Micronesia, Federated States Of',
  'MD' : 'Moldova',
  'MC' : 'Monaco',
  'MN' : 'Mongolia',
  'ME' : 'Montenegro',
  'MS' : 'Montserrat',
  'MA' : 'Morocco',
  'MZ' : 'Mozambique',
  'MM' : 'Myanmar',
  'NA' : 'Namibia',
  'NR' : 'Nauru',
  'NP' : 'Nepal',
  'NL' : 'Netherlands',
  'AN' : 'Netherlands Antilles',
  'NC' : 'New Caledonia',
  'NZ' : 'New Zealand',
  'NI' : 'Nicaragua',
  'NE' : 'Niger',
  'NG' : 'Nigeria',
  'NU' : 'Niue',
  'NF' : 'Norfolk Island',
  'MP' : 'Northern Mariana Islands',
  'NO' : 'Norway',
  'OM' : 'Oman',
  'PK' : 'Pakistan',
  'PW' : 'Palau',
  'PS' : 'Palestinian Territory, Occupied',
  'PA' : 'Panama',
  'PG' : 'Papua New Guinea',
  'PY' : 'Paraguay',
  'PE' : 'Peru',
  'PH' : 'Philippines',
  'PN' : 'Pitcairn',
  'PL' : 'Poland',
  'PT' : 'Portugal',
  'PR' : 'Puerto Rico',
  'QA' : 'Qatar',
  'RE' : 'Reunion',
  'RO' : 'Romania',
  'RU' : 'Russia',
  'RW' : 'Rwanda',
  'BL' : 'Saint Barthelemy',
  'SH' : 'Saint Helena',
  'KN' : 'Saint Kitts And Nevis',
  'LC' : 'Saint Lucia',
  'MF' : 'Saint Martin',
  'PM' : 'Saint Pierre And Miquelon',
  'VC' : 'Saint Vincent And Grenadines',
  'WS' : 'Samoa',
  'SM' : 'San Marino',
  'ST' : 'Sao Tome And Principe',
  'SA' : 'Saudi Arabia',
  'SN' : 'Senegal',
  'RS' : 'Serbia',
  'SC' : 'Seychelles',
  'SL' : 'Sierra Leone',
  'SG' : 'Singapore',
  'SK' : 'Slovakia',
  'SI' : 'Slovenia',
  'SB' : 'Solomon Islands',
  'SO' : 'Somalia',
  'ZA' : 'South Africa',
  'GS' : 'South Georgia And Sandwich Isl.',
  'ES' : 'Spain',
  'LK' : 'Sri Lanka',
  'SD' : 'Sudan',
  'SR' : 'Suriname',
  'SJ' : 'Svalbard And Jan Mayen',
  'SZ' : 'Swaziland',
  'SE' : 'Sweden',
  'CH' : 'Switzerland',
  'SY' : 'Syrian Arab Republic',
  'TW' : 'Taiwan',
  'TJ' : 'Tajikistan',
  'TZ' : 'Tanzania',
  'TH' : 'Thailand',
  'TL' : 'Timor-Leste',
  'TG' : 'Togo',
  'TK' : 'Tokelau',
  'TO' : 'Tonga',
  'TT' : 'Trinidad And Tobago',
  'TN' : 'Tunisia',
  'TR' : 'Turkey',
  'TM' : 'Turkmenistan',
  'TC' : 'Turks And Caicos Islands',
  'TV' : 'Tuvalu',
  'UG' : 'Uganda',
  'UA' : 'Ukraine',
  'AE' : 'United Arab Emirates',
  'GB' : 'United Kingdom',
  'US' : 'United States',
  'UM' : 'United States Outlying Islands',
  'UY' : 'Uruguay',
  'UZ' : 'Uzbekistan',
  'VU' : 'Vanuatu',
  'VE' : 'Venezuela',
  'VN' : 'Viet Nam',
  'VG' : 'Virgin Islands, British',
  'VI' : 'Virgin Islands, U.S.',
  'WF' : 'Wallis And Futuna',
  'EH' : 'Western Sahara',
  'YE' : 'Yemen',
  'ZM' : 'Zambia',
  'ZW' : 'Zimbabwe'
};


class App extends React.Component {

  constructor(){
    super();
    this.state={ dataLoadingStatus: 'loading', chartData: [],tableData: [],smTableData: []//,options:[], currVal:'',toggle:'home'
  };
  
  }

    reset (){
      this.setState({dataLoadingStatus: 'loading', chartData: [],tableData: [],smTableData:[]//,options:[],currVal:'', toggle:'home'
    });
    }
    returnTabData = (countryName,confirmed,recovered,deaths,todayCases) =>{
      return {countryName:countryName,confirmed:confirmed,recovered:recovered,deaths:deaths,todayCases:todayCases};
    };
     getCountryName =(countryCode) =>{
      if (isoCountries.hasOwnProperty(countryCode)) {
          return isoCountries[countryCode];
      } else {
          return countryCode;
      }
    }
    addTot = (val, key) => {
      let returnVal = val.map(e => e[key]).reduce((a, e) => a + e, 0);
      return returnVal;
    }
     fetchAPI = async () =>{
      const response = await fetch('https://corona.lmao.ninja/countries?sort=country')
      const json = await response.json()
      const tableData = [];
      const smTableData=[];
      //const options =[];
      const chartData = [['Country Name', 'Confirmed Cases','Today Cases']]
      for (let i = 0; i < json.length; i += 1) {
        if(json[i].country!=='World'){
        chartData.push([this.getCountryName(json[i].countryInfo.iso2)?this.getCountryName(json[i].countryInfo.iso2):json[i].country,json[i].cases,json[i].todayCases]);
        tableData.push(this.returnTabData(
          json[i].country,
          json[i].cases,
          json[i].recovered,
          json[i].deaths,
          json[i].todayCases));
          
          if(json[i].countryInfo.iso2){
          smTableData.push(this.returnTabData(
           json[i].countryInfo.iso2,
            json[i].cases,
            json[i].recovered,
            json[i].deaths,
            json[i].todayCases));
           // options.push(json[i].country);
          }
        }
      }
      this.setState({
        dataLoadingStatus: 'ready',
        chartData: chartData,
        tableData: tableData,
        smTableData:smTableData,
        // ,
        // options: options
      })
  }
  // handleChange = (values) => {
  //   this.setState({toggle:'',
  //   currVal: values})
  // }
  componentDidMount(){
    this.fetchAPI();
  }
  // handleClick = (value) =>{
  //   this.setState({toggle: value})
  // }

  render(){
    const {dataLoadingStatus, chartData, tableData,smTableData//, options, toggle
    }= this.state;
  return (
    <>
      
      <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">
      <img
        alt="COVID-19"
        src={Logo}
        width="30"
        height="30"
        className="d-inline-block align-top"
      />{' '}
      COVID-19
    </Navbar.Brand>
  </Navbar>
        {dataLoadingStatus !=='ready'?
       <Spinner className="spinner" animation="border" role="status" >
       <span className="sr-only">Loading...</span>
     </Spinner>
  :
  <ReactResizeDetector handleWidth>
  {({ width }) => 
  // toggle ==='home'?
  

  <>
  
  {/* <Select options={options} onChange={this.handleChange} color='#fff'/> */}

    <div className="App fadeIn">
      <div className="App-header">
        <Card tableData = {tableData} totCalc ={this.addTot}/>
<div className="container">
  <div className="row">
    <div className="col-md-12 col-xl-6 fadeIn2 ">
    <div className='p-2'>
      <Map chartData={chartData}/>
      </div>

    </div>
    <div className="col-md-12 col-xl-6 fadeIn2">
    <div className='p-2'>
    <ScrollUpButton
          EasingType="easeInOutBounce"
        />
      <Tables tableData={tableData} smTableData={smTableData} width={width}/>
      </div>
    </div>
  </div>
  </div>
   
        
        </div>
    
  </div>
     </>
    // :
    // <>
    // <Country toggleFunc={this.handleClick}/>
    // </>
      }
  
    </ReactResizeDetector>
  }
</>
  
  );
  }
}

export default App;
