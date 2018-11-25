export class CounterService {
  toActive = 0;
  toInActive = 0;

  incrementToActive() {
    this.toActive++;
    console.log('toActive:' + this.toActive);
  }

  incrementToInActive() {
    this.toInActive++;
    console.log('toInActive:' + this.toInActive);
  }


}
