export default function Slider({stateBankOfReact, id, dispatch}){
// testing input
  console.log(stateBankOfReact, id);

// helper functions
  // to convert currency into lakhs and crores
  let convertCurrencyIntoLakhsCrores = (currency)=>{
    let formattedCurrency = '';
    if(currency >= 100000 && currency <= 9999999){
      formattedCurrency = currency/100000;
      formattedCurrency = `₹ ${formattedCurrency} ${formattedCurrency >1 ? 'Lakhs' : 'Lakh'}`;
    }else if(currency >= 10000000){
      formattedCurrency = currency/10000000;
      formattedCurrency = `₹ ${formattedCurrency} ${formattedCurrency >1 ? 'Crores' : 'Crore'}`;
    }
    return formattedCurrency;
  }

// Returning JSX
  return (  
    <div  className="w-[50rem]" >
      <label 
        htmlFor={stateBankOfReact[id]} 
        className="font-semibold text-[1.8rem]"        
      >
        Home Value<br/>{convertCurrencyIntoLakhsCrores(stateBankOfReact[id].current)}
      </label>
      <input onChange={(e)=>{
        dispatch({request:'updateValue', id:stateBankOfReact[id], newCurrentValue:e.target.value})
      }}
      className="w-[100%]" type="range" id={stateBankOfReact[id]} min={stateBankOfReact[id].min} max={stateBankOfReact[id].max} defaultValue={stateBankOfReact[id].current} />

      <div className="flex justify-between text-gray-300 italic ">
        <span>{convertCurrencyIntoLakhsCrores(stateBankOfReact[id].min)}</span>
        <span>{convertCurrencyIntoLakhsCrores(stateBankOfReact[id].max)}</span>
      </div>
    </div>
    
  );
}

