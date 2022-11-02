import React, {useState} from "react";  

const PlayGround = () =>{
    const [count, setCount] = useState(0);
    return(
        <div className="container">
        <div className="row">
            <div className="col">
                <div className="h-100 p-5 bg-light border rounded-3">
                    <h2>Counter app with React states</h2>
                    <div className="p-2 bg-white border inline-block rounded">
                        <p>Current value of counter : <b>{count}</b></p>
                        <div class="btn-group">
                            <a href="#" class="btn btn-success active" aria-current="page" onClick={()=>{setCount(count + 1)}}>Increment</a>
                            <a href="#" class="btn btn-secondary" onClick={()=>{setCount(0)}}>Reset</a>
                            <a href="#" class="btn btn-danger" onClick={()=>{setCount(count - 1)}}>Decrement</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default PlayGround;