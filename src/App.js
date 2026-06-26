import {useEffect, useReducer} from "react"
import DateCounter from "./DateCounter";
import Header from "./Header";
import Main from "././Main";

const initialState={
  questions:[],
  status: 'loading',


};

function reducer(state,action){

    switch(action.type){
        case "dataRecieved":
          return {...state, questions: action.payload, status: "ready"};
        case "dataFailed":
          return {...state, status: "error"}
        default:
          throw new Error("Unknown action")
      }
}

function App() {
  const [state, dispatch] =useReducer(reducer, initialState);

  useEffect(function(){
      fetch("http://localhost:9000/questions")
      .then((res) => res.json())
      .then((data) => dispatch({type: "dataRecieved", payload: data}))
      .catch((err) => dispatch({type: 'dataFailed'}));
  },[])
  return (
    <div className="App">
     {/* <DateCounter/> */}
     <Header/>
    <Main>
      <div>
        <p>1/15</p>
      <p>Questions?</p>
      </div>
      
    </Main>
    </div>
  );
}

export default App;
