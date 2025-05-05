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
    return (
        <section className="form-container">
            <form>
                <h2>Fill in the data to create the employee card</h2>
                <TextField label="Name" placeholder="Enter your name"/>
                <TextField label="Position" placeholder="Enter your position"/>
                <TextField label="Image" placeholder="Enter image address"/>
                <DropDown label="Team"itens={teams}></DropDown>
                <Button>
                    Create Card
                </Button>
            </form>
        </section>
    )
}

export default form;