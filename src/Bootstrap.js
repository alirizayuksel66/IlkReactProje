import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Card from 'react-bootstrap/Card';

function Bootstrap() {
    return (
        <div>
            <h3>Bootstrap Komponentleri</h3>
            <Button variant="danger">Danger</Button>
            <Button variant="info">Info</Button>
            <Tabs
                defaultActiveKey="home"
                id="uncontrolled-tab-example"
                className="mb-3"
            >
                <Tab eventKey="home" title="Home">
                    <div>Home</div>
                </Tab>
                <Tab eventKey="profile" title="Profile">
                    <div>Profile</div>
                </Tab>
                <Tab eventKey="contact" title="Contact" disabled>
                    <div>Contact</div>
                </Tab>
            </Tabs>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Ali Rıza Yüksel
                    </Card.Text>
                    <Button variant="primary">İlerle</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Bootstrap