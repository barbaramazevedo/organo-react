import Banner from './components/Banner';
import Form from './components/Form';
import { useState } from 'react';

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
    </div>
  );
}

export default App;
