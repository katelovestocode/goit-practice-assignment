import styled from 'styled-components';
import background from "../../images/picture-min.png"

export const CardWrapper = styled.div`
position: relative;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
width: 380px;
height: 460px;

background: ${p => p.theme.colors.background};
box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
border-radius:  ${p => p.theme.radii.small};
`

export const UserList = styled.ul`
display: flex;
align-items: center;
justify-content: center;
gap: 30px;
`

export const UserItem = styled.li``

export const ImageWrapper = styled.div`
position: absolute;
top: 178px;
display: flex;
align-items: center;
justify-content: center;
height: 80px;
width: 80px; 
border-radius:  ${p => p.theme.radii.round};
background: ${p => p.theme.colors.accent};
box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06), inset 0px -2.19582px 4.39163px #AE7BE3, inset 0px 4.39163px 3.29372px #FBF8FF;
`


export const Image = styled.img`
border-radius:  ${p => p.theme.radii.round};
width: 62px; 
height: 62px;
object-fit: cover;
`

export const Line = styled.div`
position: absolute;
top: 214px;
height: 8px;
width: 380px; 
background: ${p => p.theme.colors.accent};
box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06), inset 0px -2.19582px 4.39163px #AE7BE3, inset 0px 4.39163px 3.29372px #FBF8FF;
`


export const Logo = styled.div`
padding: 20px 0 0 20px;
`

export const WrapperTop = styled.div`
  background: url(${background});
  background-position: top 28px center;
  background-repeat: no-repeat;

   height: 100%;
   width: 100%;

`

export const WrapperBottom = styled.div`
disply: flex;
align-items: center;
justify-content: center;
text-align: center;
height: 100%;

`

export const CommonStyle = styled.p`
font-size: ${p => p.theme.fontSizes[4]}px;
font-weight: ${p => p.theme.fontWeights.medium};
color:  ${p => p.theme.colors.accent};
text-transform: uppercase;
line-height: 1.2;
font-family: ${p => p.theme.fonts.body};`



export const Tweets = styled(CommonStyle)`
margin-top: 54px;

`

export const Followers = styled(CommonStyle)`
margin-top: 16px;
`

export const Button = styled.button`
font-size: ${p => p.theme.fontSizes[3]}px;
font-weight: ${p => p.theme.fontWeights.semibold};
color:  ${p => p.theme.colors.black};
line-height: 1.2;
text-transform: uppercase;
padding: ${props =>
  props.colorType ? "14px 39px" : "14px 56px"}; ;
margin-top: 26px;
border-radius:  ${p => p.theme.radii.tiny};
background: ${props =>
  props.colorType ? props.theme.colors.green : props.theme.colors.aceent};
box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
border: none;
transition: background 250ms cubic-bezier(0.4, 0, 0.2, 1);
`