import './Employee.css';
import { MdOutlineClose } from "react-icons/md";

const Employee = ({employee, backgroundColor, whenDeleting }) => {
    return(
        <div className='employee'>
            <MdOutlineClose size={20} className="removing" onClick={whenDeleting} />
            <div className='header' style={{ backgroundColor: backgroundColor}}>
                <img src={employee.image} alt={employee.name} />
            </div>
            <div className='footer'>
                <h4>{employee.name}</h4>
                <h5>{employee.position}</h5>
            </div>
        </div>
    )
}

export default Employee;