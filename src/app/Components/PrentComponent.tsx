import React from 'react'
import ChildComponent from './ChildComponent'


const PrentComponent = () => {
    let fullName = "Muhammad Asif"
    let address = "Karachi "
    let rollNumber = 2255838
    let country = "pakistan"

    let fullName2 = "Hurairah"
    let address2 = "Islamabad"
    let rollNumber2 = 213897
    let country2 = "pakistan"
  return (
    <div>
      <ChildComponent 
      name = {fullName}
      address ={address}
      rollNumber = {rollNumber}
      country = {country}
        />

        <ChildComponent
           name = {fullName2}
           address = {address2}
           rollNumber = {rollNumber2}
           country = {country2}
        
        />
    </div>
  )
}

export default PrentComponent
