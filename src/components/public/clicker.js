import { useEffect, useState } from 'react'

function Clicker() {
    const btnClicked = () => {
        alert('Clicked')
    }
    return (
        <div>
            <h1>Clicker</h1>
            <button onClick={() => btnClicked()}>Click</button>
        </div>
    )   
}

export default Clicker