# The Game

Minesweeper is a single-player puzzle computer game, originating in the 1960s.

## Objective

> The objective of the game is to clear a rectangular board containing hidden "mines" or bombs without detonating any of them, with help from clues about the number of neighboring mines in each field. -Wikipedia

### MVP Requirements:

#### UI

- [ ] Displays a rectangular board
- [ ] Has top bar with
  - [ ] max time
  - [ ] reset button
  - [ ] time elapsed
- [ ] Board is made up of rows & columns of squares
- [ ] Squares have a differentiated "unpressed" and "pressed" style
- [ ] Pressed squares display either the number of neighboring bombs or a bomb
- [ ] If a bomb is pressed, all bombs on the board appear, but the styling will be differentiated between the "pressed" bomb and all the rest

#### Logic

- [ ] Plan component tree/structure
- [ ] What will state look like?
- [ ] How will state be updated?
- [ ] What will the dimensions of the board be? (How many rows/columns)
- [ ] How will the board be randomly set up with bombs?
- [ ] How to calculate the number of adjacent bombs?
- [ ] How to activate all adjacent "non-bombs" to a pressed "0"

##### Brainstorming

- Loop to create rows, nested loop to create cells
- Set this up as the initial state
- cell prop bomb={false}
- Randomly generate cells to attribute bomb={true}
- Cells have className of "pressed" if pressed
- onPress if bomb: reveal all bombs & losing signifier
- onPress if NOT bomb: add class "pressed" to reveal styling & number

* CellsContainer (loop of 10-20ish) -render-> Row (loop of 5-10ish) -render-> Cell

---

- Each cell is an object with an x, y, isBomb, neighbors, and isPressed property
- x & y values tell the placement of the cell, and grant the ability to "look around" the board to check for neighboring bombs
