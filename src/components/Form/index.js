import './Form.css';
import Field from '../Field';
import DropDown from '../DropDown';
import Button from '../Button';
import React, { useState } from 'react';

const Form = ({ toTheNewEmployeeAdded, teams, whenCreatingTeam }) => {

    const[name, setName] = useState('');
    const[position, setPosition] = useState('');
    const[image, setImage] = useState('');
    const[team, setTeam] = useState('');
    const[teamName, setTeamName] = useState('');
    const[teamColor, setTeamColor] = useState('');
    
    const whenSave = (event) => {  
        event.preventDefault();
        if (!name || !position || !team) {
            alert('Please, fill in all required fields');
            return;
        }
        toTheNewEmployeeAdded({
            name,
            position,
            image,
            team
        });
        setName('');
        setPosition('');
        setImage('');
        setTeam('');
    }

    return (
        <section className="form-container">
            <form className="form" onSubmit={whenSave}>
                <h2>Fill in the data to create the employee card</h2>
                <Field 
                    required={true} 
                    label="Name" 
                    placeholder="Enter your name"
                    value={name}
                    toChanged={value => setName(value)}/>
                <Field 
                    required={true} 
                    label="Position" 
                    placeholder="Enter your position"
                    value={position}
                    toChanged={value => setPosition(value)}/>
                <Field 
                    label="Image" 
                    placeholder="Enter image address"
                    value={image}
                    toChanged={value => setImage(value)}/>
                <DropDown 
                    required={true} 
                    label="Teams"
                    itens={teams}
                    value={team}
                    toChanged={value => setTeam(value)}/>
                <Button>
                    Create Card
                </Button>
            </form>
            <form className="form" onSubmit={ (event) => {
                event.preventDefault()
                whenCreatingTeam({ 
                    name: teamName, 
                    color: teamColor 
                })
            }}>
                <h2>Fill in the data to create a new team</h2>
                <Field 
                    required={true}
                    label="Team name" 
                    placeholder="Enter team name"
                    value={teamName}
                    toChanged={value => setTeamName(value)}
                />
                <Field 
                    required={true}
                    type="color"
                    label="Team color" 
                    placeholder="Enter team color"
                    value={teamColor}
                    toChanged={value => setTeamColor(value)}
                />
                <Button>
                    Creat team
                </Button>
            </form>
        </section>
    )
}

export default Form;