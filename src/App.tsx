import React, {useState} from 'react';
import './App.css';
import {Rating, RatingValueType} from "./components/Reting/Rating";
import {Accordion} from "./components/Accordion/Accodion";
import {OnOff} from "./components/OnOff/OnOff";
import {UncontrolledAccordion} from "./components/Accordion/UncontrolledAccodion";
import {UncontrolledRating} from "./components/Reting/UncontrolledRating";

function App() {
    let [ratingValue,setRatingValue]=useState<RatingValueType>(0)
    return (
        <div className={"App"}>
            {/*<OnOff />*/}
            {/*<PageTitle title={"This is APP component"}/>*/}
            {/*<UncontrolledAccordion titleValue={"Menu"}/>*/}
            {/*<UncontrolledAccordion titleValue={"User"}/>*/}

            {/*<Accordion titleValue={"Menu"} collapsed={true}/>*/}
            {/*<Accordion titleValue={"Users"} collapsed={false}/>*/}
            {/*<UncontrolledRating/>*/}
            <Rating value={ratingValue}
                    onClick={setRatingValue}/>

        </div>
    );
}
type PageTitleProps = {
    title:string
}
function PageTitle(props:PageTitleProps) {
    return <h1>{props.title}</h1>
}


export default App;
