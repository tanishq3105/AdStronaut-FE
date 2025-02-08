interface propLabel{
    label:string,
    onclick?:(event:React.MouseEvent<HTMLButtonElement,MouseEvent>)=>void;
    dimensions?:string,
    color?:string,
    padding?:string

}


export const Button:React.FC<propLabel>=({label, onclick, dimensions, color,padding})=>{
    return(
        <div>
            <button
            className={`rounded-lg ${dimensions || ''}  ${color} ${padding}`}
            onClick={onclick}
            >{label}</button>
        </div>
    )

}