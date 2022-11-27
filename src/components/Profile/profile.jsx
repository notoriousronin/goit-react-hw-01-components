import PropTypes from 'prop-types';

import {
  MainBox,
  UserName,
  Card,
  Photo,
  Tag,
  Location,
  StatList,
  ListItem,
  Quantity,
} from './profile.styled';

const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <MainBox>
      <Photo src={avatar} alt="Profile Avatar" />
      <Card>
        <UserName>{username}</UserName>
        <Tag>{tag}</Tag>
        <Location>{location}</Location>
      </Card>

      <StatList>
        <ListItem>
          <span class="label">Followers: </span>
          <Quantity class="quantity">{followers}</Quantity>
        </ListItem>
        <ListItem>
          <span class="label">Views: </span>
          <Quantity class="quantity">{views}</Quantity>
        </ListItem>
        <ListItem>
          <span class="label">Likes: </span>
          <Quantity class="quantity">{likes}</Quantity>
        </ListItem>
      </StatList>
    </MainBox>
  );
};

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,

  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};

export default Profile;
