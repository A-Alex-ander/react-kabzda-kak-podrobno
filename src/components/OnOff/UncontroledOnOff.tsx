import {useState} from "react";

type PropsType = {
    onChange: (on: boolean) => void
    // on: boolean
}

export function UncontrolledOnOff(props: PropsType) {
    let [on, setOn] = useState(false)

    const onStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black ",
        display: "inline-block",
        padding: "2px",
        backgroundColor: on ? "green" : "white"
    }
    const offStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black ",
        display: "inline-block",
        marginLeft: "5px",
        padding: "2px",
        backgroundColor: on ? "white" : "red"
    }
    const indicatorStyle = {
        width: "10px",
        height: "10px",
        borderRadius: "5px",
        border: "1px solid black ",
        display: "inline-block",
        marginLeft: "5px",
        backgroundColor: on ? "green" : "red"
    }

    const onClicked = ()=>{
        setOn(true)
        props.onChange(on)
    }
const offClicked = ()=> {
    setOn(false)
    props.onChange(on)
}


    return <div>
        <div
            style={onStyle}
            onClick={onClicked}>
            on
        </div>
        <div
            style={offStyle}
            onClick={offClicked}>
            off
        </div>
        <div
            style={indicatorStyle}></div>
    </div>
}
