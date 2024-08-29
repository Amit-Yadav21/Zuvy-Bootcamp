import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { postLogin } from '../utils/apiHandler.jsx';

const LoginForm = () => {
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formErrors = validateForm();
        if (Object.keys(formErrors).length === 0) {
            await loginAPI(); // Trigger login API call on form submit
        } else {
            setErrors(formErrors);
        }
    };

    const loginAPI = async () => {
        try {
            const data = await postLogin('login', formData);
            console.log('Login response:', data);
            toast.success('Login successful!');
            setFormData({ username: '', password: '' });
        } catch (error) {
            console.error('There was an error!', error);
            toast.error('Login failed!'); // Error message
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1>Login Form</h1>
            <div>
                <label htmlFor="username">Username: </label>
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
                <label htmlFor="password">Password: </label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                />
                {errors.password && <p>{errors.password}</p>}
            </div>
            <button type="submit">Login</button>
        </form>
    );
};

export default LoginForm;