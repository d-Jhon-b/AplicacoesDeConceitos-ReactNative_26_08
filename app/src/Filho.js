import React from 'react'
import {Text} from 'react-native'
import Estilo from './Estilo'


export default Comp=>{
    
    
    return(
        <>
            <Text style={Estilo.fontGrande}>{Comp.a}</Text>  
            <Text style={Estilo.fontMedia}>{Comp.b}</Text>  
        </>
    )   
}