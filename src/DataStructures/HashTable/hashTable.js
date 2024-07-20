class HashTable {
  constructor(arrSize = 53) {
    this.keyMap = new Array(arrSize);
  }

  //Hash Function
  _hash(key) {
    let total = 0;
    const prime = 31;

    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let value = key.charCodeAt(i) - 96;
      total = (total * prime + value) % this.keyMap.length;
    }
    return total;
  }

  _set(key, value) {
    const arrIndex = this._hash(key);

    //Separate Chaining - store data at same spot using nested data structure
    if (!this.keyMap[arrIndex]) this.keyMap[arrIndex] = [];
    this.keyMap[arrIndex].push([key, value]);
  }

  _get(key) {
    const arrIndex = this._hash(key);

    if (!this.keyMap[arrIndex]) return undefined;

    for (let i = 0; i < this.keyMap[arrIndex].length; i++) {
      if (this.keyMap[arrIndex][i][0] === key)
        return this.keyMap[arrIndex][i][1];
    }
  }

  _print() {
    for (let ele of this.keyMap) console.log(ele);
  }
}
const ht = new HashTable(17);
ht._set("maroon", "#800000");
ht._set("yellow", "#FFFF00");
ht._set("olive", "#808000");
ht._set("salmon", "#FA8072");
ht._set("lightcoral", "#F08080");
ht._set("mediumvioletred", "#C71585");
ht._set("plum", "#DDA0DD");
console.log(ht._get("yellow"));
