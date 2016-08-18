# Design interview questions

## Design interview tips

When doing design questions in person be sure to **ask a lot of questions**
before jumping in to writing a solution. Treat this interview as a conversation
with the interviewer.

While answering design questions you should cover:

1. **User interaction flow:** Describe the main pages of your app. What actions
  can users take on each page? How do users get from one page to another?
1. **Schema and query patterns:** Describe all your models. How to models connect
  to eachother? What queries do you need to run on your models?
1. **System overview:** What components is your system going to contain? You'll most
  likely have a web server and a database. Are you going to use caching? What technologies
  are you going to use for your server vs your database? Why?

## Messaging

Design a messaging app.

### Stage 1: Direct messages

- Users login with username and password
- Every user can message every other user
- All conversations are 1-1
- Users can find users by username
- Messages are grouped by user

### Stage 2: Group chat

- Users can message many users at the same time
- Sending a message to a group, should send a message to  
  every member of the group

### Stage 3: Chat rooms

- A chat room is like a group chat
- Chat rooms can be made private, in which case the room is
  invite-only.
- Each chat room has one or more admins who can kick people
  out of the room.

## Email filters

Design an email filtering system.

- What kind of email filters would you have?
- What sort of actions can people perform on filtered emails?
- How would you represent email filters?
- What happens when an email matches multiple filters?

## Multiplayer Poker

Build an online multi-player poker game with play money.

### Stage 1: Single poker game

Go into how to represent a hand, game state, table state.

- Players login with username and password
- Each player starts with 100 credits when they register
- There's a single game
- Players can spectate or join the game
- When player runs out of money they are out
- No limit, Texas hold-em rules

### Stage 2: Multiple games

- There are multiple games
- Players can see all active games
- Players can spectate and join games

## Team calendar app

Implement a calendaring app for people working in teams.

### Stage 1: One team

- Every user belongs to the same team
- Everyone can see each others' calendars

### Stage 2: Multiple teams

- Each person belongs to a single team
- Each team has a team admin that can add more people to the team
- Calendars are only visible to people on the same team.

### Stage 3: Recurring events

- How would you implement recurring events?

## Further reading

- [Comprehensive resources for systems design interviews](https://github.com/checkcheckzz/system-design-interview)
- [Palantir: How to ace a systems design interview](http://www.palantir.com/2011/10/how-to-rock-a-systems-design-interview/)
