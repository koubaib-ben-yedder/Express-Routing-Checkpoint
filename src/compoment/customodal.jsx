import {useState} from "react"
import {Button,Modal,Alert} from "react-bootstrap"
import "../css/customModal.css"
function Example({data}) {
    const [show, setShow] = useState(true);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    console.log(data)

    
  
    return (
      <>
        
      
     
   
        
        <Modal show={show} onHide={handleClose} >
        <Alert variant={data?.msg=="server work"?"success":"danger"}  >
          <Modal.Header closeButton >
            <Modal.Title>{data?.msg=="server work"?"connect with sucess":"warning"}</Modal.Title>
          </Modal.Header>
          <Modal.Body >{data?.msg}</Modal.Body>
       
          </Alert>
        </Modal>
      
      </>
    );
  }
  
  export default Example;