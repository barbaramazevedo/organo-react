import Banner from './components/Banner';
import Form from './components/Form';
import Footer from './components/Footer';
import { useState } from 'react';
import Team from './components/Team';

function App() {

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

  const initial = [
    {
      name: 'Bárbara Azevedo',
      position: 'Software Development intern StartDB',
      image: 'https://avatars.githubusercontent.com/u/173216654?v=4',
      team: teams[4].name
    },
    {
      name: 'Eduarda Groehs',
      position: 'Software Development intern StartDB',
      image: 'https://avatars.githubusercontent.com/u/122320700?v=4',
      team: teams[4].name
    },
    {
      name: 'Vitória de Camargo',
      position: 'QA intern StartDB',
      image: 'https://avatars.githubusercontent.com/u/147994680?v=4',
      team: teams[3].name
    },
    {
      name: 'Nicolas Berlato',
      position: 'Software Development intern StartDB',
      image: 'https://pbs.twimg.com/profile_images/1369810664919867396/P-_LKrnL_400x400.jpg',
      team: teams[2].name
    },
    {
      name: 'Gustavo Silva',
      position: 'Software Development intern StartDB',
      image: 'https://avatars.githubusercontent.com/u/169389502?v=4',
      team: teams[0].name
    },
    {
      name: 'Suene Souza',
      position: 'Software Development intern StartDB',
      image: 'https://avatars.githubusercontent.com/u/129241083?v=4',
      team: teams[2].name
    },
    {
      name: 'Rachel Pizane',
      position: 'Software Development intern StartDB',
      image: 'https://avatars.githubusercontent.com/u/150784556?v=4',
      team: teams[0].name
    },
    {
      name: 'Lucas Miranda',
      position: 'QA intern StartDB',
      image: 'https://avatars.githubusercontent.com/u/150044701?v=4',
      team: teams[1].name
    },
    {
      name: 'Dannyelle Marques',
      position: 'Software Development intern StartDB',
      image: 'https://avatars.githubusercontent.com/u/147952313?v=4',
      team: teams[1].name
    },
    {
      name: 'Lucas Azevedo',
      position: 'Data intern StartDB',
      image: 'https://avatars.githubusercontent.com/u/134238534?v=4',
      team: teams[2].name
    },
    {
      name: 'Ana Cagliari',
      position: 'Software Development intern StartDB',
      image: 'https://avatars.githubusercontent.com/u/111251330?v=4',
      team: teams[0].name
    },
    {
      name: 'Gabriela de Castro',
      position: 'Software Development intern StartDB',
      image: 'https://avatars.githubusercontent.com/u/169320236?v=4',
      team: teams[0].name
    },
    {
      name: 'Sylvia Vitória',
      position: 'Software Development intern StartDB',
      image: 'https://avatars.githubusercontent.com/u/126926732?v=4',
      team: teams[1].name
    },
    {
      name: 'Isadora Morari',
      position: 'Data intern StartDB',
      image: 'https://media.licdn.com/dms/image/v2/D4D03AQGKkDwJ-hLEiA/profile-displayphoto-shrink_800_800/B4DZXseJz_HkAk-/0/1743429083787?e=1752105600&v=beta&t=RDfhXVjes-uvFJkQqYZXCq630cSC6znW4YVw321e504',
      team: teams[2].name
    },
    {
      name: 'Glauber Araújo',
      position: 'SRE intern StartDB',
      image: 'https://media.licdn.com/dms/image/v2/C4D03AQHP0jIQ_YRFmA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1661382543514?e=1752105600&v=beta&t=XvIF1eHLYDQZAETzDt2TtdZCqQF3uwPGoQizuGxjWmA',
      team: teams[2].name
    },
    {
      name: 'Laura Ferré',
      position: 'Software Development intern StartDB',
      image: 'https://media.licdn.com/dms/image/v2/D4D03AQEb24xWO5Xc_w/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1691065317322?e=1752105600&v=beta&t=Pxv1-sZkU0ZRidw2X5ngQcCIAnOKmxEYMwRgBRNtFAo',
      team: teams[2].name
    },
    {
      name: 'Bruno Xavier',
      position: 'RPA intern StartDB',
      image: 'https://media.licdn.com/dms/image/v2/C4D03AQEnXF59hATHjg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1652049958947?e=1752105600&v=beta&t=JQUDPc-6somCiy1b5xtTfdrEoZsbm_0LNFrcJ3SqM94',
      team: teams[2].name
    }
  ]

  const [employees, setEmployees] = useState(initial);

  function deletingEmployee(name) {
    setEmployees(employees.filter(employee => employee.name !== name));
  }

  const toTheNewEmployeeAdded = (employee) => {
    setEmployees([...employees, employee]);
  }

  return (
    <div className="App">
      <Banner />
      <Form 
        teams={teams.map(team => team.name)}
        toTheNewEmployeeAdded = {toTheNewEmployeeAdded}/>
        <section>
          {teams.map((team, ind) => 
            <Team 
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
