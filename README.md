# TODO

- fix color picker (currently it only works on every second add)
  - AC
    - only not selected color are in the list
    - on add remove color and pick the first one
    - on remove add color and pick the first one

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

- dark mode

- edit emps
- edit skills

# UX improvements

- skill multiple selector - corner not rounded after selected state
- don't show colors that have been picked (color picker)
- new items shoul appear nicly
- should skill add to emp panel close after emp creation?

# Bugs

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
