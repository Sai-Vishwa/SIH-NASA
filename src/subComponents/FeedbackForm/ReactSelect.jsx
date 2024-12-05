import Select from 'react-select';

function ReactSelect({lang,languagesAndContent,input,onchange,id,size}){

    const customStyles = {
        placeholder: (provided) => ({
          ...provided,
          color:'#000099',
      }),
        control: (provided) => ({
          ...provided,
          backgroundColor: 'white',
          border: 'none',
          boxShadow: 'none',
          padding: 'none',
          width: '100%',
        }),
        option: (provided, state) => ({
          ...provided,
          backgroundColor: state.isSelected ? '#edf2f7' : 'white',
          color: '#000099',
          padding: '0.5rem',
          '&:hover': {
            backgroundColor: '#000099',
            color: '#ffffff'
          },
        }),
        menu: (provided) => ({
          ...provided,
          backgroundColor: 'white',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        }),
        singleValue: (provided) => ({
          ...provided,
          color: '#000099',
        }),
        dropdownIndicator: (provided) => ({
          ...provided,
          color: '#000099',
          '&:hover': {
            color: '#000099',
          },
        }),
        indicatorSeparator: () => ({
          display: 'none',
        }),
      };

      const optionsArr = [
        {"value":"Broken Link","label":languagesAndContent[lang]["Form"][4][0]},
        {"value":"Complaint","label":languagesAndContent[lang]["Form"][4][1]},
        {"value":"Compliment","label":languagesAndContent[lang]["Form"][4][2]},
        {"value":"Site Contents","label":languagesAndContent[lang]["Form"][4][3]},
        {"value":"Site Errors","label":languagesAndContent[lang]["Form"][4][4]},
        {"value":"Suggestions","label":languagesAndContent[lang]["Form"][4][5]},
        {"value":"Others","label":languagesAndContent[lang]["Form"][4][6]}
    ]

      return(
        <div className="border-0 m-0 min-w-full p-2 flex justify-around items-center">
            <div className="w-1/2">
            <label htmlFor={id} className={`text-blue-900  ${size} font-bold`} >{languagesAndContent[lang]["Form"][3]}</label>
            </div>
            <div className="w-1/2">
            <Select options={optionsArr} id={id} isSearchable={true} placeholder={input} onChange={(e)=>{onchange(e.label)}} className={`border-none focus:border-none focus:outline-none pl-5 focus:caret-blue-900 text-blue-900 w-full ${size}`} styles={customStyles}/>
            </div>
        </div>
      )



}
export default ReactSelect;