import { useReducer } from "react"

let initialValue=0
let initialReact={like:0,dislike:0}
const counter=(state,action)=>{
    switch(action.type){
        case 'INCREMENT':
            return state+1
        case 'DECREMENT':
            return state-1
        case 'RESET':
            return 0
        default:
            return state
    }
}
const likeCounter=(state,action)=>{
    switch(action.type){
        case 'LIKE':
            return {like:state.like+1,dislike:state.dislike}
        case 'DISLIKE':
            return{ like:state.like,dislike:state.dislike+1}
        default:
            return state
    }
}
const Reducer =()=>{
    const [count,dispatch]=useReducer(counter,initialValue)
    return (
        <div>
            <h1>Count:{count}</h1>
            <button onClick={()=>dispatch({type:"INCREMENT"})}>+</button>
            <button onClick={()=>dispatch({type:"DECREMENT"})}>-</button>
            <button onClick={()=>dispatch({type:'RESET'})}>Reset</button>
            <h2>Task</h2>
            <buttuon onClick={()=>dispatch1({ type})}/>
        </div>
    )
}
export default Reducer