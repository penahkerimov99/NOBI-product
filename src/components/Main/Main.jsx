import React from 'react';
import './style.scss';
import Aside from '../Aside/Aside';
import { Filtermenu } from '../Filtermenu/Filtermenu';
import { Jobcart } from '../Jobcart/Jobcart';


const Main = () => {
  return (
    <div>
    <Aside/>
    <Filtermenu/>
    </div>
  )
}

export default Main