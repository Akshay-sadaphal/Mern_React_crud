import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "./Create.css";

const Create = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState(0);

    const [error, setError] = useState("");
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const addUser = { name, email, age };
        const response = await fetch("http://localhost:5000", {
            method: "POST",
            body: JSON.stringify(addUser),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (!response.ok) {
            const errorResponse = await response.json();
            setError(errorResponse.error);
            console.error("Server error:", errorResponse.error);
        }
        if (response.ok) {
            console.log(response);
            setError("");
            setName("");
            setEmail("");
            setAge(0);
            navigate("/all");
        }

    };

    console.log(name, email, age)
    return (
        <div className='container'>
            {error && <div className="alert alert-danger">{error}</div>}
            <h4>Create Customer</h4>
            <div className='row'>
                <div className='col-md-6'>
                    <form onSubmit={handleSubmit}>
                        <div className='border p-3'>
                            <div className='mb-3 row'>
                                <label className='col-md-2 col-form-label'><strong>Name :</strong></label>
                                <div className='col-md-10'>
                                    <input
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        type="text"
                                        className="form-control"
                                        placeholder='Enter Full Name'
                                    />
                                </div>
                            </div>
                            <div className='mb-3 row'>
                                <label className='col-md-2 col-form-label'><strong>Email :</strong></label>
                                <div className='col-md-10'>
                                    <input
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        type="email"
                                        className="form-control"
                                        placeholder='Enter Valid Email'
                                    />
                                </div>
                            </div>
                            <div className='mb-3 row'>
                                <label className='col-md-2 col-form-label'><strong>Age :</strong></label>
                                <div className='col-md-10'>
                                    <input
                                        value={age}
                                        onChange={(e) => setAge(e.target.value)}
                                        type="number"
                                        className="form-control"
                                        placeholder='Enter Current Age'
                                    />
                                </div>
                            </div>
                            <div className='text-end'>
                                <button type="submit" className="btn btn-primary">Create</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>



    )
}

export default Create;