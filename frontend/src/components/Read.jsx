import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Read = () => {

    const [data, setData] = useState([]);
    const [error, setError] = useState("");

    async function getData() {
        const response = await fetch("http://localhost:5000");

        const result = await response.json();
        if (!response.ok) {
            setError(result.error);
            console.log(result);
        }
        if (response.ok) {
            setData(result);
        }
    }

    const handleDelete = async (id) => {
        const response = await fetch(`http://localhost:5000/${id}`, {
            method: "DELETE"
        });
        const result = await response.json();
        if (!response.ok) {
            setError(result.error);
            console.log(result);
        }
        if (response.ok) {
            setError("Record Deleted");
            getData();
            setTimeout(() => {
                setError("");
            }, 2000);
        }
    }

    useEffect(() => {
        getData();
    }, [])

    console.log(data);
    return (
        <div className='container my-2'>
            {error && <div class="alert alert-danger" >{error}</div>}
            <h2 className='text-center'>Customer Card</h2>
            <div className='row'>
                {data?.map((ele) => (
                    <div key={ele._id} className='col-3'>
                        <div className="card">
                            <div className="card-body">
                                <p className="card-title text-start">Name : {ele.name}</p>
                                <p className="card-subtitle mb-2 text-muted text-start">Email : {ele.email}</p>
                                <h6 className="text-muted text-start">Age : {ele.age}</h6>
                                <a href="#" className="card-link" onClick={() => handleDelete(ele._id)}>Delete</a>
                                <Link to={`/${ele._id}`} className="card-link">Edit</Link>
                            </div>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default Read;