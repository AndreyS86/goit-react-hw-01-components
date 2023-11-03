import {
  ProfileDescr,
  ProfileDiv,
  ProfileImg,
  ProfileLabel,
  ProfileLocation,
  ProfileName,
  ProfileQuantity,
  ProfileStats,
  ProfileStatsItem,
  ProfileTag,
} from './Profile.styled';

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  followers,
  views,
  likes,
}) => {
  return (
    <ProfileDiv>
      <ProfileDescr>
        <ProfileImg src={avatar} alt="User avatar" />
        <ProfileName>{username}</ProfileName>
        <ProfileTag>{tag}</ProfileTag>
        <ProfileLocation>{location}</ProfileLocation>
      </ProfileDescr>

      <ProfileStats>
        <ProfileStatsItem>
          <ProfileLabel>Followers</ProfileLabel>
          <ProfileQuantity>{followers}</ProfileQuantity>
        </ProfileStatsItem>
        <ProfileStatsItem>
          <ProfileQuantity>Views</ProfileQuantity>
          <ProfileQuantity>{views}</ProfileQuantity>
        </ProfileStatsItem>
        <ProfileStatsItem>
          <ProfileQuantity>Likes</ProfileQuantity>
          <ProfileQuantity>{likes}</ProfileQuantity>
        </ProfileStatsItem>
      </ProfileStats>
    </ProfileDiv>
  );
};
