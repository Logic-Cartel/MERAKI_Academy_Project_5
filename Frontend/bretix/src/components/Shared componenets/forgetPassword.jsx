import React, { useState } from "react";
import axios from "axios";

function ForgetPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const forgetPassword = () => {
    setLoading(true);

    axios
      .post("http://localhost:5000/users/request-forgot-password", {
        email,
      })
      .then((res) => {
        setMessage(res.data.message);
      })
      .catch((err) => {
        setMessage(
          err.response?.data?.message || "Something went wrong"
        );
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className="login-card">
      <h2>Forgot Password</h2>

      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button onClick={forgetPassword} disabled={loading}>
        {loading ? "Sending..." : "Send Reset Link"}
      </button>

      {message && <p>{message}</p>}
    </div>
  );
}

export default ForgetPassword;