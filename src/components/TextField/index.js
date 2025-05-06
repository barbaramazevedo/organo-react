import "./TextField.css"; 
 
 const TextField = (props) => {

    const modifiedPlaceholder = `${props.placeholder}...`;

    const typing = (event) => {
        props.toChanged(event.target.value);
    }

    return (
        <div className="text-field">
            <label>{props.label}</label>
            <input value={props.value} onChange={typing} required={props.required} placeholder={modifiedPlaceholder}/>
        </div>
    );
}
export default TextField;