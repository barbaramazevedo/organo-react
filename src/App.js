import Banner from './components/Banner';
import Form from './components/Form';
import Footer from './components/Footer';
import Team from './components/Team';
import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [teams, setTeams] = useState ([
    {
      id: uuidv4(),
      name: 'Água',
      color: '#82CFFA',
    },
    {
      id: uuidv4(),
      name: 'Ar',
      color: '#57C278',
    },
    {
      id: uuidv4(),
      name: 'Digital',
      color: '#FFBA05',
    },
    {
      id: uuidv4(),
      name: 'Fogo',
      color: '#E06B69',
    },
    {
      id: uuidv4(),
      name: 'Terra',
      color: '#FF8A29',
    }
  ])

  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const initialEmployees = [
      {
        favorite: false,
        id: uuidv4(),
        name: 'Bárbara Azevedo',
        position: 'Software Development intern StartDB',
        image: 'https://avatars.githubusercontent.com/u/173216654?v=4',
        team: teams[4].name
      },
      {
        favorite: false,
        id: uuidv4(),
        name: 'Eduarda Groehs',
        position: 'Software Development intern StartDB',
        image: 'https://avatars.githubusercontent.com/u/122320700?v=4',
        team: teams[4].name
      },
      {
        favorite: false,
        id: uuidv4(),
        name: 'Vitória de Camargo',
        position: 'QA intern StartDB',
        image: 'https://avatars.githubusercontent.com/u/147994680?v=4',
        team: teams[3].name
      },
      {
        favorite: false,
        id: uuidv4(),
        name: 'Nicolas Berlato',
        position: 'Software Development intern StartDB',
        image: 'https://pbs.twimg.com/profile_images/1369810664919867396/P-_LKrnL_400x400.jpg',
        team: teams[2].name
      },
      {
        favorite: false,
        id: uuidv4(),
        name: 'Gustavo Silva',
        position: 'Software Development intern StartDB',
        image: 'https://avatars.githubusercontent.com/u/169389502?v=4',
        team: teams[0].name
      },
      {
        favorite: false,
        id: uuidv4(),
        name: 'Suene Souza',
        position: 'Software Development intern StartDB',
        image: 'https://avatars.githubusercontent.com/u/129241083?v=4',
        team: teams[2].name
      },
      {
        favorite: false,
        id: uuidv4(),
        name: 'Rachel Pizane',
        position: 'Software Development intern StartDB',
        image: 'https://avatars.githubusercontent.com/u/150784556?v=4',
        team: teams[0].name
      },
      {
        favorite: false,
        id: uuidv4(),
        name: 'Lucas Miranda',
        position: 'QA intern StartDB',
        image: 'https://avatars.githubusercontent.com/u/150044701?v=4',
        team: teams[1].name
      },
      {
        favorite: false,
        id: uuidv4(),
        name: 'Danielly Marques',
        position: 'Software Development intern StartDB',
        image: 'https://avatars.githubusercontent.com/u/147952313?v=4',
        team: teams[1].name
      },
      {
        favorite: false,
        id: uuidv4(),
        name: 'Lucas Azevedo',
        position: 'Data intern StartDB',
        image: 'https://avatars.githubusercontent.com/u/134238534?v=4',
        team: teams[2].name
      },
      {
        favorite: false,
        id: uuidv4(),
        name: 'Ana Cagliari',
        position: 'Software Development intern StartDB',
        image: 'https://avatars.githubusercontent.com/u/111251330?v=4',
        team: teams[0].name
      },
      {
        favorite: false,
        id: uuidv4(),
        name: 'Gabriela de Castro',
        position: 'Software Development intern StartDB',
        image: 'https://avatars.githubusercontent.com/u/169320236?v=4',
        team: teams[0].name
      },
      {
        favorite: false,
        id: uuidv4(),
        name: 'Sylvia Vitória',
        position: 'Software Development intern StartDB',
        image: 'https://avatars.githubusercontent.com/u/126926732?v=4',
        team: teams[1].name
      },
      {
        favorite: false,
        id: uuidv4(),
        name: 'Isadora Morari',
        position: 'Data intern StartDB',
        image: 'https://media.licdn.com/dms/image/v2/D4D03AQGKkDwJ-hLEiA/profile-displayphoto-shrink_800_800/B4DZXseJz_HkAk-/0/1743429083787?e=1752105600&v=beta&t=RDfhXVjes-uvFJkQqYZXCq630cSC6znW4YVw321e504',
        team: teams[2].name
      },
      {
        favorite: false,
        id: uuidv4(),
        name: 'Glauber Araújo',
        position: 'SRE intern StartDB',
        image: 'https://media.licdn.com/dms/image/v2/C4D03AQHP0jIQ_YRFmA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1661382543514?e=1752105600&v=beta&t=XvIF1eHLYDQZAETzDt2TtdZCqQF3uwPGoQizuGxjWmA',
        team: teams[2].name
      },
      {
        favorite: false,
        id: uuidv4(),
        name: 'Laura Ferré',
        position: 'Software Development intern StartDB',
        image: 'https://media.licdn.com/dms/image/v2/D4D03AQEb24xWO5Xc_w/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1691065317322?e=1752105600&v=beta&t=Pxv1-sZkU0ZRidw2X5ngQcCIAnOKmxEYMwRgBRNtFAo',
        team: teams[2].name
      },
      {
        favorite: false,
        id: uuidv4(),
        name: 'Bruno Xavier',
        position: 'RPA intern StartDB',
        image: 'https://media.licdn.com/dms/image/v2/C4D03AQEnXF59hATHjg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1652049958947?e=1752105600&v=beta&t=JQUDPc-6somCiy1b5xtTfdrEoZsbm_0LNFrcJ3SqM94',
        team: teams[2].name
      }
    ];
    setEmployees(initialEmployees);
  }, []);

  function deletingEmployee(id) {
    setEmployees(employees.filter(employee => employee.id !== id))
  }

  const toTheNewEmployeeAdded = (employee) => {
    setEmployees([...employees, { ...employee, id: uuidv4() }]);
  }

  function changeColorTeam(color, id) {
    setTeams(teams.map(team => {
      if(team.id === id) {
        team.color = color;
      }
      return team;
    }));
  }

  function registerTeam(newTeam) {
    setTeams([...teams, { ...newTeam, id: uuidv4() }]);
}

  function favoriteEmployee(id) {
    setEmployees(employees.map(employee => {
      if (employee.id === id) {
        employee.favorite = !employee.favorite;
      }
      return employee;
    }))
  }
  return (
    <div className="App">
      <Banner />
      <Form 
        whenCreatingTeam={registerTeam}
        teams={teams.map(team => team.name)}
        toTheNewEmployeeAdded = {toTheNewEmployeeAdded}
      />
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
