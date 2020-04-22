/**
 * Class to handle the AR scene
 *
 * @author Michael O'Connor (W16006993)
 */
'use strict';

import React, { Component } from 'react';

import {StyleSheet} from 'react-native';

import {
  ViroARScene,
  ViroText,
  ViroConstants,
  ViroMaterials,
  ViroAnimations,
  Viro3DObject,
  ViroVideo,
  ViroSpatialSound,
  ViroNode,
  ViroAmbientLight,
  ViroSpotLight,
} from 'react-viro';

export default class ARScene extends Component {

  constructor() {
    super();

    // Initial state set here
    this.state = {
      text: "Initializing AR...",
    };

    // bind 'this' to functions
    this.onInitialized = this.onInitialized.bind(this);
  }

  /**
   * Method handles the initial state of the scene once the application is
   * tracking the camera feed.
   *
   * @param state
   * @param reason
   */
  onInitialized(state, reason) {
    if (state === ViroConstants.TRACKING_NORMAL) {
      this.setState({
        text: "Newcastle United AR Experience",
      });
    } else if (state === ViroConstants.TRACKING_NONE) {
      // Nothing happens nor is required
    }
  }

  /**
   * Call to function developed for this platform to render the scene
   *
   * @returns {ARScene}
   */
  render() {
    return (
        <ViroARScene onTrackingUpdated={this.onInitialized}>
          <ViroText
              text={this.state.text}
              position={[0, 0, -3]}
              style={styles.textStyle}
              outerStroke={{type: "Outline", width: 1.5, color: '#000000'}}/>

          <ViroAmbientLight color={"#ffffff"}/>
          <ViroNode
              position={[0, -.3, -1]}
              // empty function so drag is applied to this element
              onDrag={() => {}}
              ref={"arscene"}
              scale={[.7, .7, .7]}
              dragType="FixedToWorld">

            <ViroSpotLight
                position={[0, 3, 0]}
                direction={[0, -1, 0]}
                innerAngle={5}
                outerAngle={45}
                color='#ffffff'
                castsShadow={true}
                influenceBitMask={2}
                shadowMapSize={2048}
                shadowNearZ={1}
                shadowFarZ={8}
                shadowOpacity={.3}
                ref={node => this.spotLight = node}/>

            <Viro3DObject
                source={require('./res/nufcObject/newcastleBadge.glb')}
                position={[0, -.7, -1]}
                type={"GLB"}
                ref={node => this.arNodeRef = node}
                materials={["badge"]}
                lightReceivingBitMask={3}
                shadowCastingBitMask={2}
                onPinch={this.onPinch}
                animation={{name: "rotate", run: true, loop: true}}/>
          </ViroNode>

          <ViroNode position={[2, -.4, -5]}>
            <ViroVideo
                ref={"video"}
                source={require('./res/video/newcastleFanVideo.mov')}
                height={1.7}
                width={1.7}
                volume={0}
                paused={false}
                muted={true}
                loop={true}
                position={[25, -6, -45]}
                scale={[14, 17, 1]} />
          </ViroNode>

          <ViroNode position={[-2, 0, 0]}>
            <ViroSpatialSound
                ref={"sound"}
                paused={false}
                muted={false}
                source={require('./res/sound/footballCrowdMono.wav')}
                loop={true}
                volume={0.5}/>
          </ViroNode>

        </ViroARScene>
    );
  }

  /**
   * Method that handles a user carrying out a pinch gesture within the ARScene
   */
  onPinch(pinchState, scaleFactor, source) {
    // current scale is multiplied by the scale factor from the scale gesture
    var newScale = this.state.scale.map(x => x * scaleFactor);

    // set the new pinch scale once a user has finished the pinch gesture
    if (pinchState === 3) {
      this.setState({
        // sets the new scale based on pinch state
        scale: newScale
      });
      return;
    }
    // set and store the state
    this.arNodeRef.setNativeProps({scale: newScale});
    // apply the new scale to the shadow
    this.spotLight.setNativeProps({shadowFarZ: 6 * newScale[0]});
  }
}

/**
 * Method that handles the styles for the scene
 */
var styles = StyleSheet.create({
  textStyle: {
    fontFamily: 'Arial',
    fontSize: 20,
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

/**
 * Method that sets the materials for the 3D object in this scene
 */
ViroMaterials.createMaterials({
  badge: {
    lightingModel: "Phong",
  },
});

/**
 * Method that sets the animation for the 3D object
 */
ViroAnimations.registerAnimations({
  rotate: {
    properties: {
      rotateY: "+=360"
    },
    duration: 1200, //1.2 seconds
  },
});

module.exports = ARScene;

