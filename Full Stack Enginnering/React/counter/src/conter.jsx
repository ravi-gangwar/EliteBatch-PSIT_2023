import { useState } from "react"

function Counter (){
    const [count, setcount] = useState(0)
    return (
        <>
        <h1>COunter</h1>
        <div>{count}</div>
        <button onClick={() => setcount(count + 1)}>
            add
        </button>
        <button onClick={() => setcount(count - 1)}>subs
        </button>
        </>
    )
}
export default Counter;