import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { Form, FormGroup, Label, Button, Input } from "reactstrap";
import { NavLink as Link } from "react-router-dom";
import styles from "./SignUpForm.module.css"

const SignUpForm = () => {
  const [currentPage, setCurrentPage] = useState(0)
  const [slider, setslider] = useState(5)

  const handleSlider = e => {
    setslider(e.target.value)
  }

  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const handleusername = e => {
    setusername(e.target.value);
  };

  const handleemail = e => {
    setemail(e.target.value);
  };

  const handlepassword = e => {
    setpassword(e.target.value);
  };

  let history = useHistory();

  const signup = (username, email, password) => {
    if (username && email && password) {
      axios({
        method: "POST",
        url: "https://fivehive.herokuapp.com/api/v1/users/new",
        data: {
          username: username,
          email: email,
          password: password
        }
      })
        .then(result => {
          console.log(result);
          history.push("/login");
        })
        .catch(error => {
          console.log(error.response);
        });
    } else {
      console.log("some fields are missing");
    }
  };

  const pages = [
    (<div className={styles.step1}>
      <Form >
        <FormGroup>
          <h6 className={styles.title}><span>USERNAME</span></h6>
          <input
            type="text" className={styles.input} onChange={handleusername}
          />
        </FormGroup>
        <FormGroup>
          <h6 className={styles.title}><span>E-MAIL</span></h6>
          <input type="email" className={styles.input} onChange={handleemail} />
        </FormGroup>
        <FormGroup>
          <h6 className={styles.title}><span>PASSWORD</span></h6>
          <input
            type="password" className={styles.input} onChange={handlepassword}
          />
        </FormGroup>
      </Form>
    </div>),
    (
      <div className={styles.step2}>
        <Form>
          <FormGroup>
            <h6 className={styles.title}><span>YOUR WEIGHT:</span></h6>
            <input
              type="number" min="1" max="200" className={styles.input}
            />
          </FormGroup>
          <FormGroup>
            <h6 className={styles.title}><span>YOUR HEIGHT:</span></h6>
            <input type="number" className={styles.input} />
          </FormGroup>
        </Form>
      </div>),
    (
      <div className={styles.step1}>
        <Form >
          <FormGroup>
            <h5>What is your fitness level?</h5>
            <div className={styles.slidecontainer}>
              <Input type="range" min="0" max="10" name="level" className={styles.slider} onChange={handleSlider} />
              <h1>{slider}</h1>
            </div>
          </FormGroup>
        </Form>
      </div>
    ),
    (
      <div className={styles.step2}>
        <Form>
          <h5>What are your preferred exercises?</h5>
          <div className={styles.row1}>
            <div className={styles.checkboxes}>
              <input type="checkbox" id="first" />
              <label className={`hb hb-sm ${styles.hex}`} for="first">pilates</label>
              <input type="checkbox" id="second" />
              <label className={`hb hb-sm ${styles.hex}`} for="second">weight<br /> lifting</label>
              <input type="checkbox" id="third" />
              <label className={`hb hb-sm ${styles.hex}`} for="third">yoga</label>
            </div>
          </div>
          <div className={styles.row2}>
            <div className={styles.checkboxes}>
              <input type="checkbox" id="fourth" />
              <label className={`hb hb-sm ${styles.hex}`} for="fourth">swimming</label>
              <input type="checkbox" id="fifth" />
              <label className={`hb hb-sm ${styles.hex}`} for="fifth">jogging</label>
            </div>
          </div>
        </Form>
      </div >
    ),
    (
      <div className={styles.step2}>
        <Form>
          <h5>What are your preferred exercises?</h5>
          <div className={styles.row1}>
            <div className={styles.checkboxes}>
              <input type="checkbox" id="first" />
              <label className={`hb hb-sm ${styles.hex}`} for="first"></label>
              <input type="checkbox" id="second" />
              <label className={`hb hb-sm ${styles.hex}`} for="second"></label>
              <input type="checkbox" id="third" />
              <label className={`hb hb-sm ${styles.hex}`} for="third"></label>
            </div>
          </div>
          <div className={styles.row2}>
            <div className={styles.checkboxes}>
              <input type="checkbox" id="fourth" />
              <label className={`hb hb-sm ${styles.hex}`} for="fourth"></label>
              <input type="checkbox" id="fifth" />
              <label className={`hb hb-sm ${styles.hex}`} for="fifth"></label>
            </div>
          </div>
        </Form>
      </div >
    )
  ]

  const buttonGroup = [
    (
      <button className={`mx-auto d-block ${styles.nextBtn}`} onClick={() => setCurrentPage(currentPage + 1)}>
        next >>
      </button>
    ),
    (
      <div className={styles.nextPrevBtn}>
        <button className={styles.nextBtn} onClick={() => setCurrentPage(currentPage - 1)}>
          &lt;&lt; previous
        </button>
        <button className={styles.nextBtn} onClick={() => setCurrentPage(currentPage + 1)}>
          next >>
        </button>
      </div>
    ),
    (
      <div className={styles.nextPrevBtn}>
        <button className={styles.nextBtn} onClick={() => setCurrentPage(currentPage - 1)}>
          &lt;&lt; previous
        </button>
        <button className={styles.nextBtn} onClick={() => setCurrentPage(currentPage + 1)}>
          next >>
        </button>
      </div>
    ),
    (
      <div className={styles.nextPrevBtn}>
        <button className={styles.nextBtn} onClick={() => setCurrentPage(currentPage - 1)}>
          &lt;&lt; previous
        </button>
        <button className={styles.nextBtn} onClick={() => setCurrentPage(currentPage + 1)}>
          next >>
        </button>
      </div>
    ),
    (
      <div className={styles.nextPrevBtn}>
        <button className={styles.nextBtn} onClick={() => setCurrentPage(currentPage - 1)}>
          &lt;&lt; previous
        </button>
        <button className={styles.nextBtn} onClick={() => signup(username, email, password)}>
          sign me up!
        </button>
      </div>
    )
  ]

  return (
    <div className={styles.fullPage}>
      <Button tag={Link} to="/login" style={{
        top: "20px", left: "20px", position: "absolute", borderRadius: "50%", height: "35px", width: "35px", fontSize: "2em", display: "flex",
        paddingTop: "23px",
        alignItems: "center", justifyContent: "center", backgroundColor: "#fdbe83", border: "none", color: "slategray"
      }}>
        <p>&lt;</p>
      </Button>
      <h1>Sign Up</h1>
      <div className={styles.container}>
        {pages[currentPage]}
      </div>
      {buttonGroup[currentPage]}
    </div>
  );
};

export default SignUpForm;
