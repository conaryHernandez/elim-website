import React from "react";
import classes from "./SocialBar.module.scss";

const SocialBar = props => {
  return (
    <div className={`${classes.SocialBar} ${props.className}`}>
      {props.networks?.map(social => (
        <a key={social.id} href={social.link} className={classes.Item}>
          <i className={`icon-${social.name}`} />
          {/* <i className="icon-radio-unchecked" /> */}
        </a>
      ))}
    </div>
  );
};

SocialBar.defaultProps = {
  socialData: [],
  className: "default"
};

export default SocialBar;
