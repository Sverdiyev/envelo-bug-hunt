"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _Hero_powerLevel;
// Stażysta miał za zadanie stworzyć prostą stronę gdzie będzie wyświetlona lista wybranych bohaterów.
//  Na ten moment program miał nie pobierać danych z API tylko wrzucić “zmockowane” dane do kodu z myślą,
// aby łatwo później można było je podmienić prawdziwym requestem.
// Twoim zadaniem jest przygotować dla nas listę bugów w kodzie oraz przygotować listę
//  tzw. code smells, czyli miejsc gdzie jakość kodu jest mocno naciągana.
// Odpowiedź przygotuj w formie: linijka lub zakres linijek wraz z określeniem czemu uważasz to za bug.
const heroContainer = (document.querySelector('#js-heroContainer'));
const heroCountSpan = document.querySelector('#js-heroCount');
class Hero {
    constructor(name) {
        _Hero_powerLevel.set(this, 10);
        this.name = name;
    }
    getCurrentPowerLevel() {
        return __classPrivateFieldGet(this, _Hero_powerLevel, "f");
    }
    train() {
        __classPrivateFieldSet(this, _Hero_powerLevel, __classPrivateFieldGet(this, _Hero_powerLevel, "f") + 1, "f"); //check +1 add to bugs
    }
}
_Hero_powerLevel = new WeakMap();
const heroesNamesFromApi = ['hulk', 'spiderman', 'geralt'];
const heroes = heroesNamesFromApi.map((hero) => new Hero(hero));
heroCountSpan.innerText = heroes.length.toString();
const powerUpButtonHandler = (e) => {
    e.preventDefault();
};
const printHallOfFame = (heroes) => {
    heroes.map((hero) => {
        const heroElement = document.createElement('div');
        const heroTextElement = document.createElement('span');
        const heroPowerUpButton = document.createElement('button');
        heroPowerUpButton.onclick = () => {
            hero.train();
            console.log(hero.getCurrentPowerLevel());
            heroTextElement.innerText = `${hero.name[0].toUpperCase() + hero.name.slice(1)}s power level is ${hero.getCurrentPowerLevel()}`;
        };
        heroPowerUpButton.innerText = `Train`;
        heroTextElement.innerText = `${hero.name[0].toUpperCase() + hero.name.slice(1)}s power level is ${hero.getCurrentPowerLevel()}`;
        heroElement.appendChild(heroTextElement);
        heroContainer.appendChild(heroElement);
        heroElement.appendChild(heroPowerUpButton);
    });
};
printHallOfFame(heroes);
