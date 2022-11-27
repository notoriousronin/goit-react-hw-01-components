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

export default Profile;
