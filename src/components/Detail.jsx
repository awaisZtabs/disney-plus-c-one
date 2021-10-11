import React from "react";
import styled from "styled-components";

function Detail() {
  return (
    <Container>
      <Background>
        <img
          alt=""
          src="https://www.xtrafondos.com/wallpapers/resized/sylvie-sophia-di-martino-serie-loki-8048.jpg?s=large"
        />
      </Background>
      <ImageTitle>
        <img alt="" src="/images/loki-logo.png" />
      </ImageTitle>
      <Controls>
        <PlayButton>
          <img alt="" src="/images/play-icon-black.png" />
          <span>Play</span>
        </PlayButton>
        <TrailerButton>
          <img alt="" src="/images/play-icon-white.png" />
          <span>Trailer</span>
        </TrailerButton>
        <AddButton>
          <span>+</span>
        </AddButton>
        <GroupWatchButton>
          <img src="images/group-icon.png" alt="" />
        </GroupWatchButton>
      </Controls>
      <SubTitle>First episode date: June 9, 2021</SubTitle>
      <Description>
        Loki, the God of Mischief, steps out of his brother's shadow to embark
        on an adventure that takes place after the events of "Avengers: Endgame.
        Loki, the God of Mischief, steps out of his brother's shadow to embark
        on an adventure that takes place after the events of "Avengers:
        Endgame."
      </Description>
    </Container>
  );
}

export default Detail;
const Container = styled.div`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
`;
const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  opacity: 0.8;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const ImageTitle = styled.div`
  height: 30vw;
  min-height: 170px;
  min-width: 100px;
  width: 35vw;
  img {
    width: 90%;
    height: 90%;
    object-fit: contain;
  }
`;
const Controls = styled.div`
  display: flex;
  align-items: center;
`;
const PlayButton = styled.div`
  font-size: 15px;
  margin: 0px 22px 0px 0px;
  padding: 0px 24px;
  height: 56px;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 1.8px;
  text-align: center;
  text-transform: uppercase;
  background: #f9f9f9;
  border: none;
  color: rgb(0, 0, 0);
  img {
    width: 32px;
  }
  &:hover {
    background: rgb(198, 198, 198);
  }
`;
const TrailerButton = styled(PlayButton)`
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);
`;
const AddButton = styled.div`
  margin-right: 16px;
  height: 44px;
  width: 44px;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 50%;
  border: 2px solid white;
  cursor: pointer;
  span {
    margin-top: -8px;
    // background-color: rgb(249, 249, 249);
    font-size: 30px;
    color: white;
    display: inline-block;
  }
`;
const GroupWatchButton = styled(AddButton)`
  background-color: rgb(0, 0, 0);
`;
const SubTitle = styled.div`
  color: rgb(249, 249, 249);
  font-size: 15px;
  min-height: 20px;
  margin-top: 20px;
`;
const Description = styled.div`
  line-height: 1.4;
  color: rgb(249, 249, 249);
  font-size: 20px;
  min-height: 20px;
  margin-top: 16px;
`;
