import { useEffect, useState } from "react"
import { mega } from "../../function/mega"
import IcontadorNew from "../basic/IcontadorNew"
export default function megasena(){
    const [qtde, setqtde] = useState(6)
    const [numeros, setNumeros] = useState([])

    useEffect(() => {
        setNumeros(mega())
    }, [])

    function RenderNumeros(){
        return numeros.map(
            numeros =>  <IcontadorNew key={numeros} numeros={numeros} />
        )
    }

   return(
    <div style={{
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
    }}>
        <h1>
            Mega-Sena
        </h1>
        <div style={{
            display:"flex",
            justifyContent:"center",
            flexWrap:"wrap"
             }}>
            {RenderNumeros()}
        </div>
        <div>
            <input type="number" min={6} max={20} value={qtde} 
            onChange={ev => setqtde(ev.target.value)} />
            <button onClick={() => setNumeros (mega(qtde))}>
                Gerar Aposta
            </button>
        </div>
    </div>   
   )
}