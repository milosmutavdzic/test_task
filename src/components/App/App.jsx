import React, { Component } from 'react';
import axios from 'axios';

// Components
import Header from '../Header/Header';
import Loader from '../Loader/Loader';
import Cities from '../Cities/Cities';

// Style
import './App.scss';
import './normalizer.scss';

class App extends Component {
  state = {
    cityList: [],
    cityListCurrentIndex: 10,
    error: null
  }

  componentDidMount() {

    axios.get('http://api.meetup.com/2/cities',{
      params: {
        country: 'rs'
      }
    })
    .then( response => {
      this.setState({
        cityList: response.data.results
      })
    } )
    .catch( () => {
      this.setState({
        error: true
      })
    }) 
  }
  loadMore = () => {
    this.setState( prevState => {
			return { cityListCurrentIndex: prevState.cityListCurrentIndex + 10 }
		})
  }
  renderApp = () => {
    const { cityList, cityListCurrentIndex, error } = this.state;
    if(cityList && !cityList.length) return <Loader />
    else if(!cityList || error) return 'Something went wrong...'
    else return (
      <div>
        <Cities cities={ cityList.slice(0, cityListCurrentIndex) } />
        <div className="load-more-button-wrapper">
          <button className="load-more-button" onClick={ () => this.loadMore() }>load more</button>
        </div>
      </div>
    );
      
    
  }
  render() {
    return (
      <div className="app">
        <Header />
        { this.renderApp() }
      </div>
    );
  }
}

export default App;
