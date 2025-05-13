import './Button.css';
import { IoPersonAddSharp } from "react-icons/io5";

const Button = ({ children, icon: Icon, onClick, ...props }) => {
    return (
        <button className="button" onClick={onClick} {...props}>
            {Icon && <Icon className="button-icon" />}
            {children}
        </button>
    )
}

Button.defaultProps = {
    icon: IoPersonAddSharp 
}

export default Button;