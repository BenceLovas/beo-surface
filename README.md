## TODOS

- rotate chevron on open
- make emp's skill selector darker background, round corders, size = small,
- show 'Select Skills' text on first open

- should be able to rank employee's skills

* input field error messages show up above it - like it is a paper as well just coming out from below the input
* employee input row behaves differently on toggle (Collapse show) - button scales up, input stays (this is good btw)
* add error state if no skill selected for user

* show skill rank next to emp's skill list names like: 1 | skill bla
* emphasize rank 1, rank 2 and from there same boldness

* make skill selector rounded

* create custom scrollbar

* indicate on skill ordering that those can be dragged - icon or '3d' bumps
* add 'Ranking' header to employee skill ranking d&d
* remove icons could be red or secondary color

* when chevron is pressed (skills are expanded on a user row) it should glow a little, or like a background light with negative box shadow
* on delete (employee or skill) the item should shrink and fade out while the other elements are closing together
* try displaying counters as if they were in a cutout (negative box shadow)

* recalculate skill order on skill removal - both from the use and from global
* remove skill from user on skill removal

* Show skills like chips (Add abbr filed for skills)
* show skills as badges in table view - decide how it should behave when skill edition is active (first guess is to make it dissapear)

* ability to open and close SKILLS and EMPLOYEES table
  - on close:
    - divider stays just slides up
    - column name ('Name') fades out
    - item dissapear in order (bottom to top) with small delay
  - on open:
    - divider slides down
    - column name shows up
    - items appear in order (top to bottom) with small delay
* on skill list - show how many employees know that skill

* what if a skill is removed - it should be removed from the employees as well
* should display error message if one user doesn't have a skill
* primary skills and secondary skills - do I really need this?
* add abbriviation to skills - and display those as chips on employee list

  - rank employees added to a skill - who is the most relevant in each skill (like rank high new receptionists to night shift rec skill to increase the change that they will be the replacement)
  - I guess if employee's skill ranking is weighted the most then the skill's employee rank is just switching people in the same shift if necessary after the schedule has been created we are gucci
  - First only have skill ranking for employees and we'll see

* pick colors for skills

  - 10 predefined colors
  - one tint icon
    - on click
      - input fields shrinks
      - small color 'balls' appear from the icon - slide out from beneath it
  - add color indicators where I display skills - if possible
  - don't show colors that have been picked

* new items shoul appear nicly
* should skill add to emp panel close after emp creation?
* whole skill selector should be a button - pointer on hover

* skill list for emp. floats up - drops wide shadow

* try using 'glass' surfaces
* dark mode

* edit emps
* edit skills

* display somehow when a skill is removed from a employee by deleting the skill itself
* take printscreens of versions and upload it to the repo - sometimes it happens that I overdo something when I watch the UI too much
* red plus sign when no skill added to employee - then chevron counter and if anything else fits than that

* custom ordering for employees
* custom ordering for skills (?)

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
