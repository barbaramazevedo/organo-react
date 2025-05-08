import Employee from '../Employee';
import './Team.css';

const Team = ({team, employees, whenDeleting}) => {

    const css = { 
        backgroundImage: 'url(/imagens/fundo.png)', 
        backgroundColor: team.secondaryColor 
    };

    return (
        employees.length > 0 &&
        <section className='team' style={css}>
            <input 
                value={team.secondaryColor}
                type='color' 
                className='input-color'
            />
            <h3 style={{ borderColor: team.primaryColor }}>{team.name}</h3>
            <div className='employees'>
                {employees.map((employee) => {
                    return <Employee 
                        key={employee.name} 
                        employee={employee}
                        backgroundColor={team.primaryColor}
                        whenDeleting={whenDeleting}
                    /> 
                })}     
            </div>
        </section>
    )
}

export default Team;