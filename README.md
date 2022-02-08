# Test Envelo

My approach could still be refactored and improved, but it is definitely way better than the provided in the task :) 

## Bugs

[Contribution guidelines for this project](task.png)

### JS

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
14. line 45 map "x, arr" useless in that usecase
15. line 49 wrong innerHtml code, name will be an object, not name itself. paragraph tags are not closed proprely
16. I am sure there is a couple more, but i stopped looking at this point. Side note - i know how classes work, studied them but did not use them a lot in practice - i mainly used functional programming approach, only studied OOP(no real practice). For this reason, i am not sure if the usage of classes in this situation is the most optimal approach.

### HTML/CSS

1. styles should be in a separate file
2. line 13 - wrong usage of css variables. Should be var(--bg-color)
3. bad variable naming - should be something like --color-primary, --color-red or whatever.
4. line 18,19 - bad usage of margin-top, margin-bottom. Could simply use margin shorthand proprety.
5. line 29 - aria-main? whats that?
6. line 30 - it's not React :) class, not className.
7. line 31 - same here, its not react. Also, second usage of H1 Element on a page. There should always be 1 H1 element per page.
8. line 32 - double >>
9. line 33 - "Hero.train()" does not work for many reasons. first of all, it is not connected to any hero. It is also called immidietly. You can run JS in onClick properties, but Hero class is not visible in HTML
10. empty script tag?
11. js file is not connected to the html file.
