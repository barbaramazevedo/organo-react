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

  const teams = [
    {
      name: 'Água',
      primaryColor: '#82CFFA',
      secondaryColor: '#E8F8FF'
    },
    {
      name: 'Ar',
      primaryColor: '#57C278',
      secondaryColor: '#D9F7E9'
    },
    {
      name: 'Digital',
      primaryColor: '#FFBA05',
      secondaryColor: '#FFF5D9'
    },
    {
      name: 'Fogo',
      primaryColor: '#E06B69',
      secondaryColor: '#FDE7E8'
    },
    {
      name: 'Terra',
      primaryColor: '#FF8A29',
      secondaryColor: '#FFEEDF'
    }
  ]

  return (
    <div className="App">
      <Banner />
      <Form 
        teamsName={teams.map(team => team.name)}
        toTheNewEmployeeAdded={toTheNewEmployeeAdded}/>

        {teams.map(team => <Team 
          key={team.name} 
          name={team.name} 
          primaryColor={team.primaryColor}
          secondaryColor={team.secondaryColor}
          employees={employees.filter(employee => employee.team === team.name)}
        />)}
    </div>
  );
}

export default App;
