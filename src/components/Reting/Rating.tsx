import React from "react";

type RatingProps = {
    value:number
    // value:1|2|3|4|5
}
export function Rating(props:RatingProps) {

    return (
        <div>
            <Star selected={true}/>
            <Star selected={true}/>
            <Star selected={true}/>
            <Star selected={true}/>
            <Star selected={true}/>
        </div>
    );
}

type StarType = {
    selected:boolean
}
function Star(props: StarType) {
    if(props.selected===true) {
        return <span><b>star</b> </span>
    } else {
        return <span>star </span>
    }

}
