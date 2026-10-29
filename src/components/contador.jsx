import {useState} from "react"
import {Modal} from "./modal.jsx"
import styles from "./Contador.module.css"

export const Contador = () => {
    const [state, setState] = useState(false)
    return(
        <div className= "bg-amber-200 p-4 rounded-2x1">
        	<button className="contador" onClick={
                ()=>setState(!state)
            }>{state?"Ocultar":"Mostrar"}</button>
            {state && <Modal/>}
        </div>
    );
}