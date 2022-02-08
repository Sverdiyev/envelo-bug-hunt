# Bugs

## JS

1. line 26, 27 - calling gethero function before with a parameter, while the gethero function does not take any paramenters.
2. line 26, 27, 34 - function should use camelCase naming: getHero instead of gethero.
3. line 26 - 'hero' variable - bad naming; would probably use naming smth like heroGeralt, heroHulk, heroSpiderman etc.
4. line 36 - declaring hero variable when it is already declared. While it is possible and allowed(because the variables with let/const are block scoped), it is a bad practice - simply for code reading.
5. line 36 - why declare the hero spiderman inside the function? unclear to me
6. line 36 - passing parameter 'spider' to gethero function? spider is not declared, gethero does not take parameters
7. line 32 - function called before it is declared. while it would be possible with function declaration, it is not possible with function expression. function expressions should be declared before they are used in code.
8. line 32 - naming. would probably name printHallOfFame.
9. lines 34-37 - whats the point of this function? unclear to me.
10. line 39 - discussed in point #7.
11. line 40,41 - why do this inside the function? unclear to me.
12. line 43 - query selecter is written poorly. it should either be simply 'div' (unless ID div was used somewhere, which also is a bad naming practice) or, preferably, by classname, smth like '.herosContainer'.
13. line 22 - heroCount is useless. heroes.length could be used to extract the desired result.
