import React, {useState} from 'react';
import './App.css';
import {Rating, RatingValueType} from "./components/Reting/Rating";
import {Accordion} from "./components/Accordion/Accodion";
import {UncontrolledAccordion} from "./components/Accordion/UncontrolledAccodion";
import {UncontrolledOnOff} from "./components/OnOff/UncontroledOnOff";
import {OnOff} from "./components/OnOff/OnOff";

function App() {
    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    let [switchOn, setSwitchOn] = useState<boolean>(false)
    return (
        <div className={"App"}>
            {/*<Accordion*/}
            {/*    titleValue={"Menu"}*/}
            {/*    collapsed={accordionCollapsed}*/}
            {/*    onChange={() => {*/}
            {/*        setAccordionCollapsed(!accordionCollapsed)*/}
            {/*    }}*/}
            {/*/>*/}
            <OnOff on={switchOn} onChange={setSwitchOn}/>

            <Rating value={ratingValue}
                    onClick={setRatingValue}
            />
            <UncontrolledAccordion titleValue={"Menu"}/>
            <UncontrolledOnOff onChange={setSwitchOn}/> {switchOn.toString()}

            {/*<PageTitle title={"This is APP component"}/>*/}
            {/*<UncontrolledAccordion titleValue={"Menu"}/>*/}

            {/*<UncontrolledAccordion titleValue={"User"}/>*/}
            <Accordion
                titleValue={"Menu"}
                collapsed={accordionCollapsed}
                onChange={()=>{setAccordionCollapsed(!accordionCollapsed)}}
            />
            {/*<Accordion titleValue={"Users"} collapsed={false}/>*/}
            {/*<UncontrolledRating/>*/}
        </div>
    )
}


type PageTitleProps = {
    title: string
}

function PageTitle(props: PageTitleProps) {
    return <h1>{props.title}</h1>
}


export default App;
