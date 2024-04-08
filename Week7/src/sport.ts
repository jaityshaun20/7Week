export class Sport {
    name: string;
    players: number;
    origin: string;
  
    constructor(name: string, players: number, origin: string) {
      this.name = name;
      this.players = players;
      this.origin = origin;
    }
  
    displayInfo(): void {
      console.log(`Name: ${this.name}`);
      console.log(`Players: ${this.players}`);
      console.log(`Origin: ${this.origin}`);
    }
  
    play(): void {
      console.log(`${this.name} is being played.`);
    }
  
    end(): void {
      console.log(`${this.name} is over.`);
    }
 }