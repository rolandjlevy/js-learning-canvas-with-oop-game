### Additions

#### Focus the canvas so key events run

+ Added tabindex="1" to canvas element: 
```html 
<canvas id="game-area" tabindex="1"></canvas>
```
+ Added canvas.focus() to Canvas constructor:
```js
canvas.focus();
```
+ removed outline with CSS:
```css
#game-area:focus {
  outline: none;
}
```