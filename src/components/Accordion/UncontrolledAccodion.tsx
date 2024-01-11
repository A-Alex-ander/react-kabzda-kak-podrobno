import React, {useState} from "react";

type AccordionProps = {
    titleValue: string
}

export function UncontrolledAccordion(props: AccordionProps) {
    let [collapsed, setCollapsed] = useState(false)

    return (<div>
            <AccordionTitle
                title={props.titleValue}
                onClick={() => {
                    setCollapsed(!collapsed)
                }}
            />
            {!collapsed && <AccordionBody/>}
        </div>
    )
}

type AccordionTitleProps = {
    title: string
    onClick: () => void
}

function AccordionTitle(props: AccordionTitleProps) {
    return <h3 onClick={()=>props.onClick()}>{props.title}
    </h3>
}

function AccordionBody() {
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>

}