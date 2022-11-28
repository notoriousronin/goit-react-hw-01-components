import styled from '@emotion/styled';

export const StyledFriendsList = styled.ul`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const MyFriend = styled.li`
  margin-bottom: 30px;

  padding: 35px;
  align-items: center;
  background-color: #fafad2;
  font-weight: bold;
  font-size: 17px;
  color: #0000ff;
  display: flex;
  width: 100%;
  justify-content: space-around;
`;

export const FriendsStatus = styled.span`
  background-color: ${props => (props.isOnline ? 'green' : 'brown')};
  display: block;
  border-radius: 50%;
  width: 20px;
  height: 20px;
`;
