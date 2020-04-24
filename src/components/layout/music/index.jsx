import React from 'react'
import config from '../../../utils/config'
import path from 'path'
import s from './style.module.css'
// let musicIsLoaded = false

class Music extends React.Component {

  state = {
    musicUrl: '/static/bg.mp3',
    isPlaying: false,
    canplay: false
  }

//   componentDidMount() {
//     // console.log("music ", this.refs.audio_element)
//     // this.refs.audio_element.play()
//     // this.refs.audio_element.onloadeddata(()=>{
//     //     console.log("加载完成")
//     // })
//     // musicIsLoaded = true
//     this.refs.audio_element.addEventListener('canplay',()=>{
        
//     })
//   }
  canplayHandler=()=>{
    console.log("ok");
    this.setState({
        canplay:true
    })
  }
//   shouldComponentUpdate() {
//     return !musicIsLoaded
//   }

  changePlayState = () => {
    console.log(this.state.canplay);
    this.setState({
        isPlaying: !this.state.isPlaying,
    })
    if (this.state.isPlaying) {
        // if(!this.state.canplay){
        //     return
        // }
        console.dir(this.refs.audio_element);
    //    this.refs.audio_element.pause()
        const pause= this.refs.audio_element.play();
        pause.then(()=>{
        console.log("audio played auto");
        }).catch(error => {
        // Auto-play was prevented
        // Show paused UI.
        console.log(error);
        });
    } else {
        // if(!this.state.canplay){
        //     return
        // }
    this.refs.audio_element.pause();
    //   console.log(pause);
    //   pause.then((message)=>{
    //     console.log(message);
    //   }).catch(error => {
    //     // Auto-play was prevented
    //     // Show paused UI.
    //     console.log(error);
    //   });
    }
  }
  errorHandler=(error)=>{
    console.log(error)
  }
  render() {
    const { isPlaying, musicUrl } = this.state
    // console.log("sss", isPlaying) autoPlay
    return (
      <div id="audio-box">
        { !isPlaying && <span className="audio-muted" /> }
        
        <a className="audio-btn" onClick={this.changePlayState} />
        <audio ref="audio_element" preload="true" type="audio/mpeg" onCanPlay={this.canplayHandler} controls loop src={musicUrl} />
      </div>
    )
  }
}

export default Music