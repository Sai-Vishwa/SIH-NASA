import { useState } from "react";
import Input from "../subComponents/FeedbackForm/Input";
import ReactSelect from "../subComponents/FeedbackForm/ReactSelect";

function Form({currentSize , languagesAndContent , lang}){

    const [name,setName] = useState(" Name");
    const [email,setEmail] = useState(" Email");
    const [category,setCategory] = useState("Select");


    return (
        <div className="block mx-auto w-1/2 bg-blue-400 border-2 border-blue-900 rounded-xl m-0">
                <Input type={"text"} id={"Name"} onchange={setName}
                label={languagesAndContent[lang]["Form"][1]}
                size={currentSize["Form"]}
                input={name}
                />
                <Input type={"email"} id={"Email"} onchange={setEmail}
                label={languagesAndContent[lang]["Form"][2]}
                size={currentSize["Form"]}
                input={email}
                />
                <ReactSelect
                lang={lang}
                languagesAndContent={languagesAndContent}
                input={category}
                id={"Category"}
                onchange={setCategory}
                size={currentSize["Form"]}
                />
        </div>
    )

}
export default Form;