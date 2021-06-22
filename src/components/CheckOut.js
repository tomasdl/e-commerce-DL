// // import React, { useState } from "react";
// // import { Button, Modal, Form } from "react-bootstrap";

// const CheckOut = () => {

    
//   return (
//     <>
//       <Modal
//         show={show}
//         onHide={handleClose}
//         backdrop="static"
//         keyboard={false}
//       >
//         <Modal.Header closeButton>
//           <Modal.Title>CheckOut</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Form>
//             <Form.Group controlId="NameControlInput1">
//               <Form.Label>Nombre</Form.Label>
//               <Form.Control type="text" placeholder="Nombre" name="" />
//             </Form.Group>
//             <Form.Group controlId="SurnameControlInput1">
//               <Form.Label>Apellido</Form.Label>
//               <Form.Control type="text" placeholder="Apellido" />
//             </Form.Group>
//             <Form.Group controlId="EmailControlInput1">
//               <Form.Label>Direccion de correo electronico</Form.Label>
//               <Form.Control type="email" placeholder="name@example.com" />
//             </Form.Group>
//           </Form>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>
//             Cancelar
//           </Button>
//           <Button
//             variant="primary"
//             onClick={uploadOrders}
//             as={NavLink}
//             to={"/"}
//           >
//             Finalizar Orden
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </>
//   );
// };
// export default CheckOut;
