import { FaTrash } from "react-icons/fa";
import Employee from '../Employee';
import hexToRgba from 'hex-to-rgba';
import Button from "../Button";
import './Team.css';

const Team = ({ team, employees, whenDeleting, whenDeletingTeam, changeColor, whenfavorited }) => {
    return (
        employees.length > 0 &&
        <section
            className='team'
            style={{
                backgroundImage: 'url(/imagens/fundo.png)',
                backgroundColor: hexToRgba(team.color, '0.3')
            }}
        >
            <div className="team-actions">
                <input
                    onChange={event => changeColor(event.target.value, team.id)}
                    value={team.color}
                    type='color'
                    className='input-color'
                />
                <Button title="Click to delete Team" className='btn-delete-team' onClick={() => whenDeletingTeam(team.id)}>
                    <span> </span>
                    <FaTrash size={20}  color="#6278F7" />
                </Button>
            </div>

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
    );
};

export default Team;