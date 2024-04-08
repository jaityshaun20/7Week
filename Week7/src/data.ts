class User {
    constructor(public id: number, public name: string, public age: number) {}
  }
  
  class Data {
    private rows: Map<number, User> = new Map<number, User>();
    add(user: User): void {
      this.rows.set(user.id, user);
    }
    update(id: number, partialUser: Partial<User>): void {
      const user = this.rows.get(id);
      if (user) {
        const updatedUser = { ...user, ...partialUser };
        this.rows.set(id, updatedUser);
      } else {
        console.log("User not found.");
      }
    }

    delete(user: User): void {
      let found = false;
      this.rows.forEach((value, key) => {
        if (value === user) {
          this.rows.delete(key);
          found = true;
        }
      });
      if (!found) {
        console.log("User not found.");
      }
    }
  
    get(id: number): User | undefined {
      return this.rows.get(id);
    }
  }
  