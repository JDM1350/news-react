import React, { Component } from 'react'
import loading from './name.gif'
export class Spinner extends Component {

   /* const Spinner =()=>{}    and remove render() // this is used for function based components*/
  render() {
    return (
      <div className='text-center'>
        <img src={loading} alt="loading" />
      </div>
    )
  }
}

export default Spinner
