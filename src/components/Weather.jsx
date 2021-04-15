import React from 'react'
import '../styles/_style.scss';

function Weather(props) {
    console.log(props);
    return (
        <div>
         <p className="container__heading">{props.city}</p>
         <p className="container__country">{props.country}</p>
         <p className="container__country"> {props.celsius} deg</p><br />
        <div className="container__subcontainer">
          <p className="container__temp">H:{props.temp_max}deg</p>
          <p className="container__temp">L:{props.temp_min}deg</p><br /></div>
        <div className="container__subcontainer">
          <img className="container__icon" src={`https://api.openweathermap.org/img/w/${props.icon}.png`} alt="" />
          <p className="container__temp1">{props.description}</p> 
         </div>
            
        </div>
    )
}

export default Weather
