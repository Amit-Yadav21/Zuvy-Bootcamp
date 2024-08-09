import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RegistrationForm = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.username) newErrors.username = 'Username is required';
        if (!formData.password) newErrors.password = 'Password is required';
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formErrors = validateForm();
        if (Object.keys(formErrors).length === 0) {
            // Handle form submission
            console.log('Form data submitted:', formData);
            // Optionally, you can send the data to a server here
        } else {
            setErrors(formErrors);
        }
    };

    const registerAPI = async () => {
        try {
            const response = await axios.post('http://localhost:3000/createUser', formData);
            console.log(response);
            toast.success('Registration successful!'); // Success message
            setFormData({ username: '', password: '' }); // Clear form data
        } catch (error) {
            console.error('There was an error!', error);
            toast.error('Registration failed!'); // Error message
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="username">Username : </label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                />
                {errors.username && <p>{errors.username}</p>}
            </div>
            <div>
                <label htmlFor="password">Password : </label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                />
                {errors.password && <p>{errors.password}</p>}
            </div>
            <button type="submit" onClick={registerAPI}>Register</button>
        </form>
    );
};

export default RegistrationForm;