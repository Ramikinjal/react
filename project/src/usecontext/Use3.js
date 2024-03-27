
import { useContext } from "react"
import Box from "./Box"


export default function Use3() {
    const data = useContext(Box)

    return (
        <>
            <h1>MyAge{data.age}</h1>
            <button onClick={() => data.changeAge(data.age + 1)}> </button>


        </>
    )
}