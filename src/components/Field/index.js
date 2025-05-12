import "./Field.css"; 
 
 const Field = ({ type = 'text', label, placeholder, value, toChanged, required = false }) => {

    return (
        <div className={`field field-${type}`}>
            <label>{label}</label>
            <input 
                type={type}
                value={value} 
                onChange={ event => toChanged(event.target.value)} 
                required={required} 
                placeholder = {placeholder}
            />
        </div>
    );
}
export default Field;