import React, { useState } from 'react';


//AddMovie component getting the whole album as props
function AddMovie({ addNewAlbum }) {
    //making a state to set the newTitle
    const [newAlbumTitle, setNewAlbumTitle] = useState('');
    //function to handle the changes in the input field
    const handleInputChange = (event) => {
        setNewAlbumTitle(event.target.value);
    };
    //function call when the form submitted
    const handleSubmit = (event) => {
        event.preventDefault();
        // console.log(newAlbumTitle);
        //passing the newTitle to the function
        addNewAlbum(newAlbumTitle);
        //then making the title field empty again
        setNewAlbumTitle('');
    };
    //function to handle the bounce style for the addMovie button
    const handleMouseIn = () => {
        document.getElementById("icon").classList.add("fa-bounce");
    }
    const handleMouseOut = () => {
        document.getElementById("icon").classList.remove("fa-bounce");
    }
    return (
        <div>
            {/* //button for the addMovie */}
            <button
                type="button"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
                id="addButton"
                onMouseEnter={handleMouseIn}
                onMouseLeave={handleMouseOut}
            >
                <i id="icon" className="fa-solid fa-plus"></i>
            </button>
            {/* bootstrap component -alert */}
            <div
                className="modal fade"
                id="staticBackdrop"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                tabIndex="-1"
                aria-labelledby="staticBackdropLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="staticBackdropLabel">
                                Add Album
                            </h1>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="modal-body">
                                <div className="mb-3">
                                    <label htmlFor="title" className="form-label">
                                        Title
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="title"
                                        value={newAlbumTitle}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    data-bs-dismiss="modal"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="btn btn-primary"
                                    data-bs-dismiss="modal"
                                >
                                    Save Changes
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddMovie;
