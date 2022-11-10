import React from 'react'
import './style.scss';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { BsSearch } from 'react-icons/bs';

const Header = () => {
    return (
        <div>
            <div className='container-fluid header-container'>
                
                    
                    <div className='col-2 logo'>
                        <div className='logoimg' />
                        <span className='fs-5'><Link className='logotitle' to='/'>NOBI</Link></span>
                    </div>
                
                    <div className='col-1 btn1'>
                        <Link to='/'><Button variant="light">Features</Button></Link>
                    </div>
                    <div className='col-1 btn2'><Link to='/'><Button variant="light">Support</Button></Link></div>

                    <div className='col-4 search'>

                        <InputGroup className="mb-3">
                            <Form.Control
                                placeholder="Search.."
                                aria-label="Recipient's username"
                                aria-describedby="basic-addon2"
                                className='formsearch'
                            />
                            <Button className='btn' variant="outline-secondary" id="button-addon2">
                                <BsSearch/>
                            </Button>
                        </InputGroup>
                    </div>

                   <div className='col login'>
                       <Link to='/signin'><Button variant="light">Login</Button></Link>
                    </div>

                    <div className='col sing'>
                        <Link to='/register'><Button variant="success">Sign up</Button></Link>
                    </div>
              
            </div>
        </div>
    )
}

export default Header