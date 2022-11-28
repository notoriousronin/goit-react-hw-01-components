import { MyFriend } from './friends.styled';
// import styles from './friends/module.css';

const FriendListItem = ({ avatar, name, isOnline, id }) => {
  return (
    <MyFriend key={id}>
      {/* <span className={isOnline ? styles.online : styles.offline}></span> */}
      <img src={avatar} alt={name} width="48" />
      <p>{name}</p>
    </MyFriend>
  );
};

export default FriendListItem;
