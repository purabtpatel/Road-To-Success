import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import './../../index.css'

import React, { useState } from 'react'
import ROCell from 'src/components/ROCell'

const RoTestPage = () => {
  var d = new Date("2022-12-12T03:46:55.084Z").toISOString()
  console.log('about to return from page')
  //console.log(d)


  //thanks purab
  /*
  function convertDate(date) {
    date.toString()
    let dateArr = date.split('-');
    let month = dateArr[0];
    let day = dateArr[1];
    let year = dateArr[2];

    let dayOne = new Date(year, month - 1, day).toISOString();

    return dayOne;

  }

  let today = new Date();
  let dd = String(today.getDate()).padStart(2, '0');
  let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  let yyyy = today.getFullYear();
  today = mm + '-' + dd + '-' + yyyy;
  const d = useState(today);

  */
  console.log('right after this is the type of d')
  console.log(typeof d)
  console.log(d instanceof Date)
  console.log(d)
  return (
    <>
      <MetaTags title="RoTest" description="RoTest page" />
      <ROCell d/>
    </>
  )
}

export default RoTestPage
