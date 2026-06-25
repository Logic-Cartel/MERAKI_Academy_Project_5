import React, { useState } from "react";
import axios from "axios";
import { useSearchParams, useNavigate } from "react-router-dom";
import API_URL from "../../config/api";
function ResetPassword() {
  const [newPassword, setNewPassword] = useState("");
  const [message, setMessage] = useState("");
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const token = searchParams.get("token");

  const resetPassword = () => {
    axios
      .post(`${API_URL}/users/reset-password`, {
        token,
        newPassword,
      })
      .then((res) => {
        setMessage(res.data.message);
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      })
      .catch((err) => {
        setMessage(err.response?.data?.message || "Something went wrong");
      });
  };

  return (
    <div className="login-card">
      <h2>Reset Password</h2>

      <input
        type="password"
        placeholder="New Password"
        onChange={(e) => setNewPassword(e.target.value)}
      />

      <button onClick={resetPassword}>Reset Password</button>

      {message && <p>{message}</p>}
    </div>
  );
}

export default ResetPassword;
