
import React from 'react'

const ChildComponent = ( props : any) => {
    console.log(props);
    
  return (
    <div className='flex justify-center p-4'>
    <div className='hover:bg-slate-300   border  p-5 w-3/12 '>
      <h1 className=" text-5xl p-2">  
      {props.name}</h1>

<h6 className="text-3xl p-2">
      {props.address}
      </h6>
      <p className='text-2xl p-2'>
      {props.rollNumber}
      </p>
       <h5 className='text-2xl p-2'>{props.country}</h5>
      
    </div>
    </div>
  )
}

export default ChildComponent
