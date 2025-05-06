import './Employee.css';

const Employee = (props) => {
    return(
        <div className='employee'>
            <div className='header'>
                <img src='https://github.com/barbaramazevedo.png' alt='Bárbara Azevedo' />
            </div>
            <div className='footer'>
                <h4>Bárbara Azevedo</h4>
                <h5>Desenvolvedora</h5>
            </div>
        </div>
    )
}

export default Employee