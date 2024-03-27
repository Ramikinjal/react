import { useState } from "react"
import Use2 from "./Use2";
import Box from "./Box"


export default function Use1() {
    const [age, setage] = useState(20)
    function changeAge(age) {
        setage(age)

    }
    return (<Box.Provider value={{ age: age, changeAge: changeAge }}>
        <Use2 />
    </Box.Provider>)

}