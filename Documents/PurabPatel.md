# 490 Project: Road to Success <!-- omit in toc -->
**Project Manager**
- [Progress Updates](#progress-updates)
  - [*10/22/22*](#102222)
  - [*10/23/22*](#102322)
  - [*10/25/22*](#102522)
  - [*10/26/22*](#102622)
  - [*11/02/22*](#110222)
  - [*11/06/22*](#110622)
  - [*11/07/22*](#110722)
- [Current Status](#current-status)
- [Completed Tasks](#completed-tasks)

# Progress Updates
## *10/22/22*
- Created War-Room thread
  - Meant as a distraction free chat for everyone in team kenny to discuss general design and consensus.
  - Announced plans of new team assignments based on preferences, didn't change teams around that much. Most important change was that I asked Raymond to do UI and he agreed.
  - Asked 4 different team specific questions so everyone could get started deciding how they would work on their part of the project.
  - Team UI - Discuss design for landing page, how will users be able to see calendar, todo list, profile, login/signup. You can use Figma to prototype a website layout.
  - Team API - Discuss design for database schema, what will be stored for user credentials, what information will be required for Appointments and Tasks?
  - Team Security - How will users Authenticate (In-House username/password auth? Google Identity services? Firebase? oAuth?) and access personal calendar and todo list.
  - Team DevOps/QA - Discuss schedules/strategies for testing current  build. Look into CI/CD for GitHub.

- Created TODO thread
  - Meant to provide the relevant teams with a concise description with what they need to get done for the week
  - Assigned everyone to provide Dhruv with their Github usernames
  - Assigned everyone to create their markdown files in the documents folder.
- Created Stand Ups thread
  - Meant to give the team, myself, and the professor updates on what everyone else is doing, so they can pace accordingly
- Created Resources thread
  - Meant to provide quick access to relevant information regarding the project, and current design plans.
-
## *10/23/22*
- Added link to Figma (Cool UI designing tool I found that allows people to collaborate on a site to quickly protype UI pages and outlines)
- Gave a quick update on StandUp thread to encourage others to use the StandUp thread as well

## *10/25/22*
- Created separate threads for each team to discuss team specific challenges and design choices.
- Set hard deadline for Team UI to create a basic outline for several pages on Figma and post on UI thread
- Set hard deadline for Team Security to decide on an authentication method
- Set hard deadline for Team API to come up with a database schema
- Set hard deadline for Team DevOps/QA to decide whether or not github CI/CD was worth implementing at this stage of the project.

## *10/26/22*
- Gave feedback on UI, Security, and API design decisions

## *11/02/22*
- Helped guide security team with OAuth implementation.

## *11/06/22*
- Got consensus on task display functionality, how we want the task items to be rolled over if at all.
  - Agreed that a task will expire on the day of creation, but the user will have the option to renew the task when looking at past dates and tasks for those days
- Fixed date selection feature on task view.
  - The problem was that the html input type date would be of format yyyy-mm-dd but the format for on screen display and api use is mm-dd-yyyy
  - The input type for html is also in string, so the left and right button for incrementing and decrementing date would need to go through string manipulation, and adjust the html input element also.
  - The left and right buttons are separate from the html element, so changing the date using the buttons would need to change the date variable, and the html input element to reflect currently selected date.
  - This would mean a conversion would need to be made between the html format and the mm-dd-yyyy format.

## *11/07/22*
- Added status cycling functionality
  - The status on a task item needs to change without a save or ok button to confirm. I decided the best way to do this would be to make the displayed status a button, when clicked would change the status and go from Not Started -> Started -> Completed -> rolled over
  - This was unexpectedly hard because I was trying to use the useEffect hook to initialize a status variable on load using the status prop from cells. This would cause the component to do an infinite loop, updating the the status variable, refreshing the page, updating the status variable. Had no idea why this was happening.
  - Realized an easier way to do it using useState hook. I will use this method for updating urgency

# Current Status
- Working on Task View (also TasksCell and TaskCard) which will be shown in Monthly, Weekly, Daily views.

# Completed Tasks
-