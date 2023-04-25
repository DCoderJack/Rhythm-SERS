import React, { useState } from 'react'
import MusicList from './MusicList'

const Music = (props) => {

    let {emotionFunction, emotion} = props

    const [playlist, setPlaylist] = useState([])
    // const [totalResults, setTotalResults] = useState(1)

    const music = {

        "Calm" : {
            "links" : ["https://www.youtube.com/embed/OBU1OyJUoLA", "https://www.youtube.com/embed/_ZR3Yjp5t7U","https://www.youtube.com/embed/iSallxKpm8Y","https://www.youtube.com/embed/DI4_j-m6vJw","https://www.youtube.com/embed/pxbYFC2kdN8"]
        },
        "Angry" : {
            // "links" : "https://youtu.be/CkZKvHIsOYU"
            "links" : ["https://www.youtube.com/embed/OBU1OyJUoLA", "https://www.youtube.com/embed/_ZR3Yjp5t7U","https://www.youtube.com/embed/iSallxKpm8Y","https://www.youtube.com/embed/DI4_j-m6vJw","https://www.youtube.com/embed/pxbYFC2kdN8"]
        },
        "Sad" : {
            // "links" : "https://youtu.be/_iktURk0X-A"
            "links" : ["https://www.youtube.com/embed/OBU1OyJUoLA", "https://www.youtube.com/embed/_ZR3Yjp5t7U","https://www.youtube.com/embed/iSallxKpm8Y","https://www.youtube.com/embed/DI4_j-m6vJw","https://www.youtube.com/embed/pxbYFC2kdN8"]
        },
        "Neutral" : {
            // "links" : "https://youtu.be/YwEKIl3qQzA"
            "links" : ["https://www.youtube.com/embed/OBU1OyJUoLA", "https://www.youtube.com/embed/_ZR3Yjp5t7U","https://www.youtube.com/embed/iSallxKpm8Y","https://www.youtube.com/embed/DI4_j-m6vJw","https://www.youtube.com/embed/pxbYFC2kdN8"]
        },
        "Happy" : {
            // "links" : "https://youtu.be/f1FeZqGWkC4"
            "links" : ["https://www.youtube.com/embed/OBU1OyJUoLA", "https://www.youtube.com/embed/_ZR3Yjp5t7U","https://www.youtube.com/embed/iSallxKpm8Y","https://www.youtube.com/embed/DI4_j-m6vJw","https://www.youtube.com/embed/pxbYFC2kdN8"]
            
        }
    }

    function fetchMusicCalm(){}; 
    function fetchMusicAngry(){};
    function fetchMusicSad(){};
    function fetchMusicNeutral(){};
    function fetchMusicHappy(){};

    const reload = ()=> {
        window.location.reload(true)
    }
    
    // if(emotionFunction = "fetchMusicCalm"){
        fetchMusicCalm=()=>{
            // window.location.reload(true)
            setPlaylist(playlist.concat(music.Calm))
            console.log(music.Calm)
        }
        // fetchMusicCalm();
    // }
     
    // if(emotionFunction = 'fetchMusicAngry'){
        fetchMusicAngry = () =>{
            setPlaylist(playlist.concat(music.Angry))
    
            console.log(music.Angry.links)
        }
    // }
    
    // if(emotionFunction = 'fetchMusicSad'){
        fetchMusicSad = () =>{
            setPlaylist(playlist.concat(music.Sad))
            console.log(music.Sad.links)
        }
    // }
    // if(emotionFunction = 'fetchMusicNeutral'){
        fetchMusicNeutral = () =>{
            setPlaylist(playlist.concat(music.Neutral))
            console.log(music.Neutral.links)
        }
    // }
    // if(emotionFunction = 'fetchMusicHappy'){
        fetchMusicHappy = () =>{
            setPlaylist(playlist.concat(music.Happy))
            console.log(music.Happy.links)
        }
    // }

  return (
    <>  
        <div className='z-3 my-5 container d-flex justify-content-center my-5 text-center'>

        <div className='my-5 container'>

        <button type= "button" class="btn btn-primary mx-3" onClick={fetchMusicCalm}>Calm</button>
        <button type="button" class="btn btn-secondary mx-3" onClick={fetchMusicAngry}>Angry</button>
        <button type="button" class="btn btn-success mx-3" onClick={fetchMusicSad}>Sad</button>
        <button type="button" class="btn btn-danger mx-3" onClick={fetchMusicNeutral}>Neutral</button>
        <button type="button" class="btn btn-warning mx-3" onClick={fetchMusicHappy}>Happy</button>
        <button type="button" class="btn btn-success mx-3" onClick={reload}>Refersh</button>
        
        <div className='my-5'>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/OBU1OyJUoLA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>

        </div>

        <div className="mx-0 container row h-100vh" 
        style={{backgroundColor : "bisque"}}
        
        >
              <div className=" row">
                {playlist.map((element)=>{
                    return <div className="col-md-2 text-center my-5" key={element.links}>
                        
                      <MusicList links = {element.links[0]}/>
                      <MusicList links = {element.links[1]}/> 
                      <MusicList links = {element.links[2]}/>
                      <MusicList links = {element.links[3]}/>
                      <MusicList links = {element.links[4]}/>

                    </div>
              })}
            </div>
        </div>

        </div>
    </>
  )
}

export default Music