This game was inspired by the Chrome Dino Game. It's an adventurer who runs accross different landscapes and has to jump over obstacles. It is an infinite game, which means there is no end, but the character will die anytime he touches an obstacle. After a certain amount of time, it gets more difficult as the obstacles move faster.

The character runs by himself, the only button to press is the up arrow key to jump.

I used HTML, CSS and JavaScript to create the game. jQuery CDN is linked but I ended up not using any frameworks/libraries. The HTML file is very short because I used the DOM in JavaScript to create most of the elements.

BUGS AND UNFINISHED FUNCTIONALITIES:

- When the game is over, I set a timeout to display the GameOver screen. during this lapse of time, we can see the character fall on the ground, however he can still jump if the up arrow is pressed.
- The randomization of obstacles is sometimes a little off.
- The difficulty does not reset when the game is over. In other words, to start a new game with the default difficulty, the page needs to be refreshed.

COLLABORATORS AND CONTRIBUTORS:

- JavaScript l. 21 & l. 33: Hadeel Ammari
- JavaScript l. 39-43, l. 51-55 & l. 93-97: David Reid (https://www.youtube.com/user/davireid)
- JavaScript l. 74-78 & l. 100-104: Shawn Beaton (https://blog.logrocket.com/build-a-game-with-html-css-javascript/)
