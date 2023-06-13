# Globally animated elements on scroll with React!
https://github.com/lucasKoyama/react-global-animate-on-scroll/assets/121680414/c2cf2721-9835-4f2c-b1a7-9d51a543824d

[react-global-animate-on-scroll](https://www.npmjs.com/package/react-global-animate-on-scroll) is animations based on scroll in react made very simple!
## Installation
    npm i react-global-animate-on-scroll
## Usage
Insert the component as the last component of App so it will have access to the entire DOM and its elements
![example](https://github.com/lucasKoyama/react-global-animate-on-scroll/assets/121680414/543aef1b-75a0-4dba-a035-625f3a3ef26c)
and finally install the animate.css lib

    npm install animate.css --save
  
Import animate.css and add the class "animate__animated" for all animations and another animation that you liked from [animate.css](https://animate.style/)
```js
import 'animate.css';
```
```html
<h1 class="animate__animated animate__bounce">An animated element</h1>
```
