// Stażysta miał za zadanie stworzyć prostą stronę gdzie będzie wyświetlona lista wybranych bohaterów.
//  Na ten moment program miał nie pobierać danych z API tylko wrzucić “zmockowane” dane do kodu z myślą,
// aby łatwo później można było je podmienić prawdziwym requestem.
// Twoim zadaniem jest przygotować dla nas listę bugów w kodzie oraz przygotować listę
//  tzw. code smells, czyli miejsc gdzie jakość kodu jest mocno naciągana.
// Odpowiedź przygotuj w formie: linijka lub zakres linijek wraz z określeniem czemu uważasz to za bug.
const heroContainer = <HTMLDivElement>(
	document.querySelector('#js-heroContainer')
);
const heroCountSpan = <HTMLSpanElement>document.querySelector('#js-heroCount');

class Hero {
	name: string;
	#powerLevel = 10;

	constructor(name: string) {
		this.name = name;
	}
	getCurrentPowerLevel() {
		return this.#powerLevel;
	}
	train() {
		this.#powerLevel += 1; //check +1 add to bugs
	}
}

const heroesNamesFromApi = ['hulk', 'spiderman', 'geralt'];

const heroes = heroesNamesFromApi.map((hero) => new Hero(hero));
heroCountSpan.innerText = heroes.length.toString();

const printHallOfFame = (heroes: Hero[]) => {
	heroes.map((hero) => {
		const heroElement = document.createElement('div');
		const heroTextElement = document.createElement('span');
		const heroPowerUpButton = document.createElement('button');

		heroPowerUpButton.onclick = () => {
			hero.train();
			console.log(hero.getCurrentPowerLevel());

			heroTextElement.innerText = `${
				hero.name[0].toUpperCase() + hero.name.slice(1)
			}s power level is ${hero.getCurrentPowerLevel()}`;
		};
		heroPowerUpButton.innerText = `Train`;

		heroTextElement.innerText = `${
			hero.name[0].toUpperCase() + hero.name.slice(1)
		}s power level is ${hero.getCurrentPowerLevel()}`;

		heroElement.appendChild(heroTextElement);
		heroContainer.appendChild(heroElement);
		heroElement.appendChild(heroPowerUpButton);
	});
};

printHallOfFame(heroes);
