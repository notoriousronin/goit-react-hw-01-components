import styles from './friends.module.css';

const FriendList = ({ friends }) => {
  return (
    <ul class="friend-list">
      {friends.map(({ id, avatar, name, isOnline }) => (
        <li key={id} class="item">
          <span className={isOnline ? styles.online : styles.offline}></span>
          <img class="avatar" src={avatar} alt={name} width="48" />
          <p class="name">{name}</p>
        </li>
      ))}
    </ul>
  );
};

export default FriendList;
