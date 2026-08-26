import React from 'react'
import Filho from './Filho'


export default CompPai=>{
    let x=20 
    let y=100

    return (

        <>

        <Filho a={x} b={y} />
        <Filho a={x+100} b={y*10} />

        </>
    )

}