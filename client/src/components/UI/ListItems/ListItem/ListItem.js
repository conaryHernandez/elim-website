import React from 'react';
import { Link } from 'react-router-dom';

import classes from './ListItem.module.scss';

const ListItem = props => {
  return (
    <Link to={props.link} className={classes.ListItem}>
      {props.label}
    </Link>
  );
};

ListItem.defaultProps = {
  link: '#',
  label: 'Item',
  className: 'default'
};

export default ListItem;
