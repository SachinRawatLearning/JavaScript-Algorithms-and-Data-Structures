class HashTable {
  constructor(arrSize = 53) {
    this.keyMap = new Array(arrSize);
  }

  //Hash Function
  _hash(key) {
    let total = 0;
    let prime = 31;

    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let value = key.charCodeAt(i) - 96;
      total = (total * prime + value) % this.keyMap.length;
    }
    return total;
  }

  _set(key, value) {
    const arrIndex = this._hash(key);
    console.log(arrIndex);
    //Separate Chaining
    if (this.keyMap[arrIndex]) {
    }
  }
}

const ht = new HashTable();
ht._set("pink");
