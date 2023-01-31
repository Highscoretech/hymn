import React from 'react'
import { NavLink } from "react-router-dom"

import { useEffect, useState } from "react"; 
import arrow from '../images/arrow.svg'
import playIcon from '../images/play.svg'
import musicIcon from '../images/search.svg'
import pauseIcon from '../images/pause.svg'
import Song1 from '../images/third1.svg'
import Song2 from '../images/third2.svg'
import Song3 from '../images/third3.svg'
import Song4 from '../images/third4.svg'
import Song5 from '../images/third5.svg'
import Song6 from '../images/third6.svg'
import Song7 from '../images/third7.svg'
import Song8 from '../images/third8.svg'
import Song9 from '../images/third9.svg'

import useSound from "use-sound"; // for handling the sound
import qala from "../music/003.mp3"; // importing the music


export default function Three() {
  
  const [isPlaying, setIsPlaying] = useState(false);
  const [play, { pause, duration, sound }] = useSound(qala);
  
  const playingButton = () => {
    if (isPlaying) {
      pause(); // this will pause the audio
      setIsPlaying(false);
    } else {
      play(); // this will play the audio
      setIsPlaying(true);
    }
  };


  const [currTime, setCurrTime] = useState({
    min: "",
    sec: "",
  }); // current position of the audio in minutes and seconds

  const [seconds, setSeconds] = useState();

  useEffect(() => {
    const interval = setInterval(() => {
      if (sound) {
        setSeconds(sound.seek([])); // setting the seconds state with the current state
        const min = Math.floor(sound.seek([]) / 60);
        const sec = Math.floor(sound.seek([]) % 60);
        setCurrTime({
          min,
          sec,
        });
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [sound]);
  
  return (
    <div>
         <div className="search-header">
           <div className="search-header-container">
            <div className="music-back">
              <NavLink to='/'>
                <img src={arrow} alt="" /></NavLink>
            </div>
            <div className="music-center">
                <img src={musicIcon} alt="" />
                <h3>Hymn 3</h3>
            </div>
            {!isPlaying && <div className="search-content" onClick={playingButton}>
                <img src={playIcon} alt="" />
            </div>}
          {isPlaying &&    <div className="search-content" onClick={playingButton}>
                <img src={pauseIcon} alt="" />
            </div>}
        </div>
      </div>


      <div className="song-body">
        <div className="song-body-container">
          <img src={Song1} alt="" />
          <img src={Song2} alt="" />
          <img src={Song3} alt="" />
          <img src={Song4} alt="" />
          <img src={Song5} alt="" />
          <img src={Song6} alt="" />
          <img src={Song7} alt="" />
          <img src={Song8} alt="" />
          <img src={Song9} alt="" />
        </div>
      </div>



      <div className="buttom-playing">
        <div className="buttom-playing-container">
          <div className="song-name">
              <h3>It is enough</h3>
          </div>
          <div className="song-progress">
              <span>{currTime.min}:{currTime.sec}</span>
              <input
              type="range"
              min="0"
              max={duration / 1000}
              default="0"
              value={seconds}
              className="timeline"
              onChange={(e) => {
                sound.seek([e.target.value]);
              }}
            />
             
              { isPlaying &&  <img onClick={playingButton} src={pauseIcon} alt="" /> }
              { !isPlaying &&  <img onClick={playingButton} src={playIcon} alt="" /> }
          </div>
        </div>
      </div>

    </div>
  )
}
