import React, { Component } from 'react'
import Slide from './slide'
import LeftArrow from './left-arrow'
import RightArrow from './right-arrow'
import ProgressBar from './progress-bar'
import NavButton from './nav-buttons'
import { useSwipeable, Swipeable } from 'react-swipeable'

export default class Slider extends Component {
  constructor(props) {
    super(props)

    this.state = {
      images: [
        "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/aurora.jpg",
        "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/canyon.jpg",
        "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/city.jpg",
        "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/desert.jpg",
      ],
      currentIndex: 0,
      translateValue: 0,
      transitionTime: 0.65,
      percentage: 0,
      transitionBarTime: 0.65,
      autoPlay: false
    }
  }

  componentDidMount() {
    // this.fillBar();
  }

  goToPrevSlide = () => {
    if (this.state.currentIndex === 0) {
      return this.setState({
        currentIndex: this.state.images.length - 1,
        translateValue: - ((this.state.images.length - 1) * this.slideWidth()),
        transitionTime: 0,
      })
    }

    console.log('currentIndex:', this.state.currentIndex)
    console.log('translateValue:', this.state.translateValue)

    this.setState(prevState => ({
      currentIndex: prevState.currentIndex - 1,
      translateValue: prevState.translateValue - -(this.slideWidth()),
      transitionTime: 0.65,
    }));
  }

  goToNextSlide = () => {
    if (this.state.currentIndex === this.state.images.length - 1) {
      return this.setState({
        currentIndex: 0,
        translateValue: 0,
        transitionTime: 0,
      })
    }

    this.setState(prevState => ({
      currentIndex: prevState.currentIndex + 1,
      translateValue: prevState.translateValue + -(this.slideWidth()),
      transitionTime: 0.65
    }));
  }

  freeSlide = (currentIndex) => {

    this.setState(prevState => ({
      currentIndex,
      translateValue: - currentIndex * (this.slideWidth()),
    }));

  }

  changeMode = () => {
    setInterval(() => {
      if (this.state.percentage !== 100) {

        this.setState({
          percentage: this.state.percentage + 100,
          transitionBarTime: 3
        });

        return
      }
      this.setState({
        percentage: 0,
        transitionBarTime: 0
      });

      this.goToNextSlide();
    }, 3000)
  }

  changeModeHandler = (mode) => {
    this.setState({ autoPlay: true });
  }



  slideWidth = () => {
    return document.querySelector('.slide').clientWidth
  }

  render() {
    return (

      <div className="slider">
        <div style={{ width: 20, height: 10, borderRadius: 5, background: "#000", color: '#fff', textAlign: 'center', fontSize: 8, position: 'absolute', top: 10, left: 5, zIndex: 1, padding: 2 }}>
          {this.state.currentIndex + 1}/{this.state.images.length}

        </div>


        <ProgressBar percentage={this.state.percentage} transitionBarTime={this.state.transitionBarTime} />



        <div style={{ zIndex: 1, position: 'absolute', top: 25, left: 5, display: 'block' }}>
          {!this.state.autoPlay && <button onClick={() => { this.changeModeHandler(1); this.changeMode() }} style={{ width: 55, fontSize: 7, cursor: 'pointer' }}>AUTOPLAY</button>}
        </div>


        <Swipeable
          style={{ height: '100%' }}
          onSwipedRight={() => this.goToPrevSlide()}
          onSwipedLeft={() => this.goToNextSlide()}
        >
          <div className="slider-wrapper"
            style={{
              transform: `translateX(${this.state.translateValue}px)`,
              transition: `transform ease-out ${this.state.transitionTime}s`
            }}>
            {
              this.state.images.map((image, i) => (
                <Slide key={i} image={image} />
              ))
            }
          </div>
        </Swipeable>

        <LeftArrow
          goToPrevSlide={this.goToPrevSlide}
        />

        <RightArrow
          goToNextSlide={this.goToNextSlide}
        />

        <div style={{ zIndex: 1, position: 'absolute', bottom: 15, left: 15 }} >
          {this.state.images.map((el, key) => {
            return (
              <NavButton onClick={() => this.freeSlide(key)} />
            )
          })}
        </div>
      </div >
    );
  }
}