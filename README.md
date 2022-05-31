# OrbitUnlimitedControls

A camera controller for [THREE.js](https://threejs.org) that addresses some limitations of some other, widely used controllers:
* https://threejs.org/docs/#examples/en/controls/OrbitControls
* https://threejs.org/docs/#examples/en/controls/TrackballControls

For looking around a scene, OrbitControls is a common choice.  But it has a limit on the
rotation that can be achieved by moving the mouse vertically: the camera cannot go "over the
north pole" or "under the south pole."

TrackballControls does not have this limitation.  Yet it suffers from "twist" around the viewing
axis, which gradually accumulates over the course of interaction and makes it difficult to
return to an original orientation.  It also does not emit a `change` event on each camera
movement, so updating the rendering to reflect the camera movement requires the use of
[Window.requestAnimationFrame()](https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame).

OrbitUnlimitedControls is free of these limitations.  It is meant to implement the API of
OrbitControls (or at least the most important parts of that API), so it can be used as a simple
replacement for that controller.

## Constructor

`OrbitUnlimitedControls(object : Camera, domElement : HTMLDOMElement)`

`object`: The camera to be controlled.  
`domElement`: The HTML element used for event listeners.


## API Matching OrbitControls

`.keyPanSpeed : Float`

`.keys : Object`

`.maxDistance : Float`

`.minDistance : Float`

`.rotateSpeed : Float`

`.target : Vector3`

`.zoomSpeed : Float`


## New API

`.clicked : Boolean`

The standard `click` event is sent by `this.domElement` for any `mousedown` followed by `mouseup`.  But a more useful definition of a `click` is whent he cursor moves less than a couple of pixels between the `mousedown` and the `mouseup`.  In that case, `this.clicked` will be `true`.

`.usePanModAlt : Boolean`

`.usePanModShift : Boolean`

`.usePanModCtrl : Boolean`

`.usePanModMeta : Boolean`

These booleans enable modifier keys to make a left-button mouse drag perform camera panning.  The default is `usePanModAlt` being `true` and the others `false`.  Note that on Apple keyboards, "alt" is "option", "ctrl" is "control", and "meta" is "command".


## Installation

The simplest approach is to use the [npm module](https://www.npmjs.com/package/@janelia/three-orbit-unlimited-controls):
```
npm install --save @janelia/three-orbit-unlimited-controls
```

For development, clone the repository and build it:
```
npm install
npm run build
npm link
```
Then use that build in an application:
```
npm link @janelia/three-orbit-unlimited-controls
```
