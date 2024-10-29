import React, { useState } from 'react';
import { useNavigate, Link, Navigate } from 'react-router-dom';
import Navbar from '../Components/Navbar/Navbar';
import { CreateUserAPI } from '../apis';
import Swal from 'sweetalert2';

const Register = () => {

    const fireAlert = (text, icontext) => {
        Swal.fire({
            title: text,
            showConfirmButton: true,
            confirmButtonText: "OK",
            icon: icontext
        });
    };

    const isAuthenticated = Boolean(localStorage.getItem('user'));
    const [data, setData] = useState({
        name: '',
        email: '',
        phone: '',
        password: '',
        confirmpassword: ''
    });
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const validateEmail = (email) => {
        const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return re.test(String(email).toLowerCase());
    };

    const validatePhone = (phone) => {
        const re = /^[0-9]{10}$/;
        return re.test(String(phone));
    };

    const validatePassword = (password) => {
        const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        return re.test(password);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({
            ...data,
            [name]: value
        });

        // Dynamic validation while typing
        if (name === 'name' && value.length <= 3) {
            setErrors(prev => ({ ...prev, name: 'Name must be more than 3 characters' }));
        } else if (name === 'email' && !validateEmail(value)) {
            setErrors(prev => ({ ...prev, email: 'Please enter a valid email' }));
        } else if (name === 'phone' && !validatePhone(value)) {
            setErrors(prev => ({ ...prev, phone: 'Phone number must be 10 digits' }));
        } else if (name === 'password' && !validatePassword(value)) {
            setErrors(prev => ({ 
                ...prev, 
                password: 'Password must contain at least one uppercase letter, one lowercase letter, one number, and be at least 8 characters long' 
            }));
        } else if (name === 'confirmpassword' && value !== data.password) {
            setErrors(prev => ({ ...prev, confirmpassword: 'Passwords do not match' }));
        } else {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Final validations before submission
        if (data.name.length <= 3) {
            fireAlert('Name must be more than 3 characters', 'warning');
            return;
        }

        if (!validateEmail(data.email)) {
            fireAlert('Please enter a valid email', 'warning');
            return;
        }

        if (!validatePhone(data.phone)) {
            fireAlert('Phone number must be 10 digits', 'warning');
            return;
        }

        if (!validatePassword(data.password)) {
            fireAlert('Password must contain at least one uppercase letter, one lowercase letter, and one number', 'warning');
            return;
        }

        if (data.password !== data.confirmpassword) {
            fireAlert('Passwords do not match', 'warning');
            return;
        }

        try {
            const { confirmpassword, ...userData } = data;
            const response =  await CreateUserAPI(userData);
            const result = await response;
            if(result.success){
                fireAlert('User Creation Success', 'success');
                navigate('/login');
            }else{
                fireAlert(response.msg, 'warning');
            }
            
        } catch (e) {
            fireAlert('Something Went Wrong!', 'error');
            console.log(e);
        }
    };

    if (isAuthenticated) {
        return <Navigate to="/profile" />;
    }

    return (
        <>
            <Navbar />
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card p-4">
                            <h2 className="text-center mb-4">Register</h2>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label className="form-label">Name:</label>
                                    <input
                                        type="text"
                                        className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                                        placeholder="Enter Your Full Name"
                                        name="name"
                                        value={data.name}
                                        onChange={handleChange}
                                        required
                                    />
                                    {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Phone:</label>
                                    <input
                                        type="tel"
                                        className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
                                        placeholder="Enter Your Phone Number"
                                        name="phone"
                                        value={data.phone}
                                        onChange={handleChange}
                                        required
                                    />
                                    {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Email:</label>
                                    <input
                                        type="email"
                                        className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                        placeholder="Enter Your Email"
                                        name="email"
                                        value={data.email}
                                        onChange={handleChange}
                                        required
                                    />
                                    {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Password:</label>
                                    <input
                                        type="password"
                                        className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                                        placeholder="Enter your Password"
                                        name="password"
                                        value={data.password}
                                        onChange={handleChange}
                                        required
                                    />
                                    {errors.password && <div className="invalid-feedback">{errors.password}</div>}
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Confirm Password:</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        placeholder="Confirm your Password"
                                        name="confirmpassword"
                                        value={data.confirmpassword}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <button type="submit" className="btn btn-success w-100 mb-3">Register</button>
                            </form>
                            <div className="text-center">
                                <p>
                                    Already have an account?{' '}
                                    <Link to="/login" className="text-decoration-none">
                                        Login here
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="vcp__footer-copyright">
                <p>@2024 Vehicle Care Platform. All rights reserved.</p>
            </div>
        </>
    );
};

export default Register;
