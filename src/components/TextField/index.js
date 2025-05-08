import "./TextField.css"; 
 
 const TextField = ({ label, placeholder, value, toChanged, required = false }) => {

    return (
        <div className="text-field">
            <label>{label}</label>
            <input 
                value={value} 
                onChange={ event => toChanged(event.target.value)} 
                required={required} 
                placeholder = {placeholder}/>
        </div>
    );
}
export default TextField;