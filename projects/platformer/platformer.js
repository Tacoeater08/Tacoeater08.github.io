$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }
    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); //top
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200); //right
    createPlatform(-50, -50, 50, canvas.height + 500); //bottom
    createPlatform(canvas.width, -50, 50, canvas.height + 100);

    /**
     * Uncomment the drawGrid() function call below to add a "grid" to your platformer game's screen
     * The grid will place both horizontal and vertical platforms incremented 100 pixels apart
     * This can help you determine specific x any y values throughout the game
     * Comment the function call out to remove the grid
     */

    // drawGrid();

    /////////////////////////////////////////////////
    //////////ONLY CHANGE BELOW THIS POINT///////////
    /////////////////////////////////////////////////

    // TODO 1
    // Create platforms
    // You must decide the x position, y position, width, and height of the platforms
    // example usage: createPlatform(x,y,width,height)

createPlatform(200,200,20,700)

   createPlatform(170,650,40,20)

   createPlatform(0,550,40,20)

   createPlatform(170,450,40,20)

createPlatform(0,350,40,20)

createPlatform(170,250,40,20)

createPlatform(200,200,200,20)

createPlatform(550,0,20,600)

createPlatform(370,320,200,20)

createPlatform(200,450,150,20)

createPlatform(200,600,200,20)

createPlatform(470,600,100,20)

createPlatform(700,690,60,20)

createPlatform(560,570,40,20)

createPlatform(700,450,20,20)

createPlatform(560,330,40,20)

createPlatform(700,220,20,20)

createPlatform(750,120,100,20)

createPlatform(740,120,20,30)

createPlatform(850,120,20,700)

createPlatform(950,0,20,650)

createPlatform(1100,650,60,20)

createPlatform(1200,550,60,20)

createPlatform(950,420,190,20)

createPlatform(1200,290,60,20)

createPlatform(1300,190,100,20)
    // TODO 2
    // Create collectables
    // You must decide on the collectable type, the x position, the y position, the gravity, and the bounce strength
    // Your collectable choices are 'database' 'diamond' 'grace' 'kennedi' 'max' and 'steve'; more can be added if you wish
    // example usage: createCollectable(type, x, y, gravity, bounce)

    createCollectable("database",1360,160,0,20)

    createCollectable("database",1360,700,0,20)

    createCollectable("database",0,90,0,20)

    createCollectable("database",220,560,0,20)

    createCollectable("database",810,700,0,20)
    // TODO 3
    // Create cannons
    // You must decide the wall you want the cannon on, the position on the wall, and the time between shots in milliseconds
    // Your wall choices are: 'top' 'left' 'right' and 'bottom'
    // example usage: createCannon(side, position, delay, width, height)

    createCannon("top",860,1600,140,50)
    createCannon("top",170,1000,80,50)
    createCannon("top",490,1000,80,50)
    createCannon("bottom",1300,2500,140,50)
    createCannon("bottom",36,1300,80,50)
    createCannon("top",1110,1600,150,100)
    /////////////////////////////////////////////////
    //////////ONLY CHANGE ABOVE THIS POINT///////////
    /////////////////////////////////////////////////
  }

  registerSetup(setup);
});
