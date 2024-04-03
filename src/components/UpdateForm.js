import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

// this is the updateForm component
function UpdateForm(props) {
    //destructuring the props
    const { item, updateAlbum, id } = props;
    //state for the new title
    const [newAlbumTitle, setNewAlbumTitle] = useState('');

    // console.log(item.id);
    //when the new title got set
    useEffect(() => {
        setNewAlbumTitle(item.title);
    }, [item]);
    //when the form is submitted the function runs
    const handleSubmit = (e) => {
        e.preventDefault();
        //passing all the data with new title to the updatealbum function
        updateAlbum(id, { title: newAlbumTitle }, item);
        // console.log(id, newAlbumTitle, item);
    };
    // console.log(item);
    //function to handdle the change in the input filed
    const handleInputChange = (e) => {
        setNewAlbumTitle(e.target.value);
    };
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            {/* bootstrap component -alert is used */}
            <Button variant="primary" onClick={handleShow}>
                <i className="fa-solid fa-pen-nib"></i>
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>UPDATE FORM</Modal.Title>
                </Modal.Header>
                <form onSubmit={handleSubmit}>
                    <div className="modal-body">
                        <div className="mb-3">
                            <label htmlFor="title" className="form-label">Title</label>
                            <input type="text" className="form-control" id="title" value={newAlbumTitle} onChange={handleInputChange} required />
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={handleClose}>Cancel</button>
                        <button type="submit" className="btn btn-primary" data-bs-dismiss="modal" onClick={handleClose}>Save Changes</button>
                    </div>
                </form>
            </Modal>
        </div>
    );
}


export default UpdateForm;
