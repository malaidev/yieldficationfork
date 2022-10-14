import { Button } from 'react-bootstrap';
import '../scss/customButton.scss'
import cls from 'classnames';

const CustomButton = (props) => {
    const { children, className, style} = props;
    return (
        <button className={cls('customButton', className)} style={style}>{children}</button>
    )
}
export default CustomButton;