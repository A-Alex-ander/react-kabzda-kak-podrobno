import React from "react";

type AccordionProps = {
    titleValue: string
    collapsed: boolean
    onChange: () => void
}

export function Accordion(props: AccordionProps) {
    return (<div>
            <AccordionTitle
                title={props.titleValue}
            onChange={props.onChange}
            />
            {!props.collapsed && <AccordionBody/>}
        </div>
    )
}

type AccordionTitleProps = {
    title: string
    onChange: () => void
}

function AccordionTitle(props: AccordionTitleProps) {
    return <h3 onClick={(event)=>props.onChange()}>{props.title}</h3>
}


function AccordionBody() {
    console.log('AccordionBody rendering')
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>

}