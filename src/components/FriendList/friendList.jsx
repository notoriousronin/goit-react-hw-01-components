import PropTypes from 'prop-types';
import { MainBox } from 'components/Profile/profile.styled';
import { FriendsList, MyFriend } from './friends.styled';
import styles from './friends.module.css';

const FriendList = ({ friends }) => {
  return (
    <MainBox>
      <FriendsList class="friend-list">
        {friends.map(({ id, avatar, name, isOnline }) => (
          <MyFriend key={id} class="item">
            <span className={isOnline ? styles.online : styles.offline}></span>
            <img class="avatar" src={avatar} alt={name} width="48" />
            <p class="name">{name}</p>
          </MyFriend>
        ))}
      </FriendsList>
    </MainBox>
  );
};

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
    })
  ),
};

export default FriendList;
