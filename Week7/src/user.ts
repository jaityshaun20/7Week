//step two 
import { Basket } from './basket';
import { Soccer } from './soccer';
let id: number = 0;
id+=110024546;
const basketballGame = new Basket("Basketball", 5, "United States", "Indoor", 2, "Standard");
basketballGame.displayBasketballInfo();
basketballGame.play();
basketballGame.shoot();
basketballGame.dribble();
basketballGame.pass();
basketballGame.end();

const soccerGame = new Soccer("Soccer", 11, "England", "Outdoor", "Standard", "Standard");
soccerGame.displaySoccerInfo();
soccerGame.play();
soccerGame.shoot();
soccerGame.pass();
soccerGame.tackle();
soccerGame.end();