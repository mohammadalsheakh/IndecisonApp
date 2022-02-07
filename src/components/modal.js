import React from "react";
import Modal from 'react-modal';
//we can use this shape of the stateless function becouse we always returnes a jsx 
const OptionModal = (props) =>(
    <Modal
    isOpen={!!props.modalState}
    contentLabel="Selected option"
    onRequestClose={props.removeModal}
    ariaHideApp={true} 
    closeTimeoutMS={200}
    className={"modal"}
    >
        <h3>The Selected option </h3>
        {props.modalState&&<p>{props.modalState}</p>}
        <button onClick={props.removeModal} className="button">Okay</button>
    </Modal>
)

export default OptionModal