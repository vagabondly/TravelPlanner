import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Lodging from './components/Lodging.jsx'
// import ListItem from './ListItem.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      departureLocation: 'San Francisco', // depart SF
      arrivalLocation: 'London', // arrive London
      departureDate: '2017-12-01', // depart SF on 2017-12-01 YYYY-MM-DD
      arrivalDate: '2017-12-02', // arrive London on 12/2/17
      returnDate: '2017-12-15', // return to SF on 12/15/17
      addresses:[ // array of addresses of ALL QUERIED hotel, attractions, & restaurants
        {category: 'hotel', name: 'London Hilton on Park Lane', address: '22 Park Ln, Mayfair, London W1K 1BE, UK'},
        {category: 'attraction', name: 'London Bridge', address: 'London SE1 9DD, UK'},
        {category: 'attraction', name: 'Buckingham Palace', address: 'Westminster, London SW1A 1AA, UK'},
        {category: 'restaurant', name: 'Dinner by Heston Blumenthal', address: '66 Knightsbridge, London SW1X 7LA, UK'},
        {category: 'restaurant', name: 'Nobu London', address: 'Metropolitan by COMO, 19 Old Park Ln, Mayfair, London W1K 1LB, UK'}
      ],
      savedChoices: [ // array of SAVED flight, hotel, attractions, & restaurants
        {category: 'flight', type: 'departure', airport: 'SFO', airline: 'British Airways', date: '', time: '', price: ''},
        {category: 'flight', type: 'arrival', airport: 'LGW', airline: 'British Airways', date: '', time: '', price: ''},
        {category: 'hotel', name: 'London Hilton on Park Lane', address: '22 Park Ln, Mayfair, London W1K 1BE, UK', checkInDate: '', checkOutDate:'', price: '', imageUrl: ''},
        {category: 'attraction', name: 'Buckingham Palace', address: 'Westminster, London SW1A 1AA, UK', imageUrl: ''},
        {category: 'restaurant', name: 'Dinner by Heston Blumenthal', address: '66 Knightsbridge, London SW1X 7LA, UK', price: '', imageUrl: ''},
        {category: 'restaurant', name: 'Nobu London', address: 'Metropolitan by COMO, 19 Old Park Ln, Mayfair, London W1K 1LB, UK', price: '', imageUrl: ''}
      ]
    }
  }

  handleClick() {
    // console.log('I got clicked')
    var parameters = {
      method: 'GET',
      url: 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=500&type=hotel&key=AIzaSyDM-RnDOk60Kj_ZJ2xUx29RrZKnutnI2UI'
      // location: '-33.8670522,151.1957362',
      // radius: '500',
      // type: 'restaurant',
      // key:'AIzaSyDM-RnDOk60Kj_ZJ2xUx29RrZKnutnI2UI'
    }

    // $.ajax({
    //   url: 'https://maps.googleapis.com/maps/api/place/nearbysearch/json',
    //   method: 'GET',
    //   data: parameters,
    //   contentType: "jsonp",
    //   success: (data) => {
    //     console.log('succuess!');
    //   },
    //   error: (error) => {
    //     console.log(error)
    //   }

    // })
     $.ajax({
      url: '/search',
      method: 'GET',
      data: {city: 'San Francisco'},
      succuess: (data) => {
        console.log(data)
      },
      error: (err) => {
        console.log('error !')
      }
     })
  }
  // http://127.0.0.1:3000/search?method=GET&url=https%3A%2F%2Fmaps.googleapis.com%2Fmaps%2Fapi%2Fplace%2Fnearbysearch%2Fjson%3Flocation%3D-33.8670522%2C151.1957362%26radius%3D500%26type%3Drestaurant%26key%3DAIzaSyDM-RnDOk60Kj_ZJ2xUx29RrZKnutnI2UI
  // http://127.0.0.1:3000/search?method=GET&url=https%3A%2F%2Fmaps.googleapis.com%2Fmaps%2Fapi%2Fplace%2Fnearbysearch%2Fjson&location=-33.8670522%2C151.1957362&radius=500&type=restaurant&key=AIzaSyDM-RnDOk60Kj_ZJ2xUx29RrZKnutnI2UI
  // componentDidMount() {
  //   $.ajax({
  //     url: '/items',
  //     success: (data) => {
  //       this.setState({
  //         items: data
  //       })
  //     },
  //     error: (err) => {
  //       console.log('err', err);
  //     }
  //   });
  // }

  render () {
    return (
      <div>
        <h1>Trip Planner</h1>
        <Lodging  handleClick={this.handleClick.bind(this)}/>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
