import {Sport} from './sport';

class Volleyball extends Sport {
    courtType: string;
    rules: string;
    teamSize: number;
  
    constructor(name: string, players: number, origin: string, courtType: string, rules: string, teamSize: number) {
      super(name, players, origin);
      this.courtType = courtType;
      this.rules = rules;
      this.teamSize = teamSize;
    }
  
    displayVolleyballInfo(): void {
      super.displayInfo();
      console.log(`Court Type: ${this.courtType}`);
      console.log(`Rules: ${this.rules}`);
      console.log(`Team Size: ${this.teamSize}`);
    }
  
    spike(): void {
      console.log(`Executing a spike in ${this.name} game.`);
    }
  
    block(): void {
      console.log(`Executing a block in ${this.name} game.`);
    }
  
    serve(): void {
      console.log(`Executing a serve in ${this.name} game.`);
    }
  }