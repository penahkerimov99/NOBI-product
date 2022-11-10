import React from 'react'
import { NavLink, Router} from 'react-router-dom'
import { Route, Routes } from 'react-router-dom'
import './style.scss'
import { BsCardImage } from 'react-icons/bs'
import { AiTwotoneSetting } from 'react-icons/ai'
import { AiOutlineLogout } from 'react-icons/ai'
import { Settings } from './../Settings/Settings';
import { Outlet } from 'react-router-dom'

export const Profile = () => {
    return (
        <div className='container-fluid profile-cont'>
            <div className='col-3 prof-sec'>
                <div className='row me'>
                    <div className='img' />
                    <div className='name'>
                        <p>Niyamaddin Musaev</p>
                    </div>
                </div>
                <div className='row tools'>
                    <ul>
                        
                        <li><NavLink className='link' to='/work'><BsCardImage className='icn' /><span> Booked</span> </NavLink></li>


                        <li><NavLink className='link' to='/signin/profile/settings'><AiTwotoneSetting className='icn' /> <span>Settings</span> </NavLink></li>


                        <li><NavLink className='link' to='/'><AiOutlineLogout className='icn' /> <span>Log out</span> </NavLink></li>
                        <Outlet/>
                    </ul>
                </div>
            </div>
            <div className='col-8 works'>
              <Routes>
              
              </Routes>
            </div>
        </div>
    )
}
