import { useState } from "react";

// Each component has their own state. useState function is also called hook 
// State is mutable, Props is immutable 
// (any time props and state change React will update DOM)
let NewList = () => {

    let fruits = ["Apple", "Orange", "Jackfruit"];

    // useState is React function returns array of 2 elements one is variable name 
    // and other is function name where we can change/modify variables
    // useState(-1) = for number modification, useState('') => String modification
    // Here below we are using array spread operator  
    const [selectedItemIndex, setSelectedItemIndex] = useState(-1); // here we have to
    // provide argument

    return <>
        <br />
        <p> Checking Use state Concept </p>
        <ol className="list-group">
            {
                // Dynamic class name (changing class name based on the condition)
                fruits.map((item, index) =>
                    <li
                        // list-group-item active : BootStrap inbuild Class, whenever selected it will highlight
                        // here we are checking current index is equal to selected index or not based on every click
                        // we are changing selected index so it will highlight that item which is selected 
                        className={index === selectedItemIndex ? "list-group-item active" : "list-group-item"}
                        // when clicked we are changing the index using setSelectedItemIndex method 
                        onClick={() => setSelectedItemIndex(index)}
                        key={item}
                    >
                        {
                            item
                        }
                    </li>)
            }
        </ol>

    </>;
}

export default NewList;