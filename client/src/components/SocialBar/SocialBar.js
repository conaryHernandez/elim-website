import React from 'react';
import classes from './SocialBar.module.scss';

// in the future data can be passed as props;
import socialData from './socialData';

const SocialBar = props => {
  return (
    <div className={classes.SocialBar}>
      {socialData.map(social => (
        <a key={social.id} href={social.link} className={classes.Item}>
          <i className={`icon-${social.name}`} />
          <i className="icon-radio-unchecked" />
        </a>
      ))}
    </div>
  );
};

SocialBar.defaultProps = {
  socialData: []
};

export default SocialBar;
