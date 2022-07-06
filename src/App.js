import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import KaKaoMap from './KaKaoMap'
function App() {
  const [on, setOn] = useState({
    x : 33.450701,
    y : 126.570667
  }
  )
  return (
    <div style={{display:'flex', justifyContent:'space-around'}}>
      <button onClick={()=>{
        if(on.x == 0 && on.y==0){
          setOn({x : 33.450701, y:126.570667})
        }else{
          setOn({x : 0, y:0})
        }
        console.log(on)
      }}>마킹하기</button>
        <KaKaoMap p={on}/>
    </div>
  );
}

export default App;