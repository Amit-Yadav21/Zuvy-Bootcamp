import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createNote } from '../utils/apiHandler.jsx';
import axios from 'axios';

const CreateNote = () => {
    const [formData, setFormData] = useState({
        content: '',
        important: '',
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
        if (!formData.content) newErrors.content = 'content is required';
        if (!formData.important) newErrors.important = 'important is required';
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

    const createNoteAPI = async () => {
        try {
            // const getCookie = function (name) {
            //     var cookies = document.cookie.split(';');
            //     for (var i = 0; i < cookies.length; ++i) {
            //         var pair = cookies[i].trim().split('=');
            //         if (pair[0] == name)
            //             return pair[1];
            //     }
            //     return null;
            // };

            const data = await axios.post('http://localhost:3000/notes/create', formData);
            console.log('Create Note response:', data);

            toast.success('Create Note successful!');
            setFormData({ content: '', important: '' }); // Clear form data
        } catch (error) {
            console.error('There was an error!', error);
            toast.error('cookie not found. Please log in again.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1>Note Creation Form</h1>
            <div>
                <label htmlFor="content">Content : </label>
                <input
                    type="text"
                    id="content"
                    name="content"
                    value={formData.content}
                    onChange={handleChange}
                />
                {errors.content && <p>{errors.content}</p>}
            </div>
            <div>
                <label htmlFor="important">Important : </label>
                <input
                    type="important"
                    id="important"
                    name="important"
                    value={formData.important}
                    onChange={handleChange}
                />
                {errors.important && <p>{errors.important}</p>}
            </div>
            <button type="submit" onClick={createNoteAPI}>Create Note</button>
        </form>
    );
};

export default CreateNote;