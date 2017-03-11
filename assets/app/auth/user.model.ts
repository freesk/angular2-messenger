export class User {
  constructor(public email: String,
              public password: String,
              // The question mark symbol means that a property is optional
              public firstName?: String,
              public lastName?: String) {}
}
