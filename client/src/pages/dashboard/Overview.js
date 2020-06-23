import React from "react";

import styles from "./Overview.module.scss";

export const Overview = (props) => {
  return (
    <div className={styles.overview}>
      <div className={styles.page_views}>page view</div>
      <div className={styles.application_count}>application</div>
      <div className={styles.ranking}>ranking</div>
      <div className={styles.portfolio_strength}>portfolio</div>
      <div className={styles.activity}>activity</div>
      <div className={styles.recommended}>recommended</div>
      <div className={styles.job_snippets}>Jobs</div>
      <div className={styles.ads}>Ads</div>
    </div>
  );
};

export default Overview;
