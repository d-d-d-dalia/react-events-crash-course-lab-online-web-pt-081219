import React, { Component } from 'react';
import { drawChromeBoiAtCoords, toggleCycling, resize } from './canvasHelpers.js'


export default class ChromeBoisDomain extends Component {
  
  handleMouseMove = (event) => {
    /* TODO: This method should capture the `x` and `y` coordinates of the mouse
     * from the event and use them to invoke the `drawChromeBoiAtCoords`
     * function that has been provided and is already imported
     * (`drawChromeBoiAtCoords` expects two arguments, an x and a y coordinate)
     */
    drawChromeBoiAtCoords(event.clientX, event.clientY)
    //pageX and pageY work exactly the same on the page but do not pass the test
    //console.log(event.pageY)
    //console.log(event.clientY)
  }
  
  /* TODO: Create an event handler which, when fired, invokes the provided
   * `toggleCycling` function with no arguments. Don't forget the click event
   * listener that should fire it!
   */
   
  /* TODO: Add an event listener to the `<canvas>` element to capture when a key
  /* is pressed. When a key is pressed, an event handler should invoke the
  /* provided `resize` function with a single argument of either '+' or '-'
  /* if the key pressed was 'a', then it should call `resize` with '+'
  /* if the key pressed was 's', then it should call `resize` with '-' 
   */

  handleClick = (event) => {
    toggleCycling()
  }

  handleKeyDown = (event) => {
   if (event.key === 'a') {
     resize('+')
    }
   else if (event.key === 's') {
     resize('-')
   }
  }
   // also gives same functionality but does not pass tests with:

  // handleKeyDown = (event) => {
  //  if (event.keyCode === 65) {
  //    resize('+')
  //   }
  //  else if (event.keyCode === 83) {
  //    resize('-')
  //  }
  // }
  
  render() {
    return (
      <canvas 
        onClick={this.handleClick}
        onMouseMove={this.handleMouseMove}
        onKeyDown={this.handleKeyDown}
        width='900'
        height='600'
        tabIndex="0">
      </canvas>
    )
  }
}
