import React,{useState,useEffect} from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import  db  from  '../firebase';

const Detail = () => {
    const { id } = useParams();
    const [ movie, setMovie] = useState([]);


    useEffect(()=>{
        db.collection("movies")
        .doc(id)
        .get()
        .then((doc)=>{
            if(doc.exists){
                setMovie(doc.data())
            }else{
                //redirect
            }
        })

    },[id])
    console.log("Movie is: ", movie)
    return (
        <Container>
            <Background>
                <img src={movie.backgroundImg} alt="img1"/>
 
                
            </Background>
            <ImgTitle>
                    <img alt="pao" 
                        src={movie.titleImg} />
             </ImgTitle>
             <Controls>
                 <PlayButton>
                    <img src="/images/play-icon-black.png" alt="img1"/>
                    <span>PLAY</span>
                 </PlayButton>
                 <TrailerButton>
                 <img src="/images/play-icon-white.png" alt="img2"/>
                    <span>Trailer</span>
                 </TrailerButton>
                 <AddButton>
                     <span> + </span>
                 </AddButton>
                 <GroupWatchButton>
                        <img src="/images/group-icon.png" alt="img3"/>

                 </GroupWatchButton>

             </Controls>
             <Subtitle>
                 {movie.subTitle}
             </Subtitle>
             <Description>
                 {movie.description}
             </Description>

          
        </Container>
    );
}

export default Detail;

const Container = styled.div
`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
    
`

const Background = styled.div 
`
    position: fixed;
    top:0;
    bottom: 0;
    right: 0 ;
    left: 0;
    z-index: -1;
    opacity: 0.8;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        
    }

`

const ImgTitle = styled.div 
`
height: 30vh;
min-height: 30vh;
width: 35vw;
padding-bottom: 15px;
padding-top: 15px;
   

    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
       
    }
`

const Controls = styled.div
`
  display: flex;
  justify-content: left;
  align-items: center;

`

const PlayButton = styled.button
`
  border-radius: 5px;
  font-size: 15px;
  display: flex;
  align-items: center;
  height: 55px;
  background: rgb(250,250,250);
  border: none;
  padding: 0px 25px;
  border: none;
  letter-spacing: 1.8px;
  cursor: pointer;
  margin-right: 15px;

  &:hover {
      background: rgb(198,198,198);
  }
`
const TrailerButton = styled(PlayButton)
`
 background: rgba(0,0,0,0.3);
 border: 1px solid rgba(249,249,249);
 color: rgb(249,249,249);
`
const AddButton = styled.button
`
  margin-right: 15px;
  display: flex;
  
  justify-content: center;
  border-radius: 50%;
  border: 2px solid white;
  background-color: rgba(0,0,0,0.6);
  cursor: pointer;
  height: 44px;
      width: 44px;

  span {
      font-size: 27px;
      color: white;
  
  }

  &:hover {
    background-color: rgba(215, 184, 176,0.9);
  }
`
const GroupWatchButton = styled(AddButton)
`
      
span {
      font-size: 30px;
      color: white;
      
  }
`

const Subtitle = styled.div
`
 color: rgb(249,249,249);
 font-size: 15px;
 min-height: 20px;
 margin-top: 26px;
`

const Description = styled.div
`
 line-height: 1.4;
 font-size: 20px;
 margin-tip: 16px;
 color: rgb(249,249,249);
 max-width: 700px;
`
