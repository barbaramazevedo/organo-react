import './Form.css';
import TextField from '../TextField';
import DropDown from '../DropDown';
import Button from '../Button';

const form = () => {

    const teams = [
        'Água',
        'Ar',
        'Digital',
        'Fogo',
        'Terra'
    ]

    const whenSave = (event) => {  
        event.preventDefault();
        console.log('Form submitted!');
    }

    return (
        <section className="form-container">
            <form onSubmit={whenSave}>
                <h2>Fill in the data to create the employee card</h2>
                <TextField required={true} label="Name" placeholder="Enter your name"/>
                <TextField required={true} label="Position" placeholder="Enter your position"/>
                <TextField label="Image" placeholder="Enter image address"/>
                <DropDown required={true} label="Team"itens={teams}></DropDown>
                <Button>
                    Create Card
                </Button>
            </form>
        </section>
    )
}

export default form;