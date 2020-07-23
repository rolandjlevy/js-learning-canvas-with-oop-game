# Additions

#### Focus canvas so key events can run 

+ Add tabindex="1" to canvas element: 
```html 
<canvas id="game-area" tabindex="1"></canvas>
```
+ Add canvas.focus() to Canvas constructor:
```js
canvas.focus();
```
+ remove outline with CSS:
```css
#game-area:focus {
  outline: none;
}
```

- - -

#### Make game mobile-friendly

+ Add touchstart and touchend events to InputHandler object
