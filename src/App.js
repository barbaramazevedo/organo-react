import Banner from './components/Banner';
import Form from './components/Form';
import { useState } from 'react';
import Team from './components/Team';

function App() {

  const [employees, setEmployees] = useState([]);

  const toTheNewEmployeeAdded = (employee) => {
    console.log(employee);
    setEmployees([...employees, employee]);
  }

  return (
    <div className="App">
      <Banner />
      <Form toTheNewEmployeeAdded={toTheNewEmployeeAdded => setEmployees}/>
      <Team name="Água"/>
      <Team name="Ar"/>
      <Team name="Digital"/>
      <Team name="Fogo"/>
      <Team name="Terra"/>
    </div>
  );
}

export default App;
