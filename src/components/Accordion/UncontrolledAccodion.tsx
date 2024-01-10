import React, {useState} from "react";

type AccordionProps = {
    titleValue: string
}

export function UncontrolledAccordion(props: AccordionProps) {
    let [collapsed, setCollapsed] = useState(false)
    const collapsedStatus = (collapsed: boolean) => {
        setCollapsed(!collapsed)
    }
    return (<div>
            <AccordionTitle
                title={props.titleValue}
                collapsedStatus={collapsedStatus}
            />
            {!collapsed && <AccordionBody/>}
        </div>
    )
}

type AccordionTitleProps = {
    title: string
    collapsedStatus: (collapsed: boolean) => void
}

function AccordionTitle(props: AccordionTitleProps) {
    const buttonOnClickHandler = ()=>{
        props.collapsedStatus(false)
    }
    return <button onClick={buttonOnClickHandler}>{props.title}
    </button>
}

function AccordionBody() {
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>

}