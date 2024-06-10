import './App.css';
import Button from './components/Button';
import Heading from './components/Heading';

function App() {
  return (
    <>
    <Heading />
    <Button content='new button content' number='12'/>
    <Button content='new 1 button content'/>
    <Button content='new 2 button content'/>
    </>
  );
}

export default App;
