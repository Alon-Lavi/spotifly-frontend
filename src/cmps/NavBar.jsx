import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { StationPreview } from "./StationPreview";
import homeIcon from '../assets/img/home.png'
import { SearchPage } from "./SearchPage";
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { loadStations, addStation, updateStation, removeStation } from '../store/actions/station.actions.js'

export function NavBar() {


    const stations = useSelector((storeState) => storeState.stationModule.stations.slice(7, 15));


    return (
        <nav className="side-bar">
            <ul className="side-bar-list">
                <div className="header-side-bar">
                    <li className="side-bar-item ">
                        <NavLink to="/station" className="nav-link">
                            <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="1.4em" viewBox="2 -3 35 24"><path fill="none" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m3 12l2-2m0 0l7-7l7 7M5 10v10a1 1 0 0 0 1 1h3m10-11l2 2m-2-2v10a1 1 0 0 1-1 1h-3m-6 0a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1m-6 0h6"></path></svg>
                            Home
                        </NavLink>
                    </li>

                    <li className="side-bar-item">
                        <NavLink to="/search" className="nav-link">
                            <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="1.4em" viewBox="2 -3 35 24"><path fill="none" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m21 21l-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"></path></svg>
                            Search

                        </NavLink>
                    </li>
                </div>
                <ul />
                <div className="main-side-bar">

                    <li className="side-bar-item">
                        <NavLink to="/library" className="nav-link">
                            <span className="library">
                                <svg
                                    role="img"
                                    height="24"
                                    width="24"
                                    aria-hidden="true"
                                    viewBox="3 1 24 24"
                                    data-encore-id="icon"
                                    className="Svg-sc-ytk21e-0 ldgdZj"
                                    style={{ color: 'white', marginBottom: '5px' }}
                                >
                                    <path d="M3 22a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1zM15.5 2.134A1 1 0 0 0 14 3v18a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V6.464a1 1 0 0 0-.5-.866l-6-3.464zM9 2a1 1 0 0 0-1 1v18a1 1 2 1 0 2 0V3a1 1 0 0 0-1-1z"></path>
                                </svg>

                                <span>Your Library</span>
                            </span>

                        </NavLink>
                    </li>
                    {/* <li className="side-bar-item">
                        <NavLink to="/liked" className="nav-link">
                            <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="1.4em" viewBox="1 6 75 24"><mask id="ipSLike0"><path fill="#fff" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M15 8C8.925 8 4 12.925 4 19c0 11 13 21 20 23.326C31 40 44 30 44 19c0-6.075-4.925-11-11-11c-3.72 0-7.01 1.847-9 4.674A10.987 10.987 0 0 0 15 8Z"></path></mask><path fill="#ffffff" d="M0 0h48v48H0z" mask="url(#ipSLike0)"></path></svg>
                            Liked Songs
                        </NavLink>
                    </li>

                    <li className="side-bar-item">
                        <NavLink to="station/add" className="nav-link">
                            <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="1.4em" viewBox="1 6 75 24"><mask id="ipSAdd0"><g fill="none" strokeLinejoin="round" strokeWidth="4"><rect width="36" height="36" x="6" y="6" fill="#fff" stroke="#fff" rx="3"></rect><path stroke="#000" strokeLinecap="round" d="M24 16v16m-8-8h16"></path></g></mask><path fill="#ffffff" d="M0 0h48v48H0z" mask="url(#ipSAdd0)"></path></svg>
                            Create PlayList
                        </NavLink>
                    </li> */}
                    <div className="user-station-list ">
                        {stations.map((station) => (
                            <li className="station-preview" key={station._id}>
                                <img src={station.createdBy.imgUrl} alt={station.name} />
                                <Link to={`station/station/${station._id}`}>
                                    <div className="station-info">
                                        <p className="playlist-name">{station.name}</p>
                                        <p className="song-name">
                                            {station.songs.map(song => <span key={song.artist}>{song.artist} </span>)}
                                        </p>
                                    </div>
                                </Link>
                            </li>
                        ))}
                    </div>
                </div>
            </ul>
        </nav>
    );
}