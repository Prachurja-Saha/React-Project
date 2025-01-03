
// Adjust the path to App.css based on your folder structure
import '../../App.css'


// React is JS library

// This is function component. We used .tsx for component
// Message : Pascal case convention
function Message(){

    const name = "Prachurja Saha"

    // Jsx code (JavaScript XML code)
    return  <div>
                <h1 className="container">Message Component</h1>
                <p> Hello {name}, Welcome!!</p>
            </div>
}

// Now this can be used Outside anywhere
export default Message;

/*
   here App component is the root and Message component is the child (like a component tree),
   
   Virtual DOM
   when Application starts React takes the component tree( App component is the root
    node and other are child node) and builds a tree using JS object
   structure called Virtual DOM. This Virtual DOM is different from actual DOM.
   Virtual DOM is the lightweight, inmemory representation of actual DOM.
   It is implements using JS objects, improves performance by minimizing direct manipulation
   of DOM.
   How Updates Work: when changes occur(eg: updating UI components), React updates the virtual
   DOM first. It then calculates the difference b/w the previous and updated virtual DOM.
   Only the change part are updated in the real DOM, reducing the nuumber of direct DOM 
   operations (which are expensive) --> Very Important usage of REACT
   React updates DOM using process called reconciliation
   React DOM library(u can see in dependency) updates the actual DOM (not sure)
   
   Virtual DOM is entirely separate from the actual browser DOM. changed are efficiently 
   batched and applied to the real DOM only when necessary

   React Native : Just like React DOM, React Native is a library used for building mobile application
   Here we are not using this

*/