import React from 'react'
import './style.scss'
import { BsFillCalendarDateFill } from 'react-icons/bs';
import { BsClockFill } from 'react-icons/bs';
import { BsCash } from 'react-icons/bs';



export const Job = ({id,video,description,name,value,hours,date,price,profile}) => {
    return (
            <div className='col-4 cart mb-5'>
                <div className='row video'>
                    <iframe src={video}></iframe>
                </div>
                <div className='row description'>
                    <p>{description}</p>
                </div>
                <div className='row profile'>
                    <div className='img1' style={{ backgroundImage: `url(${profile})`, }} alt='prof' />

                    <div className='name'>{name}</div>
                </div>
                <div className='row date'><p><BsFillCalendarDateFill /> {date}</p></div>
                <div className='row hour'><p><BsClockFill /> {hours}</p></div>
                <div className='row money'><p><BsCash /> {price}</p></div>
                <div className='row btns mb-3'>
                    <button type="button" class="btn btn1 btn-success col-4">Book now</button>
                    <button type="button" class="btn btn-light col-4">More</button>
                </div>
            </div>
    )
}
