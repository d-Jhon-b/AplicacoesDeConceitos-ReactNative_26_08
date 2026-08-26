import React, { useState } from "react";
import { Text } from "react-native"
import Estilo from './Estilo'
import Filho from './Filho'

export default Comp => {
    const [num, setNum] = useState(0)
    const [content, setContent]=useState('')


    function ExibirValor(GerarNumero, text) {
        console.warn(GerarNumero)
        setNum(GerarNumero)
        setContent(text)
    }
    return (
        <>
            <Text style={Estilo.fontGrande}>{`${content}:\n${num}`}</Text>
            <Filho
                min={1}
                max={100}
                funcao={ExibirValor}
            />
        </>
    )
}


 