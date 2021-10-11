import React from "react";
import styled from "styled-components";

function Movies() {
  return (
    <Container>
      <h4>Recommended for You</h4>
      <Content>
        <Wrap>
          <img
            src="https://resizing.flixster.com/KdsWkcjagkGyctTzHPXfwi38Mps=/fit-in/1152x864/v2/https://flxt.tmsimg.com/assets/p9691630_b_h9_ag.jpg"
            alt=""
          />
        </Wrap>
        <Wrap>
          <img
            src="https://i.gadgets360cdn.com/large/loki_tom_hiddleston_crop_1622797154582.jpg"
            alt=""
          />
        </Wrap>
        <Wrap>
          <img
            src="https://resizing.flixster.com/U8fIAZ_ZjKvk_JHKlP0bNGk-fww=/fit-in/1152x864/v2/https://flxt.tmsimg.com/assets/p185846_b_h9_ad.jpg"
            alt=""
          />
        </Wrap>
        <Wrap>
          <img
            src="https://see.news/wp-content/uploads/2019/12/images-1-715x375.jpg"
            alt=""
          />
        </Wrap>
      </Content>
    </Container>
  );
}

export default Movies;
const Container = styled.div``;
const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  grid-gap: 25px;
`;
const Wrap = styled.div`
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  border: 3px solid rgba(249, 249, 249, 0.1);
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  img {
    width: 100%;
    object-fit: cover;
    height: 100%;
  }
  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
  }
`;
