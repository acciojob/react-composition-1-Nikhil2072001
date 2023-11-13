import { divide } from "cypress/types/lodash";
import React, {useState} from "react";

const Tabs = (tabProp) =>{
    const [tab,setTab] = useState(tabProp[0].content);
    return (
        <div>
            <ul>
              {  tabProp.map((e) => (
                <li onClick={setTab(e.content)}>{e.title}</li>
                ))}
            </ul>
            <p>{tab}</p>
        </div>
    )
}
export default Tabs