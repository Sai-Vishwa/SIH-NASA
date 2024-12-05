import { useState } from "react";
import Header from "../primaryComponents/Header";
import Navbar from "../primaryComponents/navbar";
import "../index.css"
import Dummy from "./dummy";
import Carousel from "../primaryComponents/Carousel";

function HomePage(){
    const availableSizes = ["text-xs","text-sm","text-base","text-lg","text-xl","text-2xl","text-3xl","text-4xl","text-5xl","text-6xl","text-7xl","text-8xl","text-9xl"];
    const defaultSize = {"Header":"text-6xl" , "Navbar" : "text-base"}
    const [currentSize,setCurrentSize] = useState(defaultSize);
    const languagesAndContent = {"English":{
                                            "Header":"Heading",
                                            "Navbar":["Home","About","Services","Feedback","Eng"]
                                            },
                                "Hindi":{
                                        "Header":"शीर्षक",
                                        "Navbar":["घर","हमारे बारे में","सेवा","प्रतिक्रिया","आ"]
                                    },
                                "Tamil":{
                                    "Header":"தலைப்பு",
                                    "Navbar":["வீடு","எங்களைப் பற்றி","சேவைகள்","கருத்து","அ"]
                                }};
    const [lang,setLang] = useState("English");
    const l = localStorage.getItem("LANGUAGE")
    if(l!=="English" && l!=="Tamil" && l!=="Hindi"){
        localStorage.setItem("LANGUAGE","English")
    }

    function setSize(dummy){
        console.log("Im getting triggered")
        console.log(JSON.stringify(dummy))
        setCurrentSize(JSON.parse(JSON.stringify(dummy)))
    }
    return (
        <>
            <Header
            languagesAndContent = {languagesAndContent}
            lang = {lang}
            currentSize = {currentSize} 
            type={"Header"}
            />
            <Navbar 
            defaultSize = {defaultSize}
            availableSizes = {availableSizes}
            currentSize = {currentSize}
            setCurrentSize = {setCurrentSize}
            languagesAndContent = {languagesAndContent}
            lang = {lang}
            setLang = {setLang}
            setSize  = {setSize}/>

            <div className="mt-10">
            <Carousel 
            lang = {lang}/>
            </div>
            
            
        </>

    )
}

export default HomePage;