import { Fragment } from "react/jsx-runtime"; // Fragments is empty tag
import { MouseEvent } from "react";

let ListGroup = () => {

    // rendering list 
    let locations = ["Japan", "Swizerland", "America", "Jamaica"];

    // conditional operation
    if (locations.length>=10){
        return <>more than 10 elements</>
    }

    // handling event. Here we are using type script concept. Using event : Type 
    // Here Type is the Type of Object provided of event [Event Handler]
    let handleClicked = (event : MouseEvent) => console.log(event.target);

    // <h1>In React component cannot have more than one element<h1>
    // Here React will return : React.createElement('h1');
    // do avoid additional element(here it is div) we can use fragment now we can remove div
    // we can provide empty tag which also means fragment tag react will understand <>.. </>
    return <Fragment>
        <h1>Hi..</h1>
        <ul className="list-group">
                                             
            <li className="list-group-item" onClick={
                // Event Handler, here e(optional) -> browser event name Synthetic Based 
                // Event Classes(built in classes of react
                // b/c different browser have their different impl of event object)
                (e)=> console.log("Clicked" + e)
                }>
                    An item</li>
            {   
                // dynamic code (ternary operator)
                locations.length<=5? 
                <p> <br /> less than or equal to 5 element </p> : <p> more than 5 element </p>
            }
            {
                // here react will warn b/c i did not provide key properties, we have to
                // provide key prop, React needs to track this so later we can perform 
                // dynamic operations using that key (here key and value is same element)
                locations.map((item, index) =>
                    <li onClick={handleClicked} className="list-group-item" key={item}>{item}</li>
                )
            }
        </ul>
    </Fragment>
};

export default ListGroup;
