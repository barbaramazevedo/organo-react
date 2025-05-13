import { useState, useEffect } from 'react';
import Button from './components/Button';
import Banner from './components/Banner';
import Form from './components/Form';
import Footer from './components/Footer';
import Team from './components/Team';
import { IoPersonAddSharp } from "react-icons/io5";
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [showForm, setShowForm] = useState(false);
  const [teams, setTeams] = useState([]);
  const [employees, setEmployees] = useState([]);

useEffect(() => {
  fetch('http://localhost:3001/teams')
    .then(res => res.json())
    .then(data => setTeams(data.map(team => ({
      ...team,
      id: team.id || uuidv4() 
    }))));

  fetch('http://localhost:3001/employees')
    .then(res => res.json())
    .then(data => setEmployees(data.map(employee => ({
      ...employee,
      id: employee.id || uuidv4(),
      team: employee.team || '' 
    }))));
}, []);

   function deletingEmployee(id) {
    fetch(`http://localhost:3001/employees/${id}`, { method: 'DELETE' })
      .then(() => setEmployees(employees.filter(employee => employee.id !== id)));
  }

   function toTheNewEmployeeAdded(employee) {
    const newEmployee = { ...employee, id: uuidv4(), favorite: false };
    fetch('http://localhost:3001/employees', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newEmployee)
    }).then(() => setEmployees([...employees, newEmployee]));
  }

  function changeColorTeam(color, id) {
    fetch(`http://localhost:3001/teams/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ color })
    }).then(() => {
      setTeams(teams.map(team => team.id === id ? { ...team, color } : team));
    });
  }

   function registerTeam(newTeam) {
    const teamWithId = { ...newTeam, id: uuidv4() };
    fetch('http://localhost:3001/teams', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(teamWithId)
    }).then(() => setTeams([...teams, teamWithId]));
  }

  function favoriteEmployee(id) {
    const updatedEmployees = employees.map(employee => 
      employee.id === id ? { ...employee, favorite: !employee.favorite } : employee
    );
    fetch(`http://localhost:3001/employees/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ favorite: !employees.find(e => e.id === id).favorite })
    }).then(() => setEmployees(updatedEmployees));
  }

  return (
    <div className="App">
      <Banner />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Button onClick={() => setShowForm(!showForm)}>
          {showForm 
            ? 'Hide Form' 
            : (<div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <IoPersonAddSharp color='white' />
              <span>Add Employee/Team</span>
            </div>)
          }
        </Button>
      </div>
      {showForm && (
        <Form 
          whenCreatingTeam={registerTeam}
          teams={teams.map(team => team.name)}
          toTheNewEmployeeAdded={toTheNewEmployeeAdded}
        />
      )}
      
       <section>
        {teams.map((team, ind) => 
          <Team
            whenfavorited={favoriteEmployee}
            changeColor={changeColorTeam}
            key={ind}
            team={team}
            employees={employees.filter(employee => employee.team === team.name)}
            whenDeleting={deletingEmployee}
          />
        )}
      </section> 
      
      <Footer />
    </div>
  );
}

export default App;