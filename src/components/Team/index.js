import Employee from '../Employee';
import './Team.css';

const Team = (props) => {

    const css = { backgroundColor: props.secondaryColor }

    return (
        <section className='team' style={css}>
            <h3 style={{ borderColor: props.primaryColor }}>{props.name}</h3>
            <div className='employees'>
                {props.employees.map(employee => (
                    <Employee 
                        name={employee.name} 
                        position={employee.position} 
                        image={employee.image} 
                    />
                ))}  
            </div>
        </section>
    )
}

export default Team;