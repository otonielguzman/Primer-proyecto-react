import {HolaMundo} from "../components/HolaMundo.jsx"
import {Contador} from "../components/contador.jsx"
import {CardProducto} from "../components/CardProducto.jsx"

export const Old = () => {
    const frutas = ["granada", "mango", "sandia"]
    const productos = [
        {nombre:"laptop", precio:1400, destacado:true},
        {nombre:"mouse", precio:45, destacado:false},
        {nombre:"teclado", precio:250, destacado:false},]
        
    return(
        <div className = "">
			<h1 className="text-3xl font-bold underline">
         		Hello World
        	</h1>
    	<HolaMundo/>
        <Contador/>
        <section className="flex flex-col gap-4">
        {
            productos.map((item, i)=>(<CardProducto item={item} key={i}/>))
   
        }
        </section>
    </div>
    )
}