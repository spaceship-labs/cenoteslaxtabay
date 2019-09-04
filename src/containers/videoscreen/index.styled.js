import styled from "styled-components";

const VideoWrapper = styled.section`
  margin-bottom: 80px;
  width: 100%;
  position: relative;
  video {
    width: 100%;
  }
`;

const Tumbnail = styled.div`
  img {
    display: block;
    margin: 0;
    position: relative;
    z-index: 0;
    width: 100%;
  }
  i {
    position: absolute;
    z-index: 2;
    color: white;
    left: 50%;
    font-size: 80px;
    margin-left: -35px;
    top: 50%;
    margin-top: -35px;
  }
  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 1;
  }
`;

export { VideoWrapper, Tumbnail };
