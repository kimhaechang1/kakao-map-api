/* global kakao */

import React, { useEffect} from 'react'
const {kakao} = window;
const KaKaoMap =(props)=> {
   useEffect(()=>{
    const container = document.getElementById('mymap')
    let options={
        center : new kakao.maps.LatLng(33.450701, 126.570667),
        level : 5
    }
    let map = new kakao.maps.Map(container, options)
    let markerPosition = new kakao.maps.LatLng(props.p.x, props.p.y)
    let marker = new kakao.maps.Marker({
        position :markerPosition
    })
    marker.setMap(map)
    console.log()
   },[props])
   return (
        <div id="mymap" style={{width:'50vw', height:'50vh'}}>
            
        </div>
   )
}

export default KaKaoMap