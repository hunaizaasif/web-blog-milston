import React from 'react'
import { FaRegStar, FaStarHalfAlt } from "react-icons/fa";

const CarMap = () => {
  const carName = [
    { carImage: "toyota.png", carName: "Toyota Corolla", price: "PKR 59.7 - 75.5 lacs ", reViwes: "627 Reviews" },
    { carImage: "suzuki.jpg", carName: "Suzuki Alto ", price: "PKR 23.3 - 30.5 lacs", reViwes: "203 Reviews" },
    { carImage: "Honda_City.jpg", carName: "Honda City  ", price: "PKR 46.5 - 58.5 lacs", reViwes: "457 Reviews" },
    { carImage: "honda civic.jpg", carName: "Honda Civic ", price: "PKR 86.6 - 99.0 lacs", reViwes: "363 Reviews" },
  ]


  return (
    <div className='flex justify-center my-10 text-center '>
      {carName.map((veh, index) => (
        <div className='border  my-3 p-3  hover:scale-105 transform trancetion  duration-400 ease-in-out'
          key={index}>
          <img src={veh.carImage} alt={veh.carName} style={{ width: '300px', height: '300px' }} />
          <h5 className='text-blue-800 font-bold text-3xl'>{veh.carName}</h5>
          <h2 className='text-green-600 font-light text-xl p-2'>price : {veh.price}</h2>

          <h4 className='flex gap-1 justify-center items-center text-gray-600 p-4'>
            <FaRegStar className='text-yellow-600' />
            <FaRegStar className='text-yellow-600' />
            <FaRegStar className='text-yellow-600' />
            <FaStarHalfAlt className='text-yellow-600' />
            <FaStarHalfAlt className='text-yellow-600' />
            {veh.reViwes}</h4>

        </div>

      )
      )}
    </div>

  )

}

export default CarMap