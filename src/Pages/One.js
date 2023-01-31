import React from 'react'
import { NavLink } from "react-router-dom"

import { useEffect, useState } from "react"; 
import arrow from '../images/arrow.svg'
import playIcon from '../images/play.svg'
import musicIcon from '../images/search.svg'
import pauseIcon from '../images/pause.svg'
import Song1 from '../images/first1.svg'
import Song2 from '../images/first2.svg'
import Song3 from '../images/first3.svg'
import Song4 from '../images/first4.svg'
import Song5 from '../images/first5.svg'
import Song6 from '../images/first6.svg'
import Song7 from '../images/first7.svg'
import Song8 from '../images/first8.svg'
import Song9 from '../images/first9.svg'
import Song10 from '../images/first10.svg'
import Song11 from '../images/first11.svg'
import Song12 from '../images/first12.svg'
import Song13 from '../images/first13.svg'
import Song14 from '../images/first14.svg'
import Song15 from '../images/first15.svg'
import Song16 from '../images/first16.svg'
import Song17 from '../images/first17.svg'

import useSound from "use-sound"; // for handling the sound
import qala from "../music/001.mp3"; // importing the music


export default function One() {
  
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
                <h3>Hymn 1</h3>
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
          <img src={Song10} alt="" />
          <img src={Song11} alt="" />
          <img src={Song12} alt="" />
          <img src={Song13} alt="" />
          <img src={Song14} alt="" />
          <img src={Song15} alt="" />
          <img src={Song16} alt="" />
          <img src={Song17} alt="" />
        </div>
      </div>



      <div className="buttom-playing">
        <div className="buttom-playing-container">
          <div className="song-name">
              <h3>Awaking Chorus</h3>
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
