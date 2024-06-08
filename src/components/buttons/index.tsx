import { Button, ButtonProps } from "antd";

interface ButtonsProps {
    text: string;
    color?: ButtonProps['color'];
    bgColor?: string;
    hoverBgColor?: string;
    type: ButtonProps['type'];
    onClick?: () => void;
}

const Buttons: React.FC<ButtonsProps> = ({text, bgColor = 'transparent', color, type, onClick}) => {
    return (
        <>
            <Button style={{ color: color, backgroundColor: bgColor}} type={type} onClick={onClick}>{text}</Button>
        </>
    );
}

export default Buttons;