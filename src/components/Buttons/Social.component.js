import React from "react";

import styles from "./Buttons.module.css";

const Social = (props) => {
  const { children } = props;
  return (
    <button className={`${styles.socialButton} bg-primary-green text-white`}>
      {children}
    </button>
  );
};

export default Social;
