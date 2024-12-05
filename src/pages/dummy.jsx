import { useState } from "react";

function Dummy(){

//normal js
    const [a,setA] = useState(0);
    function incr(){
        setA(a+1)
    }
    return(<>
    {a}
    <button onClick={incr}>increase</button>
    </>)

}

export default Dummy;