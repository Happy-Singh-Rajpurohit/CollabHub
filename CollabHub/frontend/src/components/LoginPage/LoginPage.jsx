import React, { useState, useEffect } from "react";
import "./LoginPage.css";
import { createIcons, icons } from "lucide";

const AuthPage = () => {
    const [isLogin, setIsLogin] = useState(true);

    // --- State to hold form data ---
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null); // To display errors from the backend
    const [successMessage, setSuccessMessage] = useState(null);
    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        if (params.get("verified") === "true") {
            setSuccessMessage("Email verified successfully! You can now log in.");
        }
    }, []);
    useEffect(() => {
        createIcons({ icons });
    }, [isLogin]);

    const handleToggle = async (e) => {
        setIsLogin(!isLogin);
        setError(null); // Clear errors when toggling
        setSuccessMessage(null);
    };

    // --- This is the new submission handler ---
    const handleSubmit = async (e) => {
        e.preventDefault(); // 1. Stop the page from reloading
        setError(null); // Clear previous errors

        // 2. Determine URL and body based on login/register state
        const url = isLogin
            ? "http://localhost:3000/login"
            : "http://localhost:3000/register";

        const body = isLogin
            ? { email, password }
            : { name, username, email, password };

        try {
            // 3. Send the request using fetch()
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(body),
            });

            const data = await response.json();

            if (!response.ok) {
                // If we get an error (400, 401, 500), set the error message
                throw new Error(data.message || "Something went wrong");
            }

            // --- SUCCESS ---
            if (isLogin) {
                console.log("Login successful!", data);
                // 4. Save the token and redirect
                localStorage.setItem("authToken", data.token);
                // window.location.href = "/dashboard"; // Redirect to a protected page
            } else {
                console.log("Registration successful!", data);
                setSuccessMessage(data.message);
                // Switch to login view so they can sign in
                setIsLogin(true);
            }

        } catch (err) {
            // 5. Catch any errors and display them
            console.error(err);
            setError(err.message);
        }
    };

    return (
        <div className="login-wrapper">
            <div className="login-header">
                {/* ... (your header code is fine) ... */}
            </div>

            <div className="login-card">
                <div className="login-card-header">
                    <h2 className="login-title" id="form-title">
                        {isLogin ? "Welcome Back!" : "Create Account"}
                    </h2>
                    <p className="login-description" id="form-desc">
                        {isLogin
                            ? "Enter your credentials to access your account"
                            : "Join the community and start collaborating"}
                    </p>
                </div>

                {/* CHANGE 1: 
                  - Remove 'action' and 'method'
                  - Add 'onSubmit' handler 
                */}
                <form id="auth-form" onSubmit={handleSubmit}>
                    {!isLogin && (
                        <div id="signup-fields">
                            <div className="field-group">
                                <label htmlFor="name">Full Name</label>
                                <div className="input-wrapper">
                                    <i data-lucide="user"></i>
                                    {/* CHANGE 2: 
                                      - Add 'value' and 'onChange' to all inputs
                                    */}
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="John Doe"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="field-group">
                                <label htmlFor="username">Username</label>
                                <div className="input-wrapper">
                                    <i data-lucide="user"></i>
                                    <input
                                        type="text"
                                        name="username"
                                        placeholder="johndoe123"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                        required
                                    />
                                </div>
                            </div>
                        </div>
                    )}

                    <div className="field-group">
                        <label htmlFor="email">Email Address</label>
                        <div className="input-wrapper">
                            <i data-lucide="mail"></i>
                            <input
                                type="email"
                                name="email"
                                placeholder="you@example.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                    </div>

                    <div className="field-group">
                        <label htmlFor="password">Password</label>
                        <div className="input-wrapper">
                            <i data-lucide="lock"></i>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                placeholder="••••••••"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            <button
                                type="button"
                                className="eye-btn"
                                id="toggle-password"
                                onClick={() => {
                                    const input = document.getElementById("password");
                                    if (input.type === "password") {
                                        input.type = "text";
                                    } else {
                                        input.type = "password";
                                    }
                                }}
                            >
                                <i data-lucide="eye"></i>
                            </button>
                        </div>
                    </div>

                    {/* CHANGE 3: Display any errors from the backend */}
                    {/* --- RENDER SUCCESS OR ERROR MESSAGES --- */}
                    {successMessage && <p className="login-success-message">{successMessage}</p>}
                    {error && <p className="login-error-message">{error}</p>}

                    <button type="submit" className="login-submit-btn" id="submit-btn">
                        {isLogin ? "Sign In" : "Create Account"}
                    </button>
                </form>

                <div className="toggle-section">
                    <p className="toggle-text" id="toggle-text">
                        {isLogin ? (
                            <>
                                Don't have an account?{" "}
                                <button className="toggle-btn" id="toggle-btn" onClick={handleToggle}>
                                    Sign up
                                </button>
                            </>
                        ) : (
                            <>
                                Already have an account?{" "}
                                <button className="toggle-btn" id="toggle-btn" onClick={handleToggle}>
                                    Sign in
                                </button>
                            </>
                        )}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AuthPage;