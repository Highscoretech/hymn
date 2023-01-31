import React from 'react'
import musicIcon from '../images/search.svg'
import { NavLink } from "react-router-dom"
import searchIcon from '../images/music.svg'
import './styles/search.css'

export default function Search() {

    const Songs = [
        { id:1, song:"Awaking Chorus", link:'awaking-chorus', },
        { id:2, song:"Be still", link:'be-stil'},
        { id:3, song:"It is enough",  link:'it-enough'},
        { id:4, song:"I've heard the voice", link:'heard-voice'},
        { id:5, song:"He took me out", link:'took-me'},
        { id:6, song:"Let thy will be done" , link:'thywill-bedone'},
        { id:7, song:"A mighty fortress", link:'mighty-fortress'},
        { id:8, song:"Awake", link:'awake'},
        { id:9, song:"Awake and sing", link:'awake-sing'},
        { id:10, song:"There is God", link:'there-god'},
        { id:11, song:"By and BY", link:'by-and-by'},
        { id:12, song:"Awake, You who sleep", link:'who-sleep'},
        { id:13, song:"God Still lives", link:'god-still'},
        { id:14, song:"Jesus, My friend", link:'my-friend'},
        { id:15, song:"God of posibilities" ,link:'god-posibility'},
        { id:16, song:"A blessing in prayer", link:'blessing-prayer'},
        { id:17, song:"A beautiful prayer", link:'beautiful-prayer'},
        { id:18, song:"Assurance in Jesus", link:'assurance-jesus'},
        { id:19, song:"Give to our God immortal", link:'god-immortal'},
        { id:20, song:"Angel, rock me sleep", link:'rock-me-sleep'}
    ]

  return (
    <div className='search'>
    <div className="search-header">
        <div className="search-header-container">
            <div className="music-content">
                <img src={musicIcon} alt="" />
                <h4>Hymns</h4>
            </div>
            <div className="search-content">
                <img src={searchIcon} alt="" />
            </div>
        </div>
    </div>

        <div className="song-list">
            <div className="song-list-container">
                {Songs.map((song)=>(
                    <div key={song.id} className="song-list-content">
                        <NavLink to={song.link}> {song.id}. <span> </span> {song.song} </NavLink>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}
