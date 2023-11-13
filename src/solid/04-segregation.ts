interface Bird {
  eat(): void;

}

interface FlyingBird {
  fly(): number;
}

interface RunningBird {
  run(): void;
}

interface SwimmerBird {
  swim(): void;
}


class Tucan implements Bird, FlyingBird {

  public fly()  { return 200; }
  public eat() { }
}

class Hummingbird implements Bird, FlyingBird {

  public fly() { return 50; }
  public eat() { }

}

class Ostrich implements Bird, RunningBird {

  public eat(): void { }
  public run(): void { }

}


class Penguin implements Bird, SwimmerBird {

  public eat(): void { }
  public swim(): void { }

}