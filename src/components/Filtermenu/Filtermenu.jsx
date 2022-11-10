import React from 'react'
import './style.scss'
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import buttons from '../../buttons.json'
import data from '../../data.json'
import { Job } from '../Job/Job';

function getData() {
  const dataList = data;
  return dataList;

}

function filterData(dataType) {
  let filtredData = getData().filter(type => type.value === dataType);
  return filtredData;
  
}


export const Filtermenu = () => {

  const [filtredData, setFiltredData] = useState(null);
  useEffect(() => {
    setFiltredData(getData());
  }, []);

  function handleData(typeData) {
    console.log(typeData);

    typeData !== "All"
      ? setFiltredData(filterData(typeData))
      : setFiltredData(getData());
  }

  return (
    <div className='container-fluid filter-container'>
      <ul className='filter'>
        {buttons.map((x, index) => (
          <li>
            <NavLink key={index} value={x.value} to={x.to} onClick={() => handleData(x.name)} className={({ isActive }) => (isActive ? "isactive" : "non-active")}>{x.name}</NavLink>
          </li>
        ))}
      </ul>

      <div className='container-fluid jobcart-container'>
      <div className='row jobcart-row  mb-5'>
      {filtredData &&
        filtredData.map((type) => (
          <Job 
          id={type.id}
          video={type.video}
          description = {type.description}
          profile={type.profile}
          name={type.name}
          hours={type.hours}
          date={type.date}
          price={type.price}
          />
        ))}
        </div>
        </div>
    </div>
  )
}
