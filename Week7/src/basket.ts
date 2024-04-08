import { Sport } from './sport';

export class Basket extends Sport {
	courtType: string;
	hoops: number;
	ballType: string;
  
	constructor(name: string, players: number, origin: string, courtType: string, hoops: number, ballType: string) {
	  super(name, players, origin);
	  this.courtType = courtType;
	  this.hoops = hoops;
	  this.ballType = ballType;
	}
  
	displayBasketballInfo(): void {
	  super.displayInfo();
	  console.log(`Court Type: ${this.courtType}`);
	  console.log(`Number of Hoops: ${this.hoops}`);
	  console.log(`Ball Type: ${this.ballType}`);
	}
  
	shoot(): void {
	  console.log(`Executing a shoot in ${this.name} game.`);
	}
  
	dribble(): void {
	  console.log(`Executing a dribble in ${this.name} game.`);
	}
  
	pass(): void {
	  console.log(`Executing a pass in ${this.name} game.`);
	}
  }