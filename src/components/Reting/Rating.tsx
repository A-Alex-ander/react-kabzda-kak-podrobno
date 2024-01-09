import React from "react";

type RatingPropsType = {
    value:number
}
export function Rating(props:RatingPropsType) {
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
