import {CardWrapper, UserList, UserItem, Line, Logo, Image, ImageWrapper, Tweets, Followers, Button, WrapperTop, WrapperBottom} from "./UserGallery.styled"
import logo from "../../images/Logo-min.png"
import useStore from "../../utils/store";
import PropTypes from 'prop-types';

export const UserGallery = ({users}) => {

  const increaseFollowers = useStore((state) => state.increaseFollowers);
  const decreaseFollowers = useStore((state) => state.decreaseFollowers);
  const toggleButtonStore = useStore((state) => state.toggleButton);

  const toggleButton = (id) => () => {
    
    toggleButtonStore(id)
   
    const followingUser = users[id].isFollowing;

    followingUser ? decreaseFollowers(id) : increaseFollowers(id) 
  }

  return ( 
  <UserList >
    {users.map(({ id, user, tweets, followers, avatar, isFollowing }) => (
  
      <UserItem key={id} >
        <CardWrapper>
          <WrapperTop>
            <Logo> <img src={logo} alt="logo" /> </Logo>
          </WrapperTop>

          <Line />
          <ImageWrapper> <Image src={avatar} alt={user} /> </ImageWrapper>
  
          <WrapperBottom>
     
            <Tweets> {tweets} Tweets </Tweets>
            <Followers> {followers.toLocaleString()} Followers </Followers>
            <Button onClick={toggleButton(id)} colorType={isFollowing} > {isFollowing ? "Following" : "Follow"} </Button>
     
          </WrapperBottom>
        </CardWrapper>
          
      </UserItem>

    ))}

  </UserList> )

}

UserGallery.propTypes = {
    users: PropTypes.arrayOf(
        PropTypes.shape({
            item: PropTypes.objectOf(PropTypes.shape({
                id: PropTypes.number.isRequired,
                key: PropTypes.number.isRequired,
                user: PropTypes.string.isRequired,
                tweets: PropTypes.number.isRequired,
                followers: PropTypes.number.isRequired,
                avatar: PropTypes.string.isRequired,
                isFollowing: PropTypes.bool.isRequired,
            }),)
        }),
    )
}

