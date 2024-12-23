import { ReactNode } from "react"

// Reusing Component (Passing Input parameter in component)
interface Props {
    // TypeScript Concept here we just declared variables did not implemented 
    heading : string
    list : string[]

    // Here Function declared (argumenet and return type of function)
    onSelectItem : (item : string)=> void
  
    // In React There is children prop and ReactNode type (inbuild) for passing Html content
    children : ReactNode // now from App.tsx we can pass Html content
}

// right side is the type left side is the name of variable(prop : Props), opposite of java
// we can use spread operator for better code structure here Props is object.
// props -> {heading, list} : Props 
// after spread operator we dont need to use props.list or props.heading we can directly use
// list and heading
let PropTest = (prop : Props) => {

    // prop.heading = "Akash" -> Props is immutable (based on functional programming principal)    

    return <>
        <h1>{prop.heading}</h1>
        <ul>
            {
            prop.list.map(item => 
            <li onClick={() => prop.onSelectItem(item)} key={item}> {item} </li>)
            }
        </ul>
        {prop.children}
    </>
}

export default PropTest;