import React from 'react';
import './App.css';
import Slider from './components/slider'

function App() {
  return (
    <div className="container">
      <div className="header">
        <div style={{ height: 100, width: '100%', fontSize: '2.5vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <h1 style={{
            textShadow: '-1px 1px 2px rgba(0, 0, 0, 1)',
            fontWeight: 'bold'
          }}>HELLO CODE ZONE </h1>
        </div>
      </div>
      <div className="midle">
        <div className="midle_left">
          <div className="midle_left_top"> <Slider /> </div>
          <div className="midle_left_bottom">
            <img src="https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/tree-of-life.jpg" style={{ height: '100%', width: '100%' }} />
          </div>
        </div>
        <div className="midle_right">
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <div className="midle_right_top" style={{ marginRight: 10 }}>
              <div style={{ height: 100, width: '100%', fontSize: '2.2vh', display: 'flex', justifyContent: 'center', alignItems: 'center', fontWeight: 'bold' }}>                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam nulla veritatis, maiores corporis eius laboriosam doloribus in est mollitia quibusdam.
             </div>
            </div>
            <div className="midle_right_top">
              <div style={{ height: 100, width: '100%', fontSize: '2.2vh', display: 'flex', justifyContent: 'center', alignItems: 'center', fontWeight: 'bold' }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam nulla veritatis, maiores corporis eius laboriosam doloribus in est mollitia quibusdam.
             </div>
            </div>
          </div>

          <div className="midle_right_midle">
            <div style={{ height: 100, width: '100%', fontSize: '2.5vh', margin: 20, display: 'flex', justifyContent: 'center', alignItems: 'center', fontWeight: 'bold' }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam nulla veritatis, maiores corporis eius laboriosam doloribus in est mollitia quibusdam.
             </div>
          </div>

          <div className="midle_right_bottom">
            <div className="midle_right_bottom_big">
              <img src="https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/mountains.jpg" style={{ height: 80, width: '100%' }} />
            </div>
            <div className="midle_right_bottom_big">
              <img src="https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/redsky.jpg" style={{ height: 80, width: '100%' }} />
            </div>
            <div className="midle_right_bottom_medium">
              <img src="https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/sandy-shores.jpg" style={{ height: 80, width: '100%' }} />
            </div>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div style={{ fontSize: "1.8vh" }}>
          Fernando Augusto Rodrigues de Almeida Azevedo - Web and Mobile developer
        </div>
      </div>


    </div >
  );
}

export default App;
