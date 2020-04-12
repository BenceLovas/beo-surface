## TODOS

- user should be able to select multiple skills for an employee before input closes
- handle gracefully if no more skill to add to employee
- handle gracefully skill selector after a skill is added to an employee
- order skill in addition order
- Add skill addition to employee addition

- should be able to rank employee's skills

- add a little color to the page (try adding color to '+' and '-' signs and chevron)
- when chevron is pressed (skills are expanded on a user row) it should glow a little, or like a background light with negative box shadow
- on delete (employee or skill) the item should shrink and fade out while the other elements are closing together
- try displaying counters as if they were in a cutout (negative box shadow)

- recalculate skill order on skill removal - both from the use and from global
- remove skill from user on skill removal

- Show skills like chips (Add abbr filed for skills)
- show skills as badges in table view - decide how it should behave when skill edition is active (first guess is to make it dissapear)

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

- what if a skill is removed - it should be removed from the employees as well
- should display error message if one user doesn't have a skill
- primary skills and secondary skills - do I really need this?
  - rank employees added to a skill - who is the most relevant in each skill (like rank high new receptionists to night shift rec skill to increase the change that they will be the replacement)
  - I guess if employee's skill ranking is weighted the most then the skill's employee rank is just switching people in the same shift if necessary after the schedule has been created we are gucci
  - First only have skill ranking for employees and we'll see


- display somehow when a skill is removed from a employee by deleting the skill itself
- take printscreens of versions and upload it to the repo - sometimes it happens that I overdo something when I watch the UI too much
- red plus sign when no skill added to employee - then chevron counter and if anything else fits than that

# Backlog ideas
- activity log
- display who is editing the page currently

# Code quality
- setup eslint on commit
- introduce testing - cypress?
- create card component - normal and rounded
- create text input component
- create colors = how to theme with material ui
- text variants - heading, normal, bold normal
- badge