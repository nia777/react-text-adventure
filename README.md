# react-text-adventure-game

**Note this repo is archived and won't be receiving updates, so the code might not match current conventions. Keeping this around as a reminder of how far I've come.**

## Background
Decided to rewrite an [older angular 1 project](https://github.com/deeheber/text-adventure-game) in react for fun.

## Description
An office inspired escape game. Can you sneak out of work early without your boss knowing to meet your top pal at the Pabst Music Festival?

[Play here](https://deeheber.github.io/react-text-adventure/)

## Install Instructions
1. Clone repo
2. `cd` into the root folder and `yarn install`
3. `yarn start` will run a dev version of the app on port 3000
4. `yarn build` will create a prod ready version of the app and place these files into a `build` folder

## Tests
1. `yarn test:ui` to run ui behavior tests via [cypress](https://www.cypress.io/)
2. `yarn test:cli` to run a headless version of the ui behavior tests
