import React, { ReactElement } from 'react';
import { MainIp13ProStyled } from './MainIp13ProStyled';
// design-ip13pro__context
import RibbonIp13Pro from 'app/components/RibbonIp13Pro';
import ImgIphone13ProMax from 'media/img/design-display-iphone13promax.png';
import ImgIphone13Pro from 'media/img/design-display-iphone13pro.png';
//
import Grid from '@mui/material/Grid';
import Ip13ProCollection from 'media/img/ip13pro-collection.jpg';
import Ip13ProCamera from 'media/img/ip13pro-camera.jpg';
import Ip13ProCameraEdge from 'media/img/ip13pro-camera-edge.jpg';
import Ip13ProEdge from 'media/img/ip13pro-edge.jpg';
import Ip13ProScreen from 'media/img/ip13pro-screen.jpg';
import Ip13ProScreenEdge from 'media/img/ip13pro-screen-edge.jpg';
import Ip13ProResistant from 'media/img/ip13pro-resistant.jpg';

interface Props {}

function MainIp13Pro({}: Props): ReactElement {
  const video = require('media/video/bg-iphone13pro-xlarge.mp4');
  return (
    <MainIp13ProStyled className="main-ip13pro">
      <RibbonIp13Pro />
      {/* Oh So Pro */}
      <section className="hero-ip13pro">
        <div className="hero-ip13pro__wrapper">
          <h1 className="hero-ip13pro__headline">iPhone 13 Pro</h1>
          <h2 className="hero-ip13pro__subhead">Oh. So. Pro.</h2>
        </div>
        <div className="hero-ip13pro__video-container">
          <video
            className="hero-ip13pro__video"
            src={video.default}
            autoPlay
            playsInline
            preload="auto"
            muted
          ></video>
        </div>
      </section>
      <section className="design-ip13pro">
        <div className="design-ip13pro__context">
          <div className="design-ip13pro__display">
            <div className="design-ip13pro__display-pro-max">
              <div className="design-ip13pro__spec-pro-max">
                <p className="design-ip13pro__spec-name">iPhone 13 Pro Max</p>
                <p className="design-ip13pro__spec-size">6.7”</p>
              </div>
              <img
                className="design-ip13pro__img"
                src={ImgIphone13ProMax}
                alt="iphone 13 pro max - display"
              />
            </div>
            <div className="design-ip13pro__display-pro">
              <img
                className="design-ip13pro__img"
                src={ImgIphone13Pro}
                alt="iphone 13 pro - display"
              />
              <div className="design-ip13pro__spec-pro">
                <p className="design-ip13pro__spec-name">iPhone 13 Pro</p>
                <p className="design-ip13pro__spec-size">6.1”</p>
              </div>
            </div>
          </div>
          <div className="design-ip13pro__display-sub">
            <p>
              Super Retina XDR display<sup>2</sup> with ProMotion
            </p>
          </div>
        </div>
        <div className="design-ip13pro__gallery">
          <Grid container>
            <Grid item xs={12} sm={6}>
              <div className="design-ip13pro__gallery-item gallery-bg-grey">
                <img
                  src={Ip13ProCollection}
                  alt="design iphone 13 pro collection"
                  className="design-ip13pro__collection-img"
                />
                <p className="design-ip13pro__gallery-subtitle">
                  <span>Graphite, Gold, Silver,</span>
                  <span>and Sierra Blue</span>
                </p>
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <div></div>
              <div className="design-ip13pro__gallery-item gallery-bg-black">
                <img
                  src={Ip13ProCamera}
                  alt="design iphone 13 pro collection"
                  className="design-ip13pro__camera-img"
                />
              </div>
              <div></div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <div className="design-ip13pro__gallery-item gallery-bg-black">
                <img
                  src={Ip13ProCameraEdge}
                  alt="design iphone 13 pro collection"
                  className="design-ip13pro__camera-edge-img"
                />
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <div className="design-ip13pro__gallery-item gallery-bg-grey">
                <img
                  src={Ip13ProEdge}
                  alt="design iphone 13 pro collection"
                  className="design-ip13pro__edge-img"
                />
                <p className="design-ip13pro__gallery-subtitle">
                  <span>Surgical-grade</span>
                  <span>stainless steel</span>
                </p>
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <div className="design-ip13pro__gallery-item gallery-bg-grey">
                <img
                  src={Ip13ProScreen}
                  alt="design iphone 13 pro collection"
                  className="design-ip13pro__screen-img"
                />
                <p className="design-ip13pro__gallery-subtitle">
                  <span>Ceramic Shield, tougher than</span>
                  <span>any smartphone glass</span>
                </p>
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <div className="design-ip13pro__gallery-item gallery-bg-black">
                <img
                  src={Ip13ProScreenEdge}
                  alt="design iphone 13 pro collection"
                  className="design-ip13pro__screen-edg-img"
                />
              </div>
            </Grid>
          </Grid>
        </div>
        <div className="design-ip13pro__resistant">
          <div className="design-ip13pro__resistant-subtitle">
            <p>
              <span>Industry-leading IP68</span>
              <span>
                water resistance<sup>3</sup>
              </span>
            </p>
          </div>
          <div className="design-ip13pro__resistant-image">
            <img src={Ip13ProResistant} alt="iphone 13 pro resistant water - image" />
          </div>
        </div>
      </section>
      <section className="camera-ip13pro">
        <div className="camera-ip13pro__grid">
          <p>
            Bring on
            <br />
            the night
          </p>
          <div>
            <p>
              iPhone 13 Pro was made for low light. The Wide camera adds a wider aperture and our
              largest sensor yet — and it leverages the LiDAR Scanner for Night mode portraits.
              Ultra Wide gets a wider aperture, a faster sensor, and all-new autofocus. And
              Telephoto now has Night mode.
            </p>
          </div>
          <img src="" alt="" />
          {/*  */}
          <p>
            <span>The Wide camera captures up to</span>
            <strong>2.2x more&nbsp;light</strong>
            <span>for better photos and videos</span>
          </p>
          <img src="" alt="" />
          {/*  */}
          <p>
            <span>The Ultra Wide camera captures</span>
            <strong>92% more&nbsp;light</strong>
            <span>for better photos and videos</span>
          </p>
          <img src="" alt="" />
          {/*  */}
          <img src="" alt="" />
          {/*  */}
          <p>
            <strong>
              Night mode now on
              <br />
              every camera
            </strong>
          </p>
          <img src="" alt="" />
          {/*  */}
          <p>
            <strong>Sharper, more detailed photos and videos</strong>
            <span>in any light</span>
          </p>
        </div>
      </section>
    </MainIp13ProStyled>
  );
}

export default MainIp13Pro;
