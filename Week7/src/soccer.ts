import { Sport } from './sport';

export class Soccer extends Sport {
	fieldType: string;
	goalSize: string;
	ballType: string;
  
	constructor(name: string, players: number, origin: string, fieldType: string, goalSize: string, ballType: string) {
	  super(name, players, origin);
	  this.fieldType = fieldType;
	  this.goalSize = goalSize;
	  this.ballType = ballType;
	}
  
	displaySoccerInfo(): void {
	  super.displayInfo();
	  console.log(`Field Type: ${this.fieldType}`);
	  console.log(`Goal Size: ${this.goalSize}`);
	  console.log(`Ball Type: ${this.ballType}`);
	}
  
	shoot(): void {
	  console.log(`Executing a shoot in ${this.name} game.`);
	}
  
	pass(): void {
	  console.log(`Executing a pass in ${this.name} game.`);
	}
  
	tackle(): void {
	  console.log(`Executing a tackle in ${this.name} game.`);
	}
  }
  