import React, { useState,useEffect } from 'react'
import './styles.css'
import MostrarVoltas from './MostrarVoltas'
import MostrarTempo from './MostrarTempo'
import Button from './Button'

function App() {
  
  const [numVoltas,setnumVoltas] = useState(0)
  const [tempo,setTempo]=useState(0)
  const [running,setRunning] = useState(false)
  useEffect(()=>{
    let timer = null
    if(running){
      timer = setInterval(()=>{
        setTempo(old=>old+1)
       },1000)
    }
    return ()=>{
      if(timer){
        clearInterval(timer)
      }

    }
  },[running])
  const toggleRunning = ()=>{
    setRunning(!running)
  }
  const increment = ()=>{
    setnumVoltas(numVoltas+1)
  }
  const decrement = ()=>{
    if(numVoltas > 0){
      setnumVoltas(numVoltas-1)
    }
    
  }
  const reset = ()=>{
    setnumVoltas(0)
    setTempo(0)
  }
  return (
    <div >
      <MostrarVoltas voltas={numVoltas} />
      <Button text = '+' className ='bigger'onClick={increment}/>
      <Button text = '-' className ='bigger'onClick={decrement}/>
      {
        numVoltas>0&&
        <MostrarTempo  tempo = {Math.round(tempo/numVoltas)}/>
      }
      <Button text = 'Iniciar' onClick={toggleRunning}  text={running?'Pausar':'Iniciar'}/>
      <Button text = 'Reiniciar' onClick={reset} />
    </div>
  );
}

export default App;
