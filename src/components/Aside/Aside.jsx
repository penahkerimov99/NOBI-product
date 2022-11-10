import React from 'react';
import './style.scss';
import Button from 'react-bootstrap/Button';

const Aside = () => {
    return (
        <div>
            <div className='container-fluid asidecontainer'>
                <div className='col-5 headercol'>
                    <div className='row header-1'>
                       <span> Nobi connect remote consultants and users</span>
                    </div>
                    <div className='row header-2'>
                        <span>We give you the tools you need to have paid 1:1 video calls and livestreams with your audience and paid subscribers.</span>
                    </div>
                    <div className='col-2'>
                        <Button className='bookbtn' variant="success">Book now</Button>
                    </div>
                </div>

                <div className='col-6 img'>
                    <div className='row asideimg mt-3'></div>
                    <div className=' row mb-3'> <Button className='asidebtn' variant="success">Book now</Button></div>
                </div>
            </div>
        </div>
    )
}

export default Aside