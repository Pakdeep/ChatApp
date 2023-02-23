import React, { useState } from "react";
import { UilImagePlus } from "@iconscout/react-unicons";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, storage, db } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try {
      //Create user
      const res = await createUserWithEmailAndPassword(auth, email, password);

      //Create a unique image name
      const date = new Date().getTime();
      const storageRef = ref(storage, `${displayName + date}`);

      await uploadBytesResumable(storageRef, file).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          try {
            //Update profile
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });
            //create user on firestore
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });

            //create empty user chats on firestore
            await setDoc(doc(db, "userChats", res.user.uid), {});
            navigate("/");
          } catch (err) {
            console.log(err);
            setErr(true);
            setLoading(false);
          }
        });
      });
    } catch (err) {
      setErr(true);
      setLoading(false);
    }
  };                             

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">BUZZzz..</span>
        <span className="register">Register</span>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="User Name" />
          <input type="email" placeholder="E-Mail" />
          <input type="password" placeholder="Password" />
          <label htmlFor="file">
            <UilImagePlus size="40" />
            <span>Add an avatar</span>
          </label>
          <div style={{height:"10px"}}> 
          {loading && <span style={{fontSize:"8px",color:"aqua"}}>Uploading Avatar...</span> }
          </div>
          <input style={{ display: "none" }} type="file" id="file" />
          <button>Sign Up</button>
          {err && <span> Something Went Wrong </span>}
        </form>
        <p>Have an Account? <Link to={"/login"} style={{color:"aqua",textDecoration:"none"}}>Login</Link></p>
      </div>
      <p style={{
        color: "aqua",
        fontSize: "15px",
        position:"absolute",
        bottom:"7.5%"
      }}>&copy;Deepjais <span style={{fontWeight:"bold"}}>2023</span> </p>
    </div>
    
  );
};

export default Register;
