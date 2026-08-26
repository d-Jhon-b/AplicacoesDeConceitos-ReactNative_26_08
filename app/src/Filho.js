import React from 'react'
import {Text,Button} from 'react-native'
// import Estilo from './Estilo'


export default Comp=>{
    
    
    function GerarNumero(min, max){
        const fator = max-min + 1
        return parseInt(Math.random() * fator ) + min    
    }


    return (
        <Button
        title='Executar'
        onPress={function(){
                const n = GerarNumero(Comp.min, Comp.max)
                Comp.funcao(n, 'Valor é:')
            }}
        />
    )
 
}