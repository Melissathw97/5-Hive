import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { Form, FormGroup, Button, Input } from "reactstrap";
import { NavLink as Link } from "react-router-dom";
import styles from "./SignUpForm.module.css";

const SignUpForm = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [slider, setslider] = useState(5);
  const [checkboxes, setCheckboxes] = useState({
    pilates: false,
    weight: false,
    yoga: false,
    swimming: false,
    jogging: false
  })

  const handleCheckbox = e => {
    let newCheckboxes = { ...checkboxes }
    newCheckboxes[e.target.name] = !checkboxes[e.target.name]
    setCheckboxes(newCheckboxes)
    console.log(newCheckboxes)
  }

  const handleSlider = e => {
    setslider(e.target.value);
  };

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
    <div className={styles.step1}>
      <Form>
        <FormGroup>
          <h6 className={styles.title}>
            <span>USERNAME</span>
          </h6>
          <input
            type="text"
            className={styles.input}
            onChange={handleusername}
          />
        </FormGroup>
        <FormGroup>
          <h6 className={styles.title}>
            <span>E-MAIL</span>
          </h6>
          <input type="email" className={styles.input} onChange={handleemail} />
        </FormGroup>
        <FormGroup>
          <h6 className={styles.title}>
            <span>PASSWORD</span>
          </h6>
          <input
            type="password"
            className={styles.input}
            onChange={handlepassword}
          />
        </FormGroup>
      </Form>
    </div>,
    <div className={styles.step2}>
      <Form>
        <FormGroup>
          <h6 className={styles.title}>
            <span>YOUR WEIGHT:</span>
          </h6>
          <input type="number" min="1" max="200" className={styles.input} />
        </FormGroup>
        <FormGroup>
          <h6 className={styles.title}>
            <span>YOUR HEIGHT:</span>
          </h6>
          <input type="number" className={styles.input} />
        </FormGroup>
      </Form>
    </div>,
    <div className={styles.step1}>
      <Form>
        <FormGroup>
          <h5>What is your fitness level?</h5>
          <div className={styles.slidecontainer}>
            <Input
              type="range"
              min="0"
              max="10"
              name="level"
              className={styles.slider}
              onChange={handleSlider}
            />
            <h1>{slider}</h1>
          </div>
        </FormGroup>
      </Form>
    </div>,
    <div className={styles.step3}>
      <Form>
        <h5>What are your preferred exercises?</h5>
        <div className={styles.row1}>
          <div className={styles.checkboxes}>
            <input type="checkbox" id="first" name="pilates" onChange={handleCheckbox} {...checkboxes.pilates ? { checked: true } : { checked: false }} />
            <label className={`hb hb-sm ${styles.hex}`} for="first">
              pilates
            </label>
            <input type="checkbox" id="second" name="weight" onChange={handleCheckbox} {...checkboxes.weight ? { checked: true } : { checked: false }} />
            <label className={`hb hb-sm ${styles.hex}`} for="second">
              weight
              <br /> lifting
            </label>
            <input type="checkbox" id="third" name="yoga" onChange={handleCheckbox} {...checkboxes.yoga ? { checked: true } : { checked: false }} />
            <label className={`hb hb-sm ${styles.hex}`} for="third">
              yoga
            </label>
          </div>
        </div>
        <div className={styles.row2}>
          <div className={styles.checkboxes}>
            <input type="checkbox" id="fourth" name="swimming" onChange={handleCheckbox} {...checkboxes.swimming ? { checked: true } : { checked: false }} />
            <label className={`hb hb-sm ${styles.hex}`} for="fourth">
              swimming
            </label>
            <input type="checkbox" id="fifth" name="jogging" onChange={handleCheckbox} {...checkboxes.jogging ? { checked: true } : { checked: false }} />
            <label className={`hb hb-sm ${styles.hex}`} for="fifth">
              jogging
            </label>
          </div>
        </div>
      </Form>
      <FormGroup>
        <label>
          Others:
              <input type="text" placeholder="please specify" />
        </label>
      </FormGroup>
    </div>
  ];

  const buttonGroup = [
    (
      <div className={styles.nextPrevBtn}>
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
    <div className="page">
      <div className={styles.fullPage}>
        <Button
          className={styles.backButton}
          tag={Link}
          to="/login"
        >
          <i class="fas fa-caret-left"></i>
        </Button>
        <h1>Sign Up</h1>
        <div className={styles.container}>
          {pages[currentPage]}
        </div>
        {buttonGroup[currentPage]}
      </div>
    </div>
  );
};

export default SignUpForm;
