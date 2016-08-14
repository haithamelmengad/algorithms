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
- Every user can message other users
- Users can find users by username
- Messages are grouped by user

### Stage 2: Group chat

- Users can message many users 

## Email filters

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

### Stage 2: Invite only games

- Some games are invite only


## Further reading

- [Comprehensive resources for systems design interviews](https://github.com/checkcheckzz/system-design-interview)
- [Palantir: How to ace a systems design interview](http://www.palantir.com/2011/10/how-to-rock-a-systems-design-interview/)
