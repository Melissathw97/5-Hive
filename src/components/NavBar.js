import React from "react";
import styles from "./NavBar.module.css";
import { NavLink as Link } from "react-router-dom";
import { Button } from "reactstrap";

const NavBar = () => {
  return (
    <div className={styles.navbar}>
      <div>
        <Button
          tag={Link}
          to="/nearby"
          className={styles.grid}
          style={{ color: "#cf6f15" }}
        >
          <i className="fas fa-street-view"></i>
          <br />
          Nearby
        </Button>
      </div>
      <div>
        <Button
          tag={Link}
          to="/match"
          className={styles.grid}
          style={{ color: "#e47915" }}
        >
          <i className="fas fa-user-friends"></i>
          <br />
          Match
        </Button>
      </div>
      <div>
        <Button
          tag={Link}
          to="/challenges"
          className={styles.fit}
          style={{ color: "#fcefe3" }}
        >
          <span className={`hb hb-sm ${styles.hex}`}>
            <i className={`fas fa-dumbbell ${styles.fitIcon}`}></i>
            <br />
            FIT
          </span>
        </Button>
      </div>
      <div>
        <Button
          tag={Link}
          to="/chatlist"
          className={styles.grid}
          style={{ color: "#fcfcfc" }}
        >
          <i className="fas fa-comments"></i>
          <br />
          Chat
        </Button>
      </div>
      <div>
        <Button tag={Link} to="/myprofile" className={styles.grid}>
          <i className="fas fa-user"></i>
          <br />
          Profile
        </Button>
      </div>
    </div>
  );
};

export default NavBar;
