import { useState, useEffect } from 'react';
import Button from './components/Button';
import Banner from './components/Banner';
import Form from './components/Form';
import Footer from './components/Footer';
import Team from './components/Team';
import { IoPersonAddSharp } from "react-icons/io5";
import { v4 as uuidv4 } from 'uuid';
import { RxReset } from "react-icons/rx";

const TEAMS_STORAGE_KEY = 'teams';
const EMPLOYEES_STORAGE_KEY = 'employees';

const defaultTeams = [
  { id: '4b8bc709-8ec5-49ae-80f5-8fed5858d0f7', name: 'Água', color: '#7ca7fe', default: true },
  { id: '8f12a018-fb93-4888-83d4-a29c301076db', name: 'Ar', color: '#83eaec', default: true },
  { id: '6dfabb41-7552-4755-88a3-92c6d1f9cd09', name: 'Digital', color: '#FFBA05', default: true },
  { id: '43946990-3671-4984-9e97-87c4ca38f641', name: 'Fogo', color: '#ff2724', default: true },
  { id: '93fea4ca-3e64-46f6-b66d-e322e37465dc', name: 'Terra', color: '#df8a43', default: true }
];

const defaultEmployees = [
  {
    id: 'a7f81f5d-a972-4e8a-abb4-89d0740ec1a7',
    favorite: false,
    name: 'Bárbara Azevedo',
    position: 'Software Development intern StartDB',
    image: '/images/barbara.jpg',
    team: 'Terra',
    default: true
  },
  {
    "id": "7ad30131-e153-46a0-b363-1df08c28aebf",
    "favorite": false,
    "name": "Eduarda Groehs",
    "position": "Software Development intern StartDB",
    "image": '/images/eduarda.jpg',
    "team": "Terra",
    "default": true
  },
  {
    "id": "b07a007b-7cf2-45e0-9d00-71441e212456",
    "favorite": false,
    "name": "Nicolas Berlato",
    "position": "Software Development intern StartDB",
    "image": '/images/nicolas.jpg',
    "team": "Digital",
    "default": true
  },
  {
    "id": "fe96a35c2-81c7-4063-a086-0d3612466794",
    "favorite": false,
    "name": "Gustavo Silva",
    "position": "Software Development intern StartDB",
    "image": '/images/gustavo.jpg',
    "team": "Água",
    "default": true
  },
  {
    "id": "2e85ee5f-0efd-4e6b-a1dd-e7e2cd284014",
    "favorite": false,
    "name": "Suene Souza",
    "position": "Software Development intern StartDB",
    "image": '/images/suene.jpg',
    "team": "Digital",
    "default": true
  },
  {
    "id": "4045cc05-16dc-49c4-b80e-9e37e6ec0914",
    "favorite": false,
    "name": "Rachel Pizane",
    "position": "Software Development intern StartDB",
    "image": '/images/rachel.jpg',
    "team": "Água",
    "default": true
  },
  {
    "id": "0f7f4e85-6334-46ec-8d8f-7295fc94eb4a",
    "favorite": false,
    "name": "Lucas Miranda",
    "position": "QA intern StartDB",
    "image": '/images/lucas-m.jpg',
    "team": "Ar",
    "default": true
  },
  {
    "id": "3cee410f-86cb-4603-a21f-c8adc1d6c7ee",
    "favorite": false,
    "name": "Danielly Marques",
    "position": "Software Development intern StartDB",
    "image": '/images/dani.jpg',
    "team": "Ar",
    "default": true
  },
  {
    "id": "da15766a-d406-49f5-a237-f0ced5aa56dd",
    "favorite": false,
    "name": "Lucas Azevedo",
    "position": "Data intern StartDB",
    "image": '/images/lucas-a.jpg',
    "team": "Digital",
    "default": true
  },
  {
    "id": "3803d4de-32d2-4ab3-b1cb-03d7b1f932c8",
    "favorite": false,
    "name": "Ana Cagliari",
    "position": "Software Development intern StartDB",
    "image": '/images/ana.jpg',
    "team": "Água",
    "default": true
  },
  {
    "id": "590668fc-e978-4f7f-80be-4e2f024673b6",
    "favorite": false,
    "name": "Gabriela de Castro",
    "position": "Software Development intern StartDB",
    "image": '/images/gabriela.jpg',
    "team": "Água",
    "default": true
  },
  {
    "id": "f61596f1-70ed-492d-9a60-bddb76b5361d",
    "favorite": false,
    "name": "Isadora Morari",
    "position": "Data intern StartDB",
    "image": '/images/isadora.jpg',
    "team": "Digital",
    "default": true
  },
  {
    "id": "de8c1c89-f65a-4b04-92f6-7eb39af2a0df",
    "favorite": false,
    "name": "Laura Ferré",
    "position": "Software Development intern StartDB",
    "image": '/images/laura.jpg',
    "team": "Digital",
    "default": true
  },
  {
    "id": "72cff5e5-b2bd-4c27-aa18-693989446dc9",
    "favorite": false,
    "name": "Bruno Xavier",
    "position": "RPA intern StartDB",
    "image": '/images/bruno.jpg',
    "team": "Digital",
    "default": true
  },
  {
    "id": "cdbbcd37-27e0-44a3-85a8-e46b1095c8f2",
    "favorite": false,
    "name": "Sylvia Vitória",
    "position": "Software Development intern StartDB",
    "image": '/images/sylvia.jpg',
    "team": "Ar",
    "default": true
  },
  {
    "id": "20d14525-54ab-474f-ae47-10659c898454",
    "favorite": false,
    "name": "Vitória de Camargo",
    "position": "QA intern StartDB",
    "image": '/images/vitoria.jpg',
    "team": "Fogo",
    "default": true
  },
  {
    "id": "72e9cc1a-ffd3-441d-82da-28061b12ae3f",
    "favorite": false,
    "name": "Glauber Araújo",
    "position": "SRE intern StartDB",
    "image": '/images/glauber.jpg',
    "team": "Digital",
    "default": true
  }
];

