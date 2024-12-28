import ButtonTest from "./components/Button";
import FormHandler from "./components/FormHandling";
import ListGroup from "./components/ListGroup"
import Message from "./components/Message"
import AlertButton from "./components/practice/AlertButton";
import BlockTest from "./components/practice/block";
import Calculator from "./components/practice/usestate&props/Calculator";
import ColourInput from "./components/practice/usestate&props/ColourInput";
import Colour from "./components/practice/usestate&props/ColourInput";
import PropTest from "./components/Props";
import NewList from "./components/UseState"

const users = [ 
   { id: 1, name: "Alice", jobTitle: "Engineer", profilePicture: "https://via.placeholder.com/150/0000FF/808080?Text=User1" }, 
   { id: 2, name: "Bob", jobTitle: "Designer", profilePicture: "https://via.placeholder.com/150/FF0000/FFFFFF?Text=User2" },
   { id: 3, name: "Charlie", jobTitle: "Product Manager", profilePicture: "https://via.placeholder.com/150/00FF00/000000?Text=User3" }, 
   { id: 4, name: "Dana", jobTitle: "Data Scientist", profilePicture: "https://via.placeholder.com/150/FFFF00/000000?Text=User4" }, 
   { id: 5, name: "Eve", jobTitle: "DevOps Engineer", profilePicture: "https://via.placeholder.com/150/FF00FF/FFFFFF?Text=User5" }, 
   { id: 6, name: "Frank", jobTitle: "QA Tester", profilePicture: "https://via.placeholder.com/150/000000/FFFFFF?Text=User6" }, 
  //  { id: 7, name: "Grace", jobTitle: "HR Specialist", profilePicture: "https://via.placeholder.com/150/FFFFFF/000000?Text=User7" }, 
  //  { id: 8, name: "Henry", jobTitle: "Software Architect", profilePicture: "https://via.placeholder.com/150/00FFFF/000000?Text=User8" }, 
  //  { id: 9, name: "Ivy", jobTitle: "Marketing Manager", profilePicture: "https://via.placeholder.com/150/800080/FFFFFF?Text=User9" }, 
  //  { id: 10, name: "Jack", jobTitle: "Finance Analyst", profilePicture: "https://via.placeholder.com/150/FFC0CB/000000?Text=User10"}
];

// App component 
function App() {

  let cities = ["Tokyo", "Nirobi", "Mumbai"];
  let heading = "Testing Props";

  // this function implementation will pass by onSelectItem to PropTest 
  const handleSelectItem = (item: string) => {
    console.log(item);
  }

  return <div>
    <Message></Message>
    <ListGroup />
    <NewList />

    {/* Here in PropTest we are passing aruguments in which one call back function is also there */}
    <PropTest heading={heading} list={cities} onSelectItem={handleSelectItem}>
      This is children property <span> passing html tag</span>
    </PropTest>

    <br/>
    <ButtonTest className="primary"> Primary </ButtonTest>
    <ButtonTest className="secondary"> Secondary </ButtonTest>
    <ButtonTest className="success"> Success </ButtonTest>
    <ButtonTest className="danger"> Danger </ButtonTest>
    <ButtonTest className="warning"> Warning </ButtonTest>
    <ButtonTest className="info"> Info </ButtonTest>

    <br/>
    <AlertButton/>

    <br/>
    <ColourInput/>

    <br/>
    <Calculator/>

    <br/>
    <FormHandler/>

    <br/>
    <BlockTest userList = {users} />

  </div>
}

export default App

// vite always update/track and refresh web page when ever there is changes