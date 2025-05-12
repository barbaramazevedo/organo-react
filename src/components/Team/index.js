import Employee from '../Employee';
import './Team.css';
import hexToRgba from 'hex-to-rgba';

const Team = ({team, employees, whenDeleting, changeColor, whenfavorited}) => {

    return (
        employees.length > 0 &&
        <section 
            className='team' 
            style={{backgroundImage: 'url(/imagens/fundo.png)', backgroundColor: hexToRgba(team.color, '0.3')}}>
            <input 
                onChange={event => changeColor(event.target.value, team.id)}
                value={team.color}
                type='color' 
                className='input-color'
            />
            <h3 style={{ borderColor: team.primaryColor }}>{team.name}</h3>
            <div className='employees'>
                {employees.map((employee) => (
                    <Employee 
                        key={employee.id} 
                        employee={employee}
                        backgroundColor={team.color}
                        whenDeleting={whenDeleting}
                        whenfavorited={whenfavorited}
                    /> 
                ))}     
            </div>
        </section>
    )
}

export default Team;