import { useEffect, useState } from 'react';
import './App.css';
import Weather from './Weather';

function App() {
  const [lat, setLat] = useState(0)
  const [lng, setLng] = useState(0)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (navigator.geolocation){
      navigator.geolocation.getCurrentPosition(position =>{
        console.log(position)
        setLat(position.coords.latitude)
        setLng(position.coords.longitude)
        setIsLoading(false)
      },(error) =>{
        console.log(error)
        alert("paikannus epäonnistui")
      })

    }else {
      alert("selaimesi ei tue paikannusta")
    }
    
  }, [])
  

  if (isLoading){
    return <p>Ladataan sijaintia</p>
  }else{

  return (
    <div>
      <h2>Your position is:</h2>
      <p>{lat.toFixed(3)},{lng.toFixed(3)}</p>
      <Weather lat={lat} lng={lng}/>
    </div>
  ); 
  }
}
export default App;
