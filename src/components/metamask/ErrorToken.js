import React,{useState} from 'react';
import { Modal} from 'react-bootstrap';
import "../../css/modalboostrap/modal.css"
import ButtonFox from './ButtonFox';
import warning from "./metamaskWarning.png"
function Example() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
      <>
        <ButtonFox onClick={handleShow} />


        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Cambia la red de la cartera</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <img alt='warning' src={warning}/>
              Cambia la red de la cartera en la aplicación MetaMask para agregar este contrato. </Modal.Body>
          <Modal.Footer>
            <btn className="btn c-red br-30"  onClick={handleClose}>
              Entiendo
            </btn>


          </Modal.Footer>
        </Modal>
      </>
    );
  }

  export default Example;