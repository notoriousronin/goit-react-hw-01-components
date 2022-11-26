import {
  MainBox,
  UserName,
  Card,
  Photo,
  Tag,
  Location,
  StatList,
  ListItem,
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
          <span class="quantity">{followers}</span>
        </ListItem>
        <ListItem>
          <span class="label">Views: </span>
          <span class="quantity">{views}</span>
        </ListItem>
        <ListItem>
          <span class="label">Likes: </span>
          <span class="quantity">{likes}</span>
        </ListItem>
      </StatList>
    </MainBox>
  );
};

export default Profile;
