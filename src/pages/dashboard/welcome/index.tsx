import { Button, Col, Row } from "antd";
import { startTransition } from "react";
import { useNavigate } from "react-router-dom";


const Welcome: React.FC = () => {

    const navigate = useNavigate();

    const openDetails = () => {
        startTransition(() => {
            navigate('/details');
        });
    }

    return(
        <>
            <Row justify="center" align="middle" style={{ height: '100vh' }}>
                <Col>
                    <Button onClick={openDetails} type="dashed">Lets get started!</Button>
                </Col>
            </Row>
        </>
    )
}

export default Welcome;