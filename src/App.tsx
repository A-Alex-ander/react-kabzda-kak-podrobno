import React from 'react';
import './App.css';
import {Rating} from "./components/Reting/Rating";
import {Accordion} from "./components/Accordion/Accodion";
import {OnOff} from "./components/OnOff/OnOff";
import {UncontrolledAccordion} from "./components/Accordion/UncontrolledAccodion";

function App() {
    return (
        <div className={"App"}>
            <OnOff />
            <PageTitle title={"This is APP component"}/>
            <UncontrolledAccordion titleValue={"Menu"}/>
            <UncontrolledAccordion titleValue={"User"}/>

            {/*<Accordion titleValue={"Menu"} collapsed={true}/>*/}
            {/*<Accordion titleValue={"Users"} collapsed={false}/>*/}
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>

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
