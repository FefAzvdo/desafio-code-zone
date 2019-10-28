import React, { useState } from 'react'
import Slide from './slide'
import LeftArrow from './left-arrow'
import RightArrow from './right-arrow'
import ProgressBar from './progress-bar'
import NavButton from './nav-buttons'

const Slider = () => {
  const images = [
    "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/aurora.jpg",
    "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/canyon.jpg",
    "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/city.jpg",
    "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/desert.jpg",
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [translateValue, setTranslateValue] = useState(0)
  const [transitionTime, setTransitionTime] = useState(0.65)
  const [percentage, setPercentage] = useState(0)
  const [transitionBarTime, setTransitionBarTime] = useState(0.65)
  const [exibitionMode, setExibitionMode] = useState(0)

  const slideWidth = () => {
    return document.querySelector('.slide').clientWidth
  }

  const goToPrevSlide = () => {
    if (currentIndex === 0) {
      return (
        setCurrentIndex(images.length - 1),
        setTranslateValue(- (images.length - 1) * slideWidth()),
        setTransitionTime(0)
      )
    }

    setCurrentIndex(currentIndex);
    setTranslateValue(translateValue - (-slideWidth()))
    setTransitionTime(0.65)
  }

  const goToNextSlide = () => {
    if (currentIndex === images.length - 1) {
      return (
        setCurrentIndex(0),
        setTranslateValue(0),
        setTransitionTime(0)
      )
    }

    setCurrentIndex(currentIndex + 1);
    setTranslateValue(translateValue + (-slideWidth()))
    setTransitionTime(0.65)

    console.log('trocou')
  }

  const freeSlide = (currentIndex) => {
    setCurrentIndex(currentIndex)
    setTranslateValue(- currentIndex * slideWidth())
  }

  const changeMode = () => {
    setInterval(() => {
      if (percentage !== 100) {
        setPercentage(percentage + 100)
        setTransitionBarTime(1)
      }

      setPercentage(0);
      setTransitionBarTime(0)

      goToNextSlide()
    }, 1000)
  }

  const changeModeHandler = (mode) => {
    setExibitionMode(mode)
    console.log(mode)
  }

  return (
    <div className="slider">


      <ProgressBar percentage={percentage} transitionBarTime={transitionBarTime} />

      <div style={{ zIndex: 1, position: 'absolute', top: 25, left: 5, display: 'block' }}>
        <button onClick={() => { changeModeHandler(1); changeMode() }} style={{ width: 55, fontSize: 7, cursor: 'pointer' }}>AUTOPLAY</button><br />
        <button onClick={() => { changeModeHandler(2); changeMode() }} style={{ width: 65, fontSize: 7, cursor: 'pointer' }}>MANUAL SETA</button><br />
        <button onClick={() => { changeModeHandler(3); changeMode() }} style={{ width: 70, fontSize: 7, cursor: 'pointer' }}>MANUAL BOTÃO</button>
      </div>


      <div className="slider-wrapper"
        style={{
          transform: `translateX(${translateValue}px)`,
          transition: `transform ease-out ${transitionTime}s`
        }}>
        {
          images.map((image, i) => (
            <Slide key={i} image={image} />
          ))
        }
      </div>

      <LeftArrow
        goToPrevSlide={goToPrevSlide}
      />

      <RightArrow
        goToNextSlide={goToNextSlide}
      />

      <div style={{ zIndex: 1, position: 'absolute', bottom: 15, left: 15 }} >
        {images.map((el, key) => {
          return (
            <NavButton onClick={() => freeSlide(key)} />
          )
        })}
      </div>
    </div>
  );
}

export default Slider