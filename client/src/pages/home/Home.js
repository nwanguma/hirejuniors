import React, { useState } from "react";

import eyeClosed from "../../assets/images/eyeClosed.svg";
import eyeOpen from "../../assets/images/eyeOpen.svg";
import landingPageIllustration from "../../assets/images/Group of Black Men and Women in Office Setting B.svg";

import styles from "./Home.module.scss";

export const Home = (props) => {
  const [showPasswordText, setShowPasswordText] = useState(false);

  return (
    <div className={styles.container}>
      <section className={styles.landing}>
        <div className={styles.content}>
          <div className={styles.tag}>
            <p>Africa's greatest talent all in one place.</p>
          </div>
          <div className={styles.authContainer}>
            <form className={styles.form} autoComplete="off">
              <div className={styles.heading}>
                <h3 className={styles.headingPrimary}>Sign in</h3>
                <p className={styles.headingSecondary}>
                  To sign in, please type in the email address linked to your
                  hireJuniors account and your hireJuniours password.
                </p>
              </div>
              <div className={styles.usernameField}>
                <label for="username">Username or Email</label>
                <input
                  name="username"
                  type="text"
                  placeholder="user@email.com"
                />
              </div>
              <div className={styles.passwordField}>
                <label for="password">Password</label>
                <input
                  name="password"
                  type={showPasswordText ? "text" : "password"}
                  placeholder="****"
                />
                <span onClick={(e) => setShowPasswordText(!showPasswordText)}>
                  <img
                    src={showPasswordText ? eyeClosed : eyeOpen}
                    alt="eye icon"
                  />
                </span>
              </div>
              <button>Sign In</button>
            </form>
          </div>
        </div>
        <div className={styles.landingIllustration}>
          <img src={landingPageIllustration} alt="young people in office" />
        </div>
      </section>
      <section className={styles.about}>
        <div className={styles.aboutContainer}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </section>
    </div>
  );
};

export default Home;
