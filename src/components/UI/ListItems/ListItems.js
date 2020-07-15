import React from 'react';
import ListItem from './ListItem/ListItem';

const ListItems = (props) => {
  const listType = props.type;

  const List = (props) =>
    props.listType === 'unsorted' ? (
      <ul>{props.children}</ul>
    ) : (
      <ol>{props.children}</ol>
    );

  const buildListItems = (data) =>
    data.map((item) => (
      <ListItem
        key={item.id}
        id={item.id}
        label={item.label}
        link={item.link}
      />
    ));

  return (
    <div className={props.className}>
      <h3>{props.title}</h3>
      <List listType={listType}>{buildListItems(props.data)}</List>
    </div>
  );
};

ListItems.defaultProps = {
  type: 'unsorted',
  data: [],
  className: 'default',
  title: '',
};

export default ListItems;
