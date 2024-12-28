const canvas = document.getElementById("game-canvas");
const ctx = canvas.getContext("2d");
ctx.imageSmoothingEnabled = false;

const berry_sprite = new Image();
let animation_call_berry = 'idle';
berry_sprite.src = "/assets/game/sprites/Squirrel Sprite Sheet.png";

const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;
const spriteWidth = 32;
const spriteHeight = 32;
let gameframe = 0;

//Slowness of the animation sprite
const stagger_frame = 10;

//Mutating func
function MutateAnimationCall(animation) {
    animation_call_berry = animation;
}

import { animation_frames } from "./squirrel_animations.js";

const spriteAnimations = [];

animation_frames.forEach((state, index) => {
    let frames = {
        loc: [],
    }
    for(let j = 0; j < state.frames; j++) {
        let pos_x = j * spriteWidth;
        let pos_y = index * spriteHeight;
        frames.loc.push({x:pos_x,y:pos_y});
    };
    spriteAnimations[state.name] = frames;
});

function animateBerry() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

    let position = Math.floor(gameframe/stagger_frame) % spriteAnimations[animation_call_berry].loc.length;
    let frame_x = spriteWidth * position;
    let frame_y = spriteAnimations[animation_call_berry].loc[position].y;
    // Draw the zoomed sprite
    ctx.drawImage(
        berry_sprite, 
        frame_x, 
        frame_y, 
        spriteWidth, 
        spriteHeight, 
        0, 
        0, 
        spriteWidth * 10, // 10x zoom on width
        spriteHeight * 10 // 10x zoom on height
    );
    ctx.imageSmoothingEnabled = false;

    gameframe++;
    requestAnimationFrame(animateBerry);
}

MutateAnimationCall("jump-run")
animateBerry();
