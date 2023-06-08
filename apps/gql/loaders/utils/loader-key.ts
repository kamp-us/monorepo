export class LoaderKey<TIdentifier, TValue> {
  readonly identifier: TIdentifier;
  readonly value: TValue;

  constructor(identifier: TIdentifier, value: TValue) {
    this.identifier = identifier;
    this.value = value;
  }

  stringify() {
    return `${this.identifier}:${this.value}`;
  }
}
