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

    if (this.keyMap[arrIndex]) {
      for (const element of this.keyMap[arrIndex]) {
        if (element[0] === key) return element[1];
      }
    }
    return undefined;
  }

  _keys() {
    const keys = [];
    for (const elements of this.keyMap) {
      if (elements) {
        for (const item of elements) {
          if (!keys.includes(item[0])) keys.push(item[0]);
        }
      }
    }
    console.log(keys);
  }

  _values() {
    const values = [];
    for (const elements of this.keyMap) {
      if (elements) {
        for (const item of elements) {
          if (!values.includes(item[1])) values.push(item[1]);
        }
      }
    }
    console.log(values);
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
ht._set("plum", "#DDA0DD");
console.log(ht._get("maroon"));
ht._keys();
ht._values();
