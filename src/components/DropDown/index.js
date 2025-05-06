import './DropDown.css';

const DropDown = (props) => {
    return (
        <div className='dropdown-container'>
            <label>{props.label}</label>
            <select 
                required={props.required} 
                value={props.value} 
                onChange={event => props.toChanged(event.target.value)}
            >
                <option value="" disabled hidden>Select your team</option>
                {props.itens.map(item => (
                    <option key={item} value={item}>
                    {item}
                </option>
                ))}
            </select>
        </div>
    )
}

export default DropDown;