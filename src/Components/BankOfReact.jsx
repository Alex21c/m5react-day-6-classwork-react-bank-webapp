import Slider from "./Slider";
import { useReducer } from "react";

export default function BankOfReact(){
  let initialState = {
    homeValue:{
      id : 'homeValue',
      min: 2500000,
      max: 250000000,
      current: 20000000
    },
    downPayment:{
      id : 'downPayment',
      min: 0,
      max: 10000000, // equals to current homeValue
      current: 1000000
    },
    loanAmount:{
      id : 'loanAmount',
      min: 0,
      max: 10000000, // equals to current homeValue
      current: 9000000
    },
    interestRate:{
      id : 'interestRate',
      min: 4,
      max: 40,
      current: 10
    },
    tenure: [3,5,8,10,12,15,18,20,23,25,28,30] //in years
  
  };

// using reducer to set initial state
  function reducer(state, action){
    console.log('reducer is called!', state, action);
    if(action.request === 'updateValue'){
      return {
        ...state,
        [action.id]:{          
          ...state[action.id],
          'current' : action.newCurrentValue
        }

      };
    }

    // default is
      return state;
  }

  let [stateBankOfReact, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="border-2 border-slate-200 p-[2rem] w-[110rem] mt-[2rem] m-auto rounded-md flex flex-col gap-[2rem] text-[1.2rem] text-slate-200">
      <header className="bg-yellow-300 p-[2rem] rounded-md">
        <h1 className="text-slate-900 font-bold text-[2rem]">React Bank WebApp</h1>
      </header>

      <Slider key={'homeValue'} stateBankOfReact={stateBankOfReact} id={'homeValue'} dispatch={dispatch}/>
    </div>
  );
}