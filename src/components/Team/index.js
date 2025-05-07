import Employee from '../Employee';
import './Team.css';

const Team = (props) => {

    const css = { backgroundColor: props.secondaryColor }

    return (
        props.employees.length > 0 &&
        <section className='team' style={css}>
            <h3 style={{ borderColor: props.primaryColor }}>{props.name}</h3>
            <div className='employees'>
                {props.employees.map(employee => (
                    <Employee 
                        backgroundColor={props.primaryColor}
                        key={employee.name}
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