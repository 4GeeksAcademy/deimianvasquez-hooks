import React, { useState, useEffect } from "react"

const App = (props) => {
    //podemos escribir javascript
    const [counter, setCounter] = useState(0)// dentro del useState va el tipo de dato
    //1.- (counter) estado global(variable)inmutable
    //2.- (setCounter) la única funcion que modifica el estado

    const [color, setColor] = useState("text-danger")

    const [arrColor, setArrColor] = useState(["text-secondary", "text-danger", "text-warning"])

    function decrement() {
        setCounter(counter - 1)
    }

    const changeColor = () => {
        setColor(arrColor[Math.floor(Math.random() * arrColor.length)])
    }


    //useEffect
    // recibe dos parametros, un callback function y un array (lista de dependencias)
    useEffect(() => { console.log("Fetch de api") }, [color])


    return (
        <div className="container">
            <div className={`row justify-content-center ${color}`}>
                <div className={counter < 0 ? `col-7 py-5 my-5 bg-danger` : "col-7 py-5 my-5 bg-success"}>
                    {counter}
                </div>
                <div className="col-7 d-flex gap-4">

                    <button onClick={() => setCounter(counter + 1)}>Sumar</button>
                    <button onClick={() => decrement()}>Restar</button>
                    <button onClick={() => changeColor()}>Cambia color texto</button>
                </div>
            </div>
        </div>
    )
}

export default App