import React from 'react';
import './style.scss';
import { Job } from '../Job/Job';






export const Jobcart = ({ id, video, description, name, value, hours, date, price, profile }) => {

    return (


        <div className='container-fluid jobcart-container'>
            <div className='row jobcart-row'>
                <Job
                    id={id}
                    video={video}
                    description={description}
                    profile={profile}
                    name={name}
                    hours={hours}
                    date={date}
                    price={price}
                    value={value}
                />
            </div>
        </div>
    )
}
