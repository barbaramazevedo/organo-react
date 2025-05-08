import './Form.css';
import TextField from '../TextField';
import DropDown from '../DropDown';
import Button from '../Button';
import React, { useState } from 'react';

const Form = ({toTheNewEmployeeAdded, teams}) => {

    const[name, setName] = useState('');
    const[position, setPosition] = useState('');
    const[image, setImage] = useState('');
    const[team, setTeam] = useState('');

    const whenSave = (event) => {  
        event.preventDefault();
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
            <form onSubmit={whenSave}>
                <h2>Fill in the data to create the employee card</h2>
                <TextField 
                    required={true} 
                    label="Name" 
                    placeholder="Enter your name"
                    value={name}
                    toChanged={value => setName(value)}/>
                <TextField 
                    required={true} 
                    label="Position" 
                    placeholder="Enter your position"
                    value={position}
                    toChanged={value => setPosition(value)}/>
                <TextField 
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
        </section>
    )
}

export default Form;