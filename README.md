# TODO

- on calendar click - add color to selection
  - on save 'grey' out the selection but show it there
  - how to edit those?
- on form submit the form itself turns into the row and a new form spawns on the top of the list
- save theme in local storage
- date selector
  - click first date - click last date
  - highlight current date
  - show current month
  - can use go backwards in time? (yes?)
  - hover effect
  - bold numbers for start and end date
  - month change option

* follow patter to make things that are clickable round, and what is not should be a rectangle (or maybe a something with a small border radius)
* color picker - show/hide animation
* divide acton buttons from data rows - make them more button like
* buttons grow and colorize on hover?
* align data in table to be aligned with input fields
* add abrreviation column name
* dark mode
* no error handling for skil abbr
* toggle form with a '+' sign and 'x' sign on close next to titles (skills, emps)

# Features

- ability to open and close SKILLS and EMPLOYEES table
  - on close:
    - divider stays just slides up
    - column name ('Name') fades out
    - item dissapear in order (bottom to top) with small delay
  - on open:
    - divider slides down
    - column name shows up
    - items appear in order (top to bottom) with small delay
- on skill list - show how many employees know that skill

* edit emps
* edit skills

# UX improvements

- animate outline when error state happens
- create tutorial that walks you through the page
- color picker appear nicely
- should the skill/emp addition form visible all the time?

- skill multiple selector - corner not rounded after selected state
- don't show colors that have been picked (color picker)
- new items shoul appear nicly
- should skill add to emp panel close after emp creation?

# Bugs

- skill not removed from employee creation form on skill removal
- code collapses if there is no more color left
- when grabbin a skill in emp's skill column the order is messed up (?)

# Backlog ideas

- activity log
- display who is editing the page currently

# Code quality

- create card component - normal and rounded
- create text input component
- create colors = how to theme with material ui
- text variants - heading, normal, bold normal
- badge
- introduce testing - cypress?
