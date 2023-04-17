import React, {Component} from 'react'
import withRouter from './withRouter';
const videoStyle = 
{
  width : "50vw",
  height : "58vh",
}

class Video extends Component{
  constructor()
  {
    super();
    this.state = {
    properties: {},
    isLoading: true
    }
  }

  fetchInfo()
  {
    fetch('/video/' + this.props.params.id,
    {
    	method: "GET",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    })

    .then(res => res.json())
    .then(data => {
      //Remember setState is asynchronous!
      this.setState({ properties: data, isLoading: false}, () => 
      console.log(this.state.properties));
    })

    .catch(error => console.warn(error));
  }

  componentDidMount()
  {
    this.fetchInfo();
  }
  render()
  {
    if (this.state.isLoading) {
      return null;
    }
    return (
      <video style={videoStyle} controls controlsList="nodownload" poster = {'/image/' + this.state.properties.imgPath}>
        <source src = {'/stream/' + this.state.properties.path} type='video/webm'></source>
      </video>
    )
  }
}

export default withRouter(Video)