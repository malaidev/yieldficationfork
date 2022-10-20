import cls from 'classnames';
import '../scss/switchToggle.scss';
const SwitchToggle = (props) => {
    const {className, style, ...children} = props;
    return (
        <label className={cls('switch-toggle', className)} style={style} >
            <input type="checkbox" onClick={props.onClick}/>
            <span className="slider round"></span>
        </label>
    )
}
export default SwitchToggle;