import PropTypes from 'prop-types';
import FriendListItem from 'components/FriendListItem/friendListItem';
import { MainBox } from 'components/Profile/profile.styled';
import { StyledFriendsList } from './friends.styled';

const FriendList = ({ friends }) => {
  return (
    <MainBox>
      <StyledFriendsList>
        {friends.map(({ id, avatar, name, isOnline }) => (
          <FriendListItem
            key={id}
            avatar={avatar}
            name={name}
            isOnline={isOnline}
          />
        ))}
      </StyledFriendsList>
    </MainBox>
  );
};

FriendList.propTypes = {
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
