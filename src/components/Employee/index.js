import './Employee.css';

const Employee = ({employee, backgroundColor}) => {
    return(
        <div className='employee'>
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