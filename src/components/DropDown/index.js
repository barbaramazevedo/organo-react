import './DropDown.css';

const DropDown = (props) => {
    return (
        <div className='dropdown-container'>
            <label>{props.label}</label>
            <select required={props.required}>
                {props.itens.map(item => {
                    return <option key={item}>{item}</option>
                })}
            </select>
        </div>
    )
}

export default DropDown;