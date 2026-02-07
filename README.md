# 🐻 Bear Ninja Hunter Game - Part 3 🎯

**Repository:** CA8-JS3-BNH  
**Live Demo:** [GitHub Pages URL]

## 📋 Assignment Summary
This is the third iteration of the Bear Ninja Hunter game, implementing arrays, loops, randomization, and enhanced user interaction features.

## 🎮 Game Description
An interactive web-based game where players compete against a randomly-choosing computer in a Rock-Paper-Scissors style game with Bear, Ninja, and Hunter choices.

### Game Rules
- 🐻 **Bear** beats 🥷 Ninja (Bear mauls Ninja)
- 🥷 **Ninja** beats 🎯 Hunter (Ninja ambushes Hunter)
- 🎯 **Hunter** beats 🐻 Bear (Hunter shoots Bear)

## ✨ New Features (Part 3)

### 1. **Array Implementation**
- Game choices stored in an array: `["bear", "ninja", "hunter"]`
- Uses `array.length` property instead of hard-coded values

### 2. **Random Computer Choice**
- Computer selects randomly using `Math.random()`
- No longer hard-coded to always choose "Bear"
- Uses array index for random selection

### 3. **Loop Functionality**
- Players can play multiple games in one session
- While loop handles replay functionality
- Game continues until player chooses to stop

### 4. **Enhanced Input Handling**
- **Forced Case**: All inputs converted to lowercase
- **Input Validation**: Checks for empty, invalid, and cancelled inputs
- **Detailed Error Messages**: Specific feedback for incorrect inputs

### 5. **Game Flow Improvements**
- Automatic game start on page load
- Personalized player name handling
- Statistics tracking (wins, losses, ties)
- Final results summary

## 🛠️ Technical Implementation

### Core Concepts Demonstrated
- **Arrays**: Store and access game choices
- **Math.random()**: Generate random computer choices
- **Loops**: `for` loops for array traversal, `while` loops for gameplay
- **String Methods**: `toLowerCase()`, `trim()`, `charAt()`
- **Conditional Logic**: `if/else` statements and `switch` cases
- **DOM Manipulation**: Dynamic HTML updates

### Key Code Features
```javascript

