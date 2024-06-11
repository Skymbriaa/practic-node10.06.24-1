import "./App.css";
import Ciao from "./components/Ciao";


function App() {
  return (
    <>
    <Ciao name='Fred' age={54} isMale={true}/>
    <Ciao name='Bob' age={45} isMale={true}/>
    <Ciao name='Ola' age={44} isMale={false}/>
    </>
  );
}

export default App;
