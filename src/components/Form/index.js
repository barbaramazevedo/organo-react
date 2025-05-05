import './Form.css';
import TextField from '../TextField';

const form = () => {
    return (
        <section className="form-container">
            <form>
                <h2>Fill in the data to create the employee card</h2>
                <TextField label="Name" placeholder="Enter your name"/>
                <TextField label="Position" placeholder="Enter your position"/>
                <TextField label="Image" placeholder="Enter image address"/>
            </form>
        </section>
    )
}

export default form;