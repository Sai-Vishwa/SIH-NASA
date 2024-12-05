import { useState } from "react";
import Header from "../primaryComponents/Header";
import "../index.css"
import Navbar from "../primaryComponents/navbar";
import Form from "../primaryComponents/Form";

function FeedBackForm(){


    const availableSizes = ["text-xs","text-sm","text-base","text-lg","text-xl","text-2xl","text-3xl","text-4xl","text-5xl","text-6xl","text-7xl","text-8xl","text-9xl"];
    const defaultSize = {"Feedback":"text-6xl" , "Navbar" : "text-base" , "Form":"text-base"}
    const [currentSize,setCurrentSize] = useState(defaultSize);
    const languagesAndContent = {"English":{
                                            "Feedback":"Feedback Form",
                                            "Navbar":["Home","About","Services","Feedback","Eng"],
                                            "Form": ["Your details","Name","Email address","Feedback Category",["Broken Link","Complaint","Compliment","Site Contents","Site error","Suggestion","Others"],"Feedback","max 300 chars"]
                                            },
                                "Hindi":{
                                        "Feedback":"प्रतिपुष्टी फ़ार्म",
                                        "Navbar":["घर","हमारे बारे में","सेवा","प्रतिक्रिया","आ"],
                                        "Form": ["आपका विवरण","नाम","मेल पता","प्रतिक्रिया श्रेणी",["टूटी हुई कड़ी","शिकायत","प्रशंसा","साइट सामग्री","साइट त्रुटि","सुझाव","अन्य"],"प्रतिक्रिया","अधिकतम 300 वर्ण"]
                                    },
                                "Tamil":{
                                    "Feedback":"கருத்து படிவம்",
                                    "Navbar":["வீடு","எங்களைப் பற்றி","சேவைகள்","கருத்து","அ"],
                                    "Form": ["உங்கள் விவரங்கள்","பெயர்","மின்னஞ்சல் முகவரி","கருத்து வகை",["உடைந்த இணைப்பு","புகார்","பாராட்டு","தளத்தின் உள்ளடக்கம்","தளத்தில் பிழை","பரிந்துரை","மற்றவை"],"கருத்து","அதிகபட்சம் 300 எழுத்துகள்"]
                                }};
    const [lang,setLang] = useState(localStorage.getItem("LANGUAGE"))


    function setSize(dummy){
        console.log("Im getting triggered")
        console.log(JSON.stringify(dummy))
        setCurrentSize(JSON.parse(JSON.stringify(dummy)))
    }

    return(
        <>
        <Header
            languagesAndContent = {languagesAndContent}
            lang = {lang}
            currentSize = {currentSize} 
            type={"Feedback"}
            />

        <Navbar
        defaultSize = {defaultSize}
        availableSizes = {availableSizes}
        currentSize = {currentSize}
        setCurrentSize = {setCurrentSize}
        languagesAndContent = {languagesAndContent}
        lang = {lang}
        setLang = {setLang}
        setSize  = {setSize} 
        />
        <div className="min-w-screen min-h-max flex items-center justify-center mt-10">
            <Form 
            lang={lang}
            languagesAndContent={languagesAndContent}
            currentSize={currentSize}
            />
        </div>
        
        </>
        

            
    )
}

export default FeedBackForm;