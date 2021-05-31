import React,{useEffect} from 'react';
import { auth, provider } from '../firebase';
import styled from 'styled-components';
import { Link,useHistory } from 'react-router-dom';
import {
    selectUserName,
    setSignout,
    setUserLogin,
} from '../components/features/user/userSlice';
import { useSelector,useDispatch } from 'react-redux';

const Header = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const userName = useSelector(selectUserName);


    useEffect(()=> {
        auth.onAuthStateChanged(async(user)=>{
            if(user){
                dispatch(setUserLogin({
                    name: user.displayName,
                    email: user.email,
                    photo: user.photoURL
                }))
                history.push('/');
            }
        })
    },[dispatch,history])
    const signIn = ()=>{
        auth
        .signInWithPopup(provider)
        .then((result)=>{
            let user = result.user
            console.log(result)
            dispatch(setUserLogin({
                name: user.displayName,
                email: user.email,
                photo: user.photoURL
            }))
            history.push('/')
        })
    }

    const signOut = ()=>{
        auth
        .signOut()
        .then(() => {
            dispatch(setSignout())
            history.push('/login')
        })
    }

    return (
        <Nav>
            <Link to="/">
            <Logo src="/images/logo.svg"/>
            </Link>
           { userName ? (
               <>
               <NavMenu>
               <Link to="/">
                   <a href="/#">
                       <img style={{color:'white'}} alt="home" src="/images/home-icon.svg"/>
                       <span style={{textDecoration: 'none'}}>HOME</span>
                   </a>
               </Link>
               
               <Link to="/detail">
               <a href="/#">
                   <img style={{color:'white'}} alt="home" src="/images/search-icon.svg"/>
                   <span style={{textDecoration: 'none'}}>SEARCH</span>
               </a>
               </Link>
               
             <a href="/#">
                   <img style={{color:'white'}} alt="home" src="/images/watchlist-icon.svg"/>
                   <span style={{textDecoration: 'none'}}>WATCHLIST</span>
               </a>
             <a href="/#">
                   <img style={{color:'white'}} alt="home" src="/images/original-icon.svg"/>
                   <span style={{textDecoration: 'none'}}>ORIGINALS</span>
               </a>
             <a href="/#">
                   <img style={{color:'white'}} alt="home" src="/images/movie-icon.svg"/>
                   <span style={{textDecoration: 'none'}}>MOVIES</span>
               </a>
             <a href="/#">
                   <img style={{color:'white'}} alt="home" src="/images/series-icon.svg"/>
                   <span style={{textDecoration: 'none'}}>SERIES</span>
               </a>
           </NavMenu>
   
                  <UserImage onClick={signOut}
                   img src="https://lumiere-a.akamaihd.net/v1/images/ralph-headretina_f6ef0c9b.jpeg?region=0,0,450,450&width=320"/>
         
            </>
               
           ) : <LoginContainer>
                <Login onClick={signIn}>
                    Login
                </Login>
            </LoginContainer>
           
           }
            


            
            
        </Nav>
    );
}

export default Header;

const Nav = styled.nav`
   background: #090b13;
   height: 70px;
   display: flex;
   align-items: center;
   padding: 0 36px;
   overflow-x: hidden;
  ` 
const Logo = styled.img
` width: 80px;`

const NavMenu = styled.div
`  display:flex;
   flex: 1;
   
   margin-left: 25px;
   a {
       color:white;
       display:flex;
       align-items: center;
       padding: 0 12px;
       text-decoration: none;
       cursor: pointer;
       

       img {
           height: 20px;
       }

       span {
        font-size: 13px;
        letter-spacing: 1.2px;
        position: relative;

        &:after {
            content: "";
            height: 2px;
            background:white;
            position: absolute;
            left: 0;
            right: 0;
            bottom: -6px;
            opacity: 0;
            transform-origin: left center;
            transition: all 350ms cubic-bezier(0.15, 0.10, 0.45, 0.94)0s;
            transform: scaleX(0);
        }
       }
       &:hover {
           span:after {
               transform: scaleX(1);
               opacity: 1;
           }
       }
   }
`

const UserImage = styled.img
`   

        width: 48px;
        height: 48px;
        border-radius: 50%;
       cursor: pointer;
       
`

const Login = styled.div
`
margin-right: 20px;
 cursor:pointer;
 background: linear-gradient(110deg, rgba(2,0,36,1) 0%, 
 rgba(9,9,121,0.5324422968258649) 35%, 
 rgba(0,212,255,1) 100%);

 padding: 8px 16px;
 border-radius: 4px;
 letter-spacing: 1.5px;
 text-transform: uppercase;
 


 &:hover {
  
    color: black;
    border: none;
 }
`

const LoginContainer = styled.div
`
 flex: 1;
 display: flex;
 justify-content: flex-end;  
`

