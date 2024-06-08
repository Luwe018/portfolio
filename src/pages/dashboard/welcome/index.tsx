import Buttons from "@/components/buttons";
import { Col, Row } from "antd";
import { startTransition } from "react";
import { useNavigate } from "react-router-dom";
const Welcome: React.FC = () => {

    const navigate = useNavigate();

    const openDetails = () => {
        startTransition(() => {
            navigate('/details');
        });
    }

    return (
        <>
            <div className="home">
                <Row justify="center" align="middle" style={{ height: '100vh' }}>
                    <Col>
                        <Buttons type="dashed" onClick={openDetails} text="Let's get started!" color="#FFFF" />
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default Welcome;