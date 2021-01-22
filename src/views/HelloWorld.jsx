import React, {useState} from 'react';
import {Modal, Jumbotron, Col, Row} from 'react-bootstrap';
import "../assets/css/ModalPage.css";
import Button from 'components/CustomButton/CustomButton';

export default function HelloWorld(){

    const [show, setShow] = useState(false);
    const [stShow, setStShow] = useState(false);
    const [Ashow, setAShow] = useState(false);
    const [VcShow, setVcShow] = useState(false);
    const [GrShow, setGrShow] = useState(false);

    return(
        <div className="modal-page">
            <Jumbotron>
                <h1>Welcome to the modal page</h1>
                <p>Here you can try out different modal boxes</p>
            </Jumbotron>
            <button type = "button" style={{marginRight:"5px"}} onClick={() => setShow(true)}>Simple Modal</button>
            <button type = "button" style={{marginRight:"5px"}} onClick={() => setStShow(true)}>Static backdrop</button>
            <button type = "button" style={{marginRight:"5px"}} onClick={() => setAShow(true)}>No animation</button>
            <Modal show={show} onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                <Modal.Title>Normal modal</Modal.Title>
                </Modal.Header>
                <Modal.Body>This is a normal modal</Modal.Body>
                <Modal.Footer>
                <Button bsStyle = "default" onClick={() => setShow(false)} fill>
                    Close
                </Button>
                <Button  bsStyle = "primary" fill onClick={() => setShow(false)}>
                    Save Changes
                </Button>
                </Modal.Footer>
            </Modal>

            <Modal
                show={stShow}
                onHide={() => setStShow(false)}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                <Modal.Title>static modal</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    need to click any button to close this modal
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={() => setStShow(false)}>
                    Close
                </Button>
                <Button variant="primary" onClick={() => setStShow(false)}>Understood</Button>
                </Modal.Footer>
            </Modal>

            <Modal show={Ashow} onHide={() => setAShow(false)} animation={false}>
                <Modal.Header closeButton>
                <Modal.Title>No Animation model</Modal.Title>
                </Modal.Header>
                <Modal.Body>this modal doesn't have any animation</Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={() => setAShow(false)}>
                    Close
                </Button>
                <Button variant="primary" onClick={() => setAShow(false)}>
                    Save Changes
                </Button>
                </Modal.Footer>
            </Modal>

            <Modal
                show={VcShow}
                onHide={() => setVcShow(false)}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                    Vertical center
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4>Centered Modal</h4>
                    <p>
                    This modal is centered vertically on the screen
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => setVcShow(false)}>Close</Button>
                </Modal.Footer>
            </Modal>

        </div>
    );
    
}