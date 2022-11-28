import { MyFriend } from './friends.styled';

import { FriendsStatus } from 'components/FriendList/friends.styled';

const FriendListItem = ({ avatar, name, isOnline, id }) => {
  return (
    <MyFriend key={id}>
      <FriendsStatus isOnline={isOnline}></FriendsStatus>
      <img src={avatar} alt={name} width="48" />
      <p>{name}</p>
    </MyFriend>
  );
};

export default FriendListItem;
