(() => {

  // No se aplica el principio de responsabilidad única

  type Gender = 'M' | 'F';

  class Person {
    constructor(public name: string, public gender: Gender, public birthDate: Date) {
    }
  }

  const newPerson = new Person('John Doe', 'M', new Date('1990-01-01'));
  console.log({ newPerson });

  class User extends Person {

    public lastAccess: Date;

    constructor(
      public email: string,
      public role: string,
      name: string,
      gender: Gender,
      birthDate: Date,
    ) {
      super(name, gender, birthDate);
      this.lastAccess = new Date();
    }

    checkCredentials(): boolean {
      return true;
    }
  }

  class UserSettings extends User {
    constructor(
      email: string,
      role: string,
      name: string,
      gender: Gender,
      birthDate: Date,
      public workingDirectory: string,
      public lastOpenFolder: string,
    ) {
      super(email, role, name, gender, birthDate);
    }
  }


  const userSettings = new UserSettings(
    'john@gmail.com',
    'admin',
    'John Doe',
    'M',
    new Date('1990-01-01'),
    '/usr/home',
    '/usr/home/projects',
  );

  console.log({ userSettings });
})();

