import React, { Component } from "react";
import { VideoWrapper, Tumbnail } from "./index.styled";
import thumbnail from "../../theme/img/LOCHE_79.JPG";
import video from "../../theme/xtabay_video.mp4";

class VideoScreenContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      video: (
        <Tumbnail onClick={this.loadVideo}>
          <i className="icon-play" />
          <img alt="La Xtabay Cenote" src={thumbnail} />
        </Tumbnail>
      )
    };
  }
  componentDidMount() {
    this.props.mount("thevideo");
  }
  loadVideo = () => {
    const newVideo = (
      <video autoPlay muted controls playsInline loop id="videoInt">
        <source src={video} type="video/mp4" />
      </video>
    );
    this.setState({ video: newVideo });
  };
  render() {
    return <VideoWrapper id="thevideo">{this.state.video}</VideoWrapper>;
  }
}

export default VideoScreenContainer;
