import ButtonTest from "./components/Button";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup"
import Message from "./components/Message"
import AlertButton from "./components/practice/AlertButton";
import PropTest from "./components/Props";
import NewList from "./components/UseState"

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
  </div>
}

export default App

// vite always update/track and refresh web page when ever there is changes