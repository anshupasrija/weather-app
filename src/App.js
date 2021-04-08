import React,{Component}from 'react';
import axios from 'axios';
// const apiKey="acace3393ded528905dd2a68775695f1";
// const apiUrl="api.openweathermap.org/data/2.5";
import './styles/_style.scss';
// import image from './assests/british.jpg'


class App extends Component {
  state={
    city:'',
    country:'',
    icon:'',
    main:'',
    celsius:'',
    temp_max:'',
    temp_min:'',
    description:'',
  };
  componentDidMount(){
    this.getData();
  }
  calCelsius(temp){
    let cell=Math.floor(temp-273.15);
    return cell;
  }
  getData=()=>{
    axios
    .get(`https://api.openweathermap.org/data/2.5/weather?q=vancouver&appid=acace3393ded528905dd2a68775695f1`)
    .then((response)=>{
      console.log(response.data);
      this.setState({        
        city: response.data.name,  
        country:response.data.sys.country,
        celsius:this.calCelsius(response.data.main.temp),
        temp_max:this.calCelsius(response.data.main.temp_max),
        temp_min:this.calCelsius(response.data.main.temp_min),   
        description:response.data.weather[0].description,    
      })
    })
  }

  render(){
    console.log(this.state.description);
  
    return (
      <div className="container">
       
       <p className="container__heading">{this.state.city}</p> 
        <p className="container__country"> Country: {this.state.country}</p>
       <p className="container__country"> Temp: {this.state.celsius} deg</p><br/>
        <p className="container__temp1">{this.state.description}</p>
        <span className="container__temp">Max-temp:{this.state.temp_max}deg</span>
        <span className="container__temp">Min-temp{this.state.temp_min}deg</span><br/>
      </div>
        
         
    )   

}
}

export default App;
