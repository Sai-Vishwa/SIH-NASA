import React, { useState } from "react";
import { motion } from "framer-motion";
import NavBarLink from "../subComponents/Navbar/navBarLink";
import "../index.css"

const Navbar = ({defaultSize , availableSizes , currentSize , setCurrentSize , languagesAndContent , setLang , lang , setSize}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesToggle, setservicesToggle] = useState(false);
  const [accessToggle, setaccessToggle] = useState(false);
  const [langToggle , setLangToggle] = useState(false);
  const map = {"English":"English","Hindi":"हिंदी","Tamil":"தமிழ்"}

  console.log("Props recieved - "+JSON.stringify(currentSize))

 

  function increaseSize(){
    let dummy = {...currentSize};
    let checker = true;
    Object.keys(dummy).forEach(val => {
        let ind = availableSizes.indexOf(dummy[val])
        if(availableSizes[ind] == "text-9xl"){
            alert("Maximum size reached!!");
            checker = false;
            return
        }
        dummy[val] = availableSizes[ind+1]
    })
    if(checker){setSize(dummy)}
  }
  function decreaseSize(){
    let dummy = {...currentSize};
    let checker = true;
    Object.keys(dummy).forEach(val => {
        let ind = availableSizes.indexOf(dummy[val])
        if(availableSizes[ind] == "text-xs"){
            alert("Minimum size reached!!");
            checker = false;
            
        }
        else{dummy[val] = availableSizes[ind-1]}
        
    })
    if(checker){setSize(dummy)}
  }
  function defaultSet(){
    setSize(defaultSize);
  }


  return (
    <nav className="bg-blue-950 text-white px-4 py-2">
      <div className="flex justify-between items-center">


        {/* ui for phones */}
        <div className="md:flex sm:flex xs:flex lg:hidden">
        <button
          className={`text-white ${currentSize["Navbar"]}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
        </div>
        


        {/* ui for computer and laptop */}
        <ul className="sm:hidden md:hidden xs:hidden lg:flex min-w-full lg:justify-around lg:items-center">

                <NavBarLink text={languagesAndContent[lang]["Navbar"][0]} route={"/"} size={currentSize["Navbar"]}/>

                <NavBarLink text={languagesAndContent[lang]["Navbar"][1]} route={"/about"} size={currentSize["Navbar"]}/>
          
            <li className="">
            <button
              onClick={() => {setservicesToggle(!servicesToggle); if(accessToggle){setaccessToggle(false)}}}
              className={`text-white cursor-pointer hover:underline ${currentSize["Navbar"]}`}
            >
              {languagesAndContent[lang]["Navbar"][2]} ▼
            </button>
            {servicesToggle && (
              <motion.ul
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                
                className="absolute bg-blue-950 border-2 border-white p-2 mt-2 rounded shadow-lg z-50">
                <li className="p-1"><NavBarLink text={"Shadows"} route={"/shadows"} size={currentSize["Navbar"]}/></li>
                <li className="p-1"><NavBarLink text={"Solar irr"} route={"/shadows"} size={currentSize["Navbar"]}/></li>
                <li className="p-1"><NavBarLink text={"Custom model"} route={"/shadows"} size={currentSize["Navbar"]}/></li>
                <li className="p-1"><NavBarLink text={"Solar task"} route={"/shadows"} size={currentSize["Navbar"]}/></li>
                <li className="p-1"><NavBarLink text={"Policy"} route={"/shadows"} size={currentSize["Navbar"]}/></li>
                <li className="p-1"><NavBarLink text={"Time lapse"} route={"/shadows"} size={currentSize["Navbar"]}/></li>
              </motion.ul>
            )}
          </li>

          <NavBarLink text={languagesAndContent[lang]["Navbar"][3]} route={"/feedback"} size={currentSize["Navbar"]}/>


          <div className="m-0 border-none flex justify-center space-x-4">
                <button onClick={increaseSize} className={`px-1 text-white border-2 border-white rounded-md hover:bg-white hover:text-blue-950 cursor-pointer ${currentSize["Navbar"]}`}>A+</button>
                <button onClick={defaultSet} className={`px-2 text-white border-2 border-white rounded-md hover:bg-white hover:text-blue-950 cursor-pointer ${currentSize["Navbar"]}`}>A</button>
                <button onClick={decreaseSize} className={`px-1 text-white border-2 border-white rounded-md hover:bg-white hover:text-blue-950 cursor-pointer ${currentSize["Navbar"]}`}> A-</button>
                <div>
                <button onClick={()=>{setLangToggle(!langToggle)}} className={`px-2 text-white border-2 border-white rounded-md hover:bg-white hover:text-blue-950 cursor-pointer ${currentSize["Navbar"]}`}>{map[lang] + " "}▼</button>
                {langToggle && (
              <motion.ul
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute bg-blue-950 border-2 border-white p-2 mt-2 rounded shadow-lg">
                <li className="p-1"><button onClick={()=>{localStorage.setItem("LANGUAGE","English");setLang("English");}} className={`text-white hover:underline cursor-pointer ${currentSize["Navbar"]}`}>English</button></li> 
                <li className="p-1"><button onClick={()=>{localStorage.setItem("LANGUAGE","Tamil");setLang("Tamil");}} className={`text-white hover:underline cursor-pointer ${currentSize["Navbar"]}`}>தமிழ்</button></li>
                <li className="p-1"><button onClick={()=>{localStorage.setItem("LANGUAGE","Hindi");console.log("Im getting executed");setLang("Hindi");}} className={`text-white hover:underline cursor-pointer ${currentSize["Navbar"]}`}>हिंदी</button></li>
              </motion.ul>
            )}
                </div>
                
          </div>
          
        </ul>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="md:hidden bg-gray-700 mt-2 p-2 rounded"
        >
          <ul>
            <li className="py-2 hover:bg-gray-600 rounded">
              <button onClick={() => setservicesToggle(!servicesToggle)}>Menu 1 ▼</button>
              {servicesToggle && (
                <motion.ul
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-gray-600 mt-2 p-2 rounded"
                >
                  <li className="hover:bg-gray-500 p-2">Option 1</li>
                  <li className="hover:bg-gray-500 p-2">Option 2</li>
                  <li className="hover:bg-gray-500 p-2">Option 3</li>
                </motion.ul>
              )}
            </li>
            <li className="py-2 hover:bg-gray-600 rounded">
              <button onClick={() => setaccessToggle(!accessToggle)}>Menu 2 ▼</button>
              {accessToggle && (
                <motion.ul
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-gray-600 mt-2 p-2 rounded"
                >
                  <li className="hover:bg-gray-500 p-2">Option A</li>
                  <li className="hover:bg-gray-500 p-2">Option B</li>
                  <li className="hover:bg-gray-500 p-2">Option C</li>
                </motion.ul>
              )}
            </li>
          </ul>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
