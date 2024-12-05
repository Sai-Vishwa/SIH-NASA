import ImportFonts from "./ImportFonts";
import "../index.css"


function Header({lang , languagesAndContent , currentSize}){

    return(
        <>
        <ImportFonts />
        <div className="min-w-full flex justify-center items-center bg-blue-900">
            <p className={`text-white ${currentSize["Header"]} font-dos p-4 font-semibold`}>{languagesAndContent[lang]["Header"]}</p>
        </div>
        </>
        
    )
}
export default Header;