import {action} from "@storybook/addon-actions"
import {Accordion} from './Accodion';
import React, {useState} from "react";

export default {
    component: Accordion,
};




const onChangeHandler = action("onChange")
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
        onChange={()=>{}}
    />
}


export const AccordionDemo = ()=>{
    const [collapsed,setCollapsed]=useState(false)
    return <Accordion
        titleValue={" Accordion"}
        collapsed={collapsed}
        onChange={()=>{setCollapsed(!collapsed)}}
    />
}