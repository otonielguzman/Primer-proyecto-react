import {Icon} from "@iconify/react"

export const CardList = () => {
    const temasTeoria = [
        {title: "useEffect"},
        {title: "imagenes"}
    ]
    return(
        <div className="flex flex-col gap-4">
        	{temasTeoria.map(
                (item, id)=>(
                   <div key={id} className="group w-full bg-[#151515] p-5 rounded-xl border-4 border-[#333] flex justify-between hover:border-[#e776f3] cursor-pointer">
                   	<h3 class name="font-medium text-lg">{item.title}</h3>
                       <Icon className="group-hover:text-[#e776f3]" icon="dashicons:arrow-right-alt2" width="24" height="48"/>
                   </div>
                )
            )}
        </div>
    )
}