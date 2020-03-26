# OrbitUnlimitedControls

A camera controller for [THREE.js](https://threejs.org) that addresses some limitations of some other, widely used controllers:
* https://threejs.org/docs/#examples/en/controls/OrbitControls
* https://threejs.org/docs/#examples/en/controls/TrackballControls

For looking around a scene, OrbitControls is a common choice.  But it has a limit on the
rotation that can be achieved by moving the mouse vertically: the camera cannot go "over the
north pole" or "under the south pole."

TrackballControls does not have this limitation.  Yet it suffers from "twist" around the viewing
axis, which gradually accumulates over the course of interaction and makes it difficult to
return to an original orientation.  It also does not emit a "change" event on each camera
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