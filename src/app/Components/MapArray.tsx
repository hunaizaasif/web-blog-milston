import React from 'react'
// import Image from 'next/image'

const MapArray = () => {
  // const fruits = ["Apple" , "Orange" , "Mango" ,80 , 811,849];
  const fruits = [
    {id: 1 ,  fruitName: "Apple", price: 250,  },
    { id: 2 , fruitName: "Orange", price: 200,},
    {id: 3 , fruitName: "Mango", price: 300, },
    {id: 4 , fruitName: "WaterMelons", price: 350,  },
  ];

  return (
    <div className='flex justify-center items-center tsext-center my-10 '>

      {fruits.map((phal) => (
        <div className="border shadow-xl p-5 hover:bg-blue-500"
          key={phal.id}
        >

          {/* <img src={phal.image} alt={phal.fruitName} width={300} height={300} /> */}
          <h2>{phal.id}</h2>
          <h1> Fruite : {phal.fruitName}</h1>
          <p>Price : 1 kg {phal.price}</p>
          
        </div>



      ))
      }




    </div>
  )
}

export default MapArray
