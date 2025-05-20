import {useState} from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
    faEnvelope,
    faLock,
    faUser
} from '@fortawesome/free-solid-svg-icons';

import './auth.css';
import {Link} from "react-router";

export const Login = () => {

    const [isFlipped, setIsFlipped] = useState(false);


    return (

            <div className={`flip-container ${isFlipped ? 'flipped' : ''}`}>
                <div className="flipper">
                    {/* Login Form (Front) */}
                    <div className="front">
                        <div className="form-card">
                            <div className="form-content">
                                <div className="text-center mb-8">
                                    <h1 className="form-title">Welcome Back</h1>
                                    <p className="form-subtitle">Sign in to your account to continue</p>
                                </div>

                                <form className="form-space">
                                    <div className="input-container">
                                        <input
                                            type="email"
                                            name="email"
                                            className="input-field"
                                            placeholder=" "

                                        />
                                        <label htmlFor="email" className="floating-label">Email Address</label>
                                        <div className="input-icon">
                                            <FontAwesomeIcon icon={faEnvelope}/>
                                        </div>
                                    </div>

                                    <div className="input-container">
                                        <input
                                            type="password"
                                            name="password"
                                            className="input-field"
                                            placeholder=" "

                                        />
                                        <label htmlFor="password" className="floating-label">Password</label>
                                        <div className="input-icon">
                                            <FontAwesomeIcon icon={faLock}/>
                                        </div>
                                    </div>

                                    <div className="flex-between">
                                        <div className="flex-items">
                                            <input
                                                type="checkbox"
                                                name="remember"
                                                className="checkbox"
                                            />
                                            <label htmlFor="remember" className="checkbox-label">Remember me</label>
                                        </div>
                                        <Link to="/auth/reset" className="link-text">Forgot password?</Link>
                                    </div>

                                    <button type="submit" className="submit-button">
                                        <Link to="/">
                                            Sign In
                                        </Link>

                                    </button>
                                </form>


                                <div className="text-center mt-6">
                                    <p className="text-sm">
                                        Don't have an account?
                                        <button
                                            onClick={() => setIsFlipped(true)}
                                            className="link-button"
                                        >
                                            Sign up
                                        </button>
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Signup Form (Back) */}
                    <div className="back">
                        <div className="form-card">
                            <div className="form-content">
                                <div className="text-center mb-8">
                                    <h1 className="form-title">Create Account</h1>
                                    <p className="form-subtitle">Join us today to get started</p>
                                </div>

                                <form className="form-space">
                                    <div className="input-container">
                                        <input
                                            type="text"
                                            name="name"
                                            className="input-field"
                                            placeholder=" "

                                        />
                                        <label htmlFor="name" className="floating-label">Full Name</label>
                                        <div className="input-icon">
                                            <FontAwesomeIcon icon={faUser}/>
                                        </div>
                                    </div>

                                    <div className="input-container">
                                        <input
                                            type="email"
                                            name="email"
                                            className="input-field"
                                            placeholder=" "

                                        />
                                        <label htmlFor="signupEmail" className="floating-label">Email Address</label>
                                        <div className="input-icon">
                                            <FontAwesomeIcon icon={faEnvelope}/>
                                        </div>
                                    </div>

                                    <div className="input-container">
                                        <input
                                            type="password"
                                            name="password"
                                            className="input-field"
                                            placeholder=" "

                                        />
                                        <label htmlFor="signupPassword" className="floating-label">Password</label>
                                        <div className="input-icon">
                                            <FontAwesomeIcon icon={faLock}/>
                                        </div>
                                    </div>

                                    <div className="input-container">
                                        <input
                                            type="password"
                                            name="confirmPassword"
                                            className="input-field"
                                            placeholder=" "

                                        />
                                        <label htmlFor="confirmPassword" className="floating-label">Confirm
                                            Password</label>
                                        <div className="input-icon">
                                            <FontAwesomeIcon icon={faLock}/>
                                        </div>
                                    </div>

                                    <div className="flex-items">
                                        <input
                                            type="checkbox"
                                            name="terms"
                                            className="checkbox"

                                        />
                                        <label htmlFor="terms" className="checkbox-label">
                                            I agree to the <a href="#" className="link-text">Terms</a> and <a href="#"
                                                                                                              className="link-text">Privacy
                                            Policy</a>
                                        </label>
                                    </div>

                                    <button type="submit" className="submit-button">
                                        Create Account
                                    </button>
                                </form>

                                <div className="divider-container">
                                    <div className="divider-line"></div>
                                    <div className="divider-text">
                                        <span>Or sign up with</span>
                                    </div>
                                </div>

                                <div className="text-center mt-6">
                                    <p className="text-sm">
                                        Already have an account?
                                        <button
                                            onClick={() => setIsFlipped(false)}
                                            className="link-button"
                                        >

                                            Sign in

                                        </button>
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
    )
}