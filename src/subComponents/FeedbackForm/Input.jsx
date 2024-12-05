import "../../index.css"

function Input({type , label ,input,id , onchange ,size}){
    return(
        <div className=" border-0 m-0 min-w-full p-2 flex justify-around items-center">
            <div className="w-1/2">
            <label htmlFor={id} className={`text-blue-900  ${size} font-bold`} >{label}</label>
            </div>
            <div className="w-1/2">
            <input type={type} id={id} placeholder={input} onChange={(e)=>{onchange(e.target.value)}} className={`${size} text-blue-900 py-1 focus:caret-blue-900 appearance-none border-none focus:border-none focus:outline-none min-w-full text-center`}/>
            </div>
        </div>
    )
}
export default Input;