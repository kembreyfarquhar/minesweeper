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
