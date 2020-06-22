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
            <p>Africa's greatest talents all in one place.</p>
          </div>
          <div className={styles.auth_container}>
            <form className={styles.form} autoComplete="off">
              <div className={styles.heading}>
                <h3 className={styles.heading_primary}>Sign in</h3>
                <p className={styles.heading_secondary}>
                  To sign in, please type in the email address linked to your
                  hireJuniors account and your hireJuniors password.
                </p>
              </div>
              <div className={styles.username_field}>
                <label htmlFor="username">Username or Email</label>
                <input
                  name="username"
                  type="text"
                  placeholder="user@email.com"
                />
              </div>
              <div className={styles.password_field}>
                <label htmlFor="password">Password</label>
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
              <div className={styles.submit}>
                <button>Sign In</button>
                <p>Forgot password?</p>
              </div>
              <p>Not registered? create account</p>
            </form>
          </div>
        </div>
        <div className={styles.landing_illustration}>
          <img src={landingPageIllustration} alt="young people in an office" />
        </div>
      </section>
      <section className={styles.about}>
        <div className={styles.container}>
          <div>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque
            libero illum laboriosam saepe velit quod vero accusantium ipsam
            magnam. Facere, ea. Ullam vitae quibusdam, minus incidunt quod
            mollitia labore facilis.
          </div>
          <div>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque
            libero illum laboriosam saepe velit quod vero accusantium ipsam
            magnam. Facere, ea. Ullam vitae quibusdam, minus incidunt quod
            mollitia labore facilis.
          </div>
          <div>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque
            libero illum laboriosam saepe velit quod vero accusantium ipsam
            magnam. Facere, ea. Ullam vitae quibusdam, minus incidunt quod
            mollitia labore facilis.
          </div>
        </div>
      </section>
      <section className={styles.job_snippets}>
        <div className={styles.container}>
          <div>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque
            libero illum laboriosam saepe velit quod vero accusantium ipsam
            magnam. Facere, ea. Ullam vitae quibusdam, minus incidunt quod
            mollitia labore facilis.
          </div>
          <div>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque
            libero illum laboriosam saepe velit quod vero accusantium ipsam
            magnam. Facere, ea. Ullam vitae quibusdam, minus incidunt quod
            mollitia labore facilis.
          </div>
          <div>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque
            libero illum laboriosam saepe velit quod vero accusantium ipsam
            magnam. Facere, ea. Ullam vitae quibusdam, minus incidunt quod
            mollitia labore facilis.
          </div>
        </div>
      </section>
      <section className={styles.talent_snippets}>
        <div className={styles.container}>
          <div>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque
            libero illum laboriosam saepe velit quod vero accusantium ipsam
            magnam. Facere, ea. Ullam vitae quibusdam, minus incidunt quod
            mollitia labore facilis.
          </div>
          <div>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque
            libero illum laboriosam saepe velit quod vero accusantium ipsam
            magnam. Facere, ea. Ullam vitae quibusdam, minus incidunt quod
            mollitia labore facilis.
          </div>
          <div>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque
            libero illum laboriosam saepe velit quod vero accusantium ipsam
            magnam. Facere, ea. Ullam vitae quibusdam, minus incidunt quod
            mollitia labore facilis.
          </div>
        </div>
      </section>
      <section className={styles.partners}>
        <div className={styles.container}>
          <div>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque
            libero illum laboriosam saepe velit quod vero accusantium ipsam
            magnam. Facere, ea. Ullam vitae quibusdam, minus incidunt quod
            mollitia labore facilis.
          </div>
          <div>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque
            libero illum laboriosam saepe velit quod vero accusantium ipsam
            magnam. Facere, ea. Ullam vitae quibusdam, minus incidunt quod
            mollitia labore facilis.
          </div>
          <div>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque
            libero illum laboriosam saepe velit quod vero accusantium ipsam
            magnam. Facere, ea. Ullam vitae quibusdam, minus incidunt quod
            mollitia labore facilis.
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
