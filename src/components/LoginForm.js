import React from "react";
import styles from "./LoginForm.module.css";
import { Form, FormGroup, Button } from "reactstrap";
import { NavLink as Link } from "react-router-dom";
import Hive from "../assets/images/5-hive.png";
import Image from "react-graceful-image";

const LoginForm = ({
  setisloggedin,
  isloggedin,
  usernameInput,
  setusernameInput,
  passwordInput,
  setpasswordInput,
  handleUser,
  handlePassword,
  submitlog
}) => {
  return (
    <div className="page">
      <div className={styles.containerTop}>
        <div>
          <Image src={Hive} className={styles.logo} />
        </div>
        <div className={styles.form}>
          <h4 className={styles.h4}>Log In</h4>
          <Form>
            <FormGroup>
              <h6 className={styles.h6}>Username</h6>
              <input type="text" onChange={handleUser} />
            </FormGroup>
            <FormGroup>
              <h6 className={styles.h6}>Password</h6>
              <input type="password" onChange={handlePassword} />
            </FormGroup>
            <Button className={styles.loginBtn} onClick={submitlog} style={{ marginTop: "10px", height: "35px", lineHeight: "15px", border: "3px solid #fdbe83", backgroundColor: "transparent", borderRadius: "5px", color: "#f38c2c" }}>
              log in
          </Button>
          </Form>
        </div>
      </div>
      <div className={styles.containerBottom}>
        <h5 style={{ marginTop: "-20px", marginBottom: "-1px" }}>New User?</h5>
        <p>Sign up as:</p>
        <div className={styles.buttons}>
          <Button tag={Link} to="/signup" style={{ backgroundColor: "transparent", padding: "0", border: "transparent" }}>
            <div className={styles.userBtn}>
              <span className="hb hb-sm">USER</span>
            </div>
          </Button>
          <span className={styles.span}>OR</span>
          <div className={styles.mentorBtn}>
            <span className="hb hb-sm">MENTOR</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
