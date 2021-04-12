import React,{Component}from 'react';
import axios from 'axios';
import './styles/_style.scss';
const apiKey="acace3393ded528905dd2a68775695f1";

class App extends Component {
  state={
    city:'',
    country:'',
    date:'',
    icon:'',
    main:'',
    celsius:'',
    temp_max:'',
    temp_min:'',
    description:'',
  };
 
  calCelsius(temp){
    let cell=Math.floor(temp-273.15);
    return cell;
  }
  handleFormSubmit=(event)=>{
    event.preventDefault();
    this.getData(this.state.city);
  }
  handleCityChange=(event)=>{
    this.setState({
     city:event.target.value,
    });
  };
  handleCountryChange=(event)=>{
    this.setState({
     country: event.target.value,
    });
  };
  

  getData=(city)=>{

    axios
    .get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
    .then((response)=>{
      console.log(response.data);
      this.setState({        
        city: response.data.name,  
        country:response.data.sys.country,
        icon:response.data.weather[0].icon,
        celsius:this.calCelsius(response.data.main.temp),
        temp_max:this.calCelsius(response.data.main.temp_max),
        temp_min:this.calCelsius(response.data.main.temp_min),   
        description:response.data.weather[0].description,    
      })
    })
  }

  render(){  
   
    console.log(this.state.icon);
    return (
      <div className="container">   
        <div className="container__subcontainer">
          <input className="container__input"
            type="text"
            placeholder="City"
            onChange={this.handleCityChange} />
          <button className="container__button" onClick={this.handleFormSubmit}>Get Weather</button>
        </div>
         <p className="container__heading">{this.state.city}</p>
         <p className="container__country">{this.state.country}</p>
         <p className="container__country"> {this.state.celsius} deg</p><br />
        <div className="container__subcontainer">
          <p className="container__temp">H:{this.state.temp_max}deg</p>
          <p className="container__temp">L:{this.state.temp_min}deg</p><br /></div>
        <div className="container__subcontainer">
          <img className="container__icon" src={`https://api.openweathermap.org/img/w/${this.state.icon}.png`} alt="" />
          <p className="container__temp1">{this.state.description}</p>
        </div>
      </div>
        
         
    )   

}
}

export default App;
