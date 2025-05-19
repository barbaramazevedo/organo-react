import { useState, useEffect } from 'react';
import Button from './components/Button';
import Banner from './components/Banner';
import Form from './components/Form';
import Footer from './components/Footer';
import Team from './components/Team';
import { IoPersonAddSharp } from "react-icons/io5";
import { v4 as uuidv4 } from 'uuid';
import { database, ref, onValue, set, remove } from "./firebase.js";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [teams, setTeams] = useState([]);
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    console.log("Ambiente:", process.env.NODE_ENV);
    
    const teamsRef = ref(database, 'teams');
    onValue(teamsRef, (snapshot) => {
      const data = snapshot.val();
      console.log("Dados de teams:", data); // Debug
      setTeams(data ? Object.values(data) : []);
    });

    const employeesRef = ref(database, 'employees');
    onValue(employeesRef, (snapshot) => {
      const data = snapshot.val();
      console.log("Dados de employees:", data); // Debug
      setEmployees(data ? Object.values(data) : []);
    });
  }, []);

  function deletingEmployee(id) {
    if (process.env.NODE_ENV === 'production') {
      if (!id || typeof id !== 'string') {
        console.error("Tentativa de deletar com ID inválido");
        return;
      }
    }
    const employeeRef = ref(database, `employees/${id}`);
    remove(employeeRef).then(() => {
      setEmployees(employees.filter(emp => emp.id !== id));
    });
  }

  function toTheNewEmployeeAdded(employee) {
    if (process.env.NODE_ENV === 'production') {
      if (!employee.name || !employee.team) {
        console.error("Dados incompletos:", employee);
        return;
      }
    }
    const newEmployee = { ...employee, id: uuidv4(), favorite: false };
    const employeeRef = ref(database, `employees/${newEmployee.id}`);
    set(employeeRef, newEmployee).then(() => {
      setEmployees([...employees, newEmployee]);
    });
  }

  function changeColorTeam(color, id) {
    const teamRef = ref(database, `teams/${id}/color`);
    set(teamRef, color).then(() => {
      setTeams(teams.map(team => team.id === id ? { ...team, color } : team));
    });
  }

  function favoriteEmployee(id) {
    const isFavorite = !employees.find(e => e.id === id).favorite;
    const employeeRef = ref(database, `employees/${id}/favorite`);
    set(employeeRef, isFavorite).then(() => {
      setEmployees(employees.map(emp => 
        emp.id === id ? { ...emp, favorite: isFavorite } : emp
      ));
    });
  }

  function registerTeam(newTeam) {
    const teamWithId = { ...newTeam, id: uuidv4() };
    const teamRef = ref(database, `teams/${teamWithId.id}`);
    set(teamRef, teamWithId).then(() => {
      setTeams([...teams, teamWithId]);
    });
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