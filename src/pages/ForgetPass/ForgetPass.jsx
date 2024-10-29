import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../Components/Navbar/Navbar';
import { SendOTPAPI,VerifyOTPAPI,ResetPasswordAPI } from '../../apis'
import Swal from 'sweetalert2'

const fireAlert = (text,icontext) => {
    Swal.fire({
        title: text,
        showConfirmButton: true,
        confirmButtonText: "OK",
        icon: icontext
    }
    )
}


function ForgotPassword() {
  const [step, setStep] = useState(1); 
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');


  const validatePassword = (password) => {
    const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return re.test(password);
};


  const SendOTP = async ()=>{
    const response = await SendOTPAPI({email});
    return response;
  };
  const VerifyOTP = async ()=>{
    const data = {
      email:email,
      otp:otp
    }
    const response = await VerifyOTPAPI(data);
    return response;
  }

  const ResetPassword = async()=>{
    const data = {
      email:email,
      password:password
    };
    const response = await ResetPasswordAPI(data);
    return response;
  }
  const handleEmailSubmit = async (e) => {

    e.preventDefault();
    try{
      const response =   await SendOTP();
      if(response.success){
        fireAlert(response.msg,'success');
        setStep(2);
      }else{
        fireAlert(response,'warning');
      } 
    }catch(e){
      fireAlert('Somthing Went Wrong','error');
      alert(e);
    }
  };
  const handleOtpSubmit = async (e) => {
    e.preventDefault();
    try{
      const response = await VerifyOTP();
      if(response.success){
        fireAlert("OTP Verfied Successfully",'success');
        setStep(3);
      }else{
        fireAlert(response,'warning');
      }
    }catch(e){
      fireAlert('Somthing Went Wrong','error');
    }
  };

  // Step 3: Handle password reset
  const handlePasswordReset = async (e) => {
    e.preventDefault();
    if (!validatePassword(password)) {
        setErrorMessage('Password must be at least 8 characters, with one uppercase, one lowercase letter, one number, and may include special characters.');
        return;
    }

    if (password === confirmPassword) {
        const response = await ResetPassword();
        if (response.success) {
            setStep(4);
        } else {
            fireAlert("Something went wrong, please try again later", 'warning');
        }
    } else {
        setErrorMessage('Passwords do not match.');
    }
};

  return (
    <>
    <Navbar/>
    <div className="forgot-password-container">
      <h2>Forgot Password</h2>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      {successMessage && <p className="success-message">{successMessage}</p>}
      {step === 1 && (
        <form onSubmit={handleEmailSubmit}>
          <div className="form-group">
            <label htmlFor="email">Enter your email address:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
              required
            />
          </div>
          <button type="submit">Send OTP</button>
        </form>
      )}
      {step === 2 && (
        <form onSubmit={handleOtpSubmit}>
          <div className="form-group">
            <label htmlFor="otp">Enter OTP sent to your email:</label>
            <input
              type="text"
              id="otp"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              placeholder="Enter OTP"
              required
            />
          </div>
          <button type="submit">Verify OTP</button>
        </form>
      )}
      {step === 3 && (
        <form onSubmit={handlePasswordReset}>
          <div className="form-group">
            <label htmlFor="password">New Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="New password"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm password"
              required
            />
          </div>
          <button type="submit">Reset Password</button>
        </form>
      )}
      {step === 4 && (
        <div>
          <p>Password reset successful! You can now log in with your new password. <Link to="/login" className="text-decoration-none">
                                        Click Here To Login{' '}
                                    </Link></p>
        </div>
      )}
    </div>
    </>
  );
}

export default ForgotPassword;
