import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Grid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cars: this.props.cars
    }
  }

  url(car){
    return "http://www.caradisiac.com/" + car["_source"].image.split('/')[5];
  }

  renderCard(car) {
    return (
      <div class="mdl-card mdl-cell mdl-cell--4-col mdl-cell--4-col-tablet mdl-shadow--8dp" id={car["_id"]}>
        <figure class="mdl-card__media">
          <img src={car["_source"].image.replace(/S5/, 'S7')} alt=""/>
        </figure>
        <div class="mdl-card__title">
          <h2 class="mdl-card__title-text">{car['_source'].model}</h2>
        </div>
        <div class="mdl-card__supporting-text bold">
          Volume: {car['_source'].volume}
        </div>
        <div class="mdl-card__supporting-text">
        </div>
        <div class="mdl-card__actions mdl-card--border">
          <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" target="_blank" href={this.url(car)}>More information</a>
          <div class="mdl-layout-spacer"></div>
          <button class="mdl-button mdl-button--icon mdl-button--colored"><i class="material-icons">favorite</i></button>
        </div>
      </div>
    );
  }

  render() {
    var tab = [];
    var parentThis = this;
    this.state.cars.forEach(function(car){
      tab.push(parentThis.renderCard(car));
    });

    return (
      <div class="row">
        {tab}
      </div>

    );
  }
}

var HttpClient = function() {
    this.get = function(aUrl, aCallback) {
        var anHttpRequest = new XMLHttpRequest();
        anHttpRequest.onreadystatechange = function() {
            if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
                aCallback(anHttpRequest.responseText);
        }

        anHttpRequest.open( "GET", aUrl, true );
        anHttpRequest.send( null );
    }
}

async function getCars(){
  return new Promise(function(resolve){
    var cars = [];
    var client = new HttpClient();
    client.get('http://localhost:8000/suv/1000', function(response) {
        cars = JSON.parse(response)
        setTimeout(()=>{
          resolve(cars);
        }, 0)
    });
  })
}


getCars()
.then(cars => {
  ReactDOM.render(
    <Grid cars={cars}/>,
    document.getElementById('grid')
  )
})
