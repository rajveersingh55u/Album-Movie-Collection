import React, { useEffect, useState } from 'react';
import UpdateForm from './UpdateForm';
import AddMovie from './AddMovie';
import Loader from './Loader';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';


const Index = () => {
    //state for setting the data
    const [data, setData] = useState([]);
    //state for setting the loading 
    const [loading, setLoading] = useState(true);
    //state for the detaFetched
    const [dataFetched, setDataFetched] = useState(false);
    //function which fetches all the albums initially
    const fetchAllAlbums = async () => {
        setLoading(true);
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/albums');
            const json = await response.json();
            setData(json);
        } catch (error) {
            console.error('Error fetching albums:', error);
        }
        setLoading(false);
        setDataFetched(true);
    };
    useEffect(() => {
        fetchAllAlbums();
    }, []);

    //function to fetch whenever a new album is pushed
    const fetchUpdateAlbum = (albumData) => {
        fetch('https://jsonplaceholder.typicode.com/albums', {
            method: 'POST',
            body: JSON.stringify(albumData),
            headers: {
                'Content-type': 'application/json',
            },
        })
            .then((response) => response.json())
            .then((json) => {
                setData([json, ...data]);
                setTimeout(() => {
                    NotificationManager.success('Album added successfully', 'Success');
                }, 1000);
            });
    };
    const addNewAlbum = (title, userId) => {
        const albumData = {
            title,
            userId,
        };
        fetchUpdateAlbum(albumData);
    };


    //function to delete a album data
    const handleDeleteAlbumUpdate = (id) => {
        fetch(`https://jsonplaceholder.typicode.com/albums/${id}`, {
            method: 'DELETE',
        }).then(() => {
            setData(data.filter((item) => item.id !== id));
            setTimeout(() => {
                NotificationManager.success('Album deleted successfully', 'Success');
            }, 1000);
        });
    };

    //function to update a existing album data
    const updateAlbum = (albumId, albumData, item) => {
        fetch(`https://jsonplaceholder.typicode.com/albums/${albumId}`, {
            method: 'PUT',
            body: JSON.stringify(albumData),
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((response) => response.json())
            .then((updatedAlbum) => {
                // Update the state with the updated album
                setData(data.map((album) => album.id === albumId ? updatedAlbum : album));
                console.log(updatedAlbum);
            })
            .catch((error) => {
                console.error('Error updating album:', error);
            });
    };

    //function for handling the bounce of the delete button
    const handleMouseIn = (id) => {
        document.getElementById(`deleteicon${id}`).classList.add("fa-bounce");
    };
    const handleMouseOut = (id) => {
        document.getElementById(`deleteicon${id}`).classList.remove("fa-bounce");
    };

    return (
        <div>
            {/* using the react notification package to show notification */}
            <NotificationContainer />
            <ul>
                <div>
                    <AddMovie addNewAlbum={addNewAlbum} />
                </div>
                {/* showing the loading when data is not fetched */}
                {loading && !dataFetched && <Loader />}
                {/* map over the album data fetched form the api  */}
                {!loading && data.map((item) => (
                    // bootstrap card component
                    <div
                        className='card d-inline-flex p-2 m-4 shadow p-3 mb-5 bg-body-tertiary rounded bg-info-subtle'
                        key={item.id}
                    >
                        <img
                            src='https://www.filmmusicsite.com/images/covers/large/3130.jpg'
                            className='card-img-top'
                            alt='...'
                        />
                        <div className='card-body'>
                            <p className='card-text'>{item.title}</p>
                        </div>
                        <div className="button-container">
                            <button className='btn btn-' id="delete" style={{
                                'width': '40px',
                                'height': '38px',
                                'marginRight': '4px'
                            }} onMouseEnter={() => handleMouseIn(item.id)}
                                onMouseLeave={() => handleMouseOut(item.id)} onClick={() => handleDeleteAlbumUpdate(item.id)}>
                                <i id={`deleteicon${item.id}`} className='fa-solid fa-trash'></i>
                            </button>
                            <br />
                            {/* update form passed over here */}
                            <div key={item.id}>
                                <UpdateForm updateAlbum={updateAlbum} item={item} id={item.id} />
                            </div>
                        </div>
                    </div>
                ))}
            </ul>
        </div>
    );
};

export default Index;
