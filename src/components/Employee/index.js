import './Employee.css';
import { MdOutlineClose, MdFavorite, MdFavoriteBorder } from "react-icons/md";

const Employee = ({employee, backgroundColor, whenDeleting, whenfavorited }) => {

    function favorited() {
        whenfavorited(employee.id);
    }

    const propsfavorited = {
        size: 22,
        onClick: favorited
    }
    
    return(
        <div className='employee'>
            <MdOutlineClose 
                size={20} 
                className="removing" 
                onClick={() => whenDeleting(employee.id)} 
            />
            <div 
                className='header' 
                style={{ backgroundColor: backgroundColor}}>
                <img src={employee.image} alt={employee.name} />
            </div>
            <div className='footer'>
                <h4>{employee.name}</h4>
                <h5>{employee.position}</h5>
                <div className='favorite'>
                    {employee.favorite 
                        ? <MdFavorite {...propsfavorited } color='#6278F7' /> 
                        : <MdFavoriteBorder {...propsfavorited}/>
                    }
                </div>
            </div>
        </div>
    )
}

export default Employee;