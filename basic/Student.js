class Student {
  constructor(name, dob, id, flatnum, apartments, state, Country, pocketMoney) {
    this.name = name;
    this.dob = dob;
    this.id = id;
    this.address = {
      flatnum: flatnum,
      apartments: apartments,
      state: state,
      Country: Country,
    };
    this.pocketMoney = pocketMoney;
  }
  increasePocketMoney(pocketMoney) {
    this.pocketMoney = pocketMoney;
  }
  getAge(){
    const age = new Date() - new Date(this.dob);
    return Math.floor(age / (1000 * 60 * 60 * 24 * 365));
  }
}

export default Student; 