function App() {
  const [showForm, setShowForm] = useState(false);

  const [teams, setTeams] = useState(() => {
    const saved = localStorage.getItem(TEAMS_STORAGE_KEY);
    return saved ? JSON.parse(saved) : defaultTeams;
  });

  const [employees, setEmployees] = useState(() => {
    const saved = localStorage.getItem(EMPLOYEES_STORAGE_KEY);
    return saved ? JSON.parse(saved) : defaultEmployees;
  });

  useEffect(() => {
    localStorage.setItem(TEAMS_STORAGE_KEY, JSON.stringify(teams));
  }, [teams]);

  useEffect(() => {
    localStorage.setItem(EMPLOYEES_STORAGE_KEY, JSON.stringify(employees));
  }, [employees]);

  function deletingEmployee(id) {
    setEmployees(current => current.filter(emp => emp.id !== id));
  }

  function toTheNewEmployeeAdded(employee) {
    if (!employee.name || !employee.team) {
      console.error("Dados incompletos:", employee);
      return;
    }
    const newEmployee = { ...employee, id: uuidv4(), favorite: false };
    setEmployees(current => [...current, newEmployee]);
  }

  function changeColorTeam(color, id) {
    setTeams(current => current.map(team => team.id === id ? { ...team, color } : team));
  }

  function favoriteEmployee(id) {
    setEmployees(current => current.map(emp => emp.id === id ? { ...emp, favorite: !emp.favorite } : emp));
  }

  function registerTeam(newTeam) {
    if (!newTeam.name || !newTeam.color) {
      console.error("Dados incompletos do time:", newTeam);
      return;
    }
    const teamWithId = { ...newTeam, id: uuidv4() };
    setTeams(current => [...current, teamWithId]);
  }

  function deletingTeam(id) {
    const teamName = teams.find(t => t.id === id)?.name;
    if (!teamName) return;

    setTeams(currentTeams => currentTeams.filter(team => team.id !== id));
    setEmployees(currentEmployees => currentEmployees.filter(emp => emp.team !== teamName));
  }

  function resetData() {
    setTeams(defaultTeams);
    setEmployees(defaultEmployees);
  }

  return (
    <div className="App">
      <Banner />
      <div style={{ display: 'flex', justifyContent: 'center', gap: '12px' }}>
      <Button onClick={() => setShowForm(!showForm)}>
        {showForm
          ? 'Hide Form'
          : (<div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <IoPersonAddSharp color='white' />
            <span>Add Employee/Team</span>
          </div>)
        }
      </Button>
      <Button onClick={resetData} style={{ backgroundColor: '#6278f7' }}>
        <RxReset color='white' />
        Resetar Dados
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
        {teams.map(team =>
          <Team
            whenfavorited={favoriteEmployee}
            changeColor={changeColorTeam}
            key={team.id}
            team={team}
            employees={employees.filter(employee => employee.team === team.name)}
            whenDeleting={deletingEmployee}
            whenDeletingTeam={deletingTeam}
          />
        )}
      </section>
      <Footer />
    </div>
  );
}

export default App;