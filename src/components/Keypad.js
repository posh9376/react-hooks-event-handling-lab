// Code Keypad Component Here

function Keypad (){

    const change = (event) => {
        console.log("Entering password...");
    }
    return (
        <div>
            <input type="password" onChange={change}/>
        </div>
    )
}

export default Keypad;