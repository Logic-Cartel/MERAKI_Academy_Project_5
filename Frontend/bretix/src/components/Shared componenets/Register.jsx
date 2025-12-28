import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";

const Register = () => {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState(null);
  const [country, setCountry] = useState("");
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [date_of_birthday, setDate_of_birthday] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role_id, setUserRole] = useState(3);
  const [asOwner, setAsOwner] = useState(false);

  const [storeTitle, setStoreTitle] = useState("");
  const [storeLogo, setStoreLogo] = useState("");
  const [storeDescription, setStoreDescription] = useState("");
  const [ownerId, setOwnerId] = useState(null);

  const makeOwnerStates = () => {
    setUserRole(2);
    setAsOwner(true);
  };
  const makeUserStates = () => {
    setUserRole(3);
    setAsOwner(false);
  };

  const userRegisterData = {
    firstName,
    lastName,
    age,
    country,
    phoneNumber,
    date_of_birthday,
    email,
    password,
    role_id,
  };

  const storeRegisterData = {
    title: storeTitle,
    logo: storeLogo,
    description: storeDescription,
  };

  const confirmRegister = async () => {
    try {
      const userRegisterResult = await axios.post(
        "http://localhost:5000/users/register",
        userRegisterData
      );

      const newId = userRegisterResult.data.user.id;
      setOwnerId(newId);

      if (role_id === 2) {
        await axios.post("http://localhost:5000/stores/addnewstore", {
          ...storeRegisterData,
          owner_id: newId,
        });
      }

      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="register-page">
      <div className="register-card">
        <h2>Create Account</h2>
        <p>Join our eco-friendly platform</p>

        <div className="owner-toggle">
          <label>
            <input
              type="checkbox"
              checked={asOwner}
              onChange={() => {
                asOwner ? makeUserStates() : makeOwnerStates();
              }}
            />
            Create Business Account
          </label>
        </div>

        <input placeholder="First Name" onChange={(e) => setFirstName(e.target.value)} />
        <input placeholder="Last Name" onChange={(e) => setLastName(e.target.value)} />
        <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
        <input type="number" placeholder="Mobile Number" onChange={(e) => setPhoneNumber(e.target.value)} />
        <input type="number" placeholder="Age" onChange={(e) => setAge(e.target.value)} />
        <input placeholder="Country" onChange={(e) => setCountry(e.target.value)} />
        <input type="date" onChange={(e) => setDate_of_birthday(e.target.value)} />

        {asOwner && (
          <>
            <hr />
            <input placeholder="Store Name" onChange={(e) => setStoreTitle(e.target.value)} />
            <input placeholder="About Store" onChange={(e) => setStoreDescription(e.target.value)} />
            <input placeholder="Store Logo URL" onChange={(e) => setStoreLogo(e.target.value)} />
          </>
        )}

        <button onClick={confirmRegister}>Register</button>
      </div>
    </div>
  );
};

export default Register;
