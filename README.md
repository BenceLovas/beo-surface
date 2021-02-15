# TODO

- dark mode selector
- create own multi select component
  - selected ones elevate more
  - when not selected '+', when selected 'x'
- sortable list element in dark mode (maybe change the right side to 6 dots icon)
- fast but delayed showup of elements on load

- on calendar click - add color to selection
  - on save 'grey' out the selection but show it there
  - how to edit those?
    - on click tooltip comes out with delete or edit icons
- on form submit the form itself turns into the row and a new form spawns on the top of the list
- save theme in local storage

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

- title for skill abrr
- clendar:
  - selected state for button
  - show selected days amount (before save)
  - button for jumping to 'today' (only shows up when to on todays month)
  - display start and end date as text somewhere - show days between - maybe 3 circles (date - days - date)
- emp row - lock input fields and button to top on expand
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
- selecting backwards in time on calendar

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
