import {action} from "@storybook/addon-actions"

import {Accordion} from './Accodion';
import React, {useState} from "react";

export default {
    component: Accordion,
};



const onChangeHandler = action("onChange")
const callback = action("on or of clicked")
export const CollapsedAccordion = ()=>{
    return <Accordion
        titleValue={"Collapsed Accordion"}
        collapsed={true}
        onChange={onChangeHandler}
    />
}

export const OpenAccordion = ()=>{
    return <Accordion
        titleValue={"Open Accordion"}
        collapsed={false}
        onChange={onChangeHandler}
    />
}


export const AccordionDemo = ()=>{
    const [collapsed,setCollapsed]=useState(true)
    return <Accordion
        titleValue={" Accordion"}
        collapsed={collapsed}
        onChange={()=>{setCollapsed(!collapsed)}}
    />
}

