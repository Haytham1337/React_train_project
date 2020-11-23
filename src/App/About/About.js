import React, {useState} from 'react';




function About (){

    const [counterState,setCounterState] = useState(0);
    const [counterIm,setTemp] = useState(null);

    function increment(){
        setCounterState((prev)=>{
            console.log(prev);
            return prev+1;
        });
    }

    function decrement(){
        setCounterState(counterState-1);

    }


    
    function getFormValue(e){
        console.log(e.target.value);
        setTemp(e.target.value);
    }
    function changeByInput(){
        setCounterState(counterIm);
    }
    return (
        <div className="testBntWrapper">
            <h1>Test buttons:</h1>
            <h1>Counter is :{counterState} </h1>
            <button className="testBtn" onClick={increment}>Increment</button>
            <button className="testBtn" onClick={decrement}>Decrement</button>
            <form onSubmit={changeByInput}>
                <input type="number" onChange={getFormValue}></input>
                <input type="submit"></input>
            </form>

        </div>

    );
}


export default About;