const sha256 = require('js-sha256');

class KeyValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class HashTable {

  constructor(numBuckets = 4) {
    this.capacity = numBuckets
    this.data = new Array(this.capacity).fill(null)
    this.count = 0
  }

  hash(key) {
    let str = sha256(key).slice(0, 8)
    const so = parseInt(str, 16)

    return so
  }

  hashMod(key) {
    return this.hash(key) % this.capacity
  }

  insertNoCollisions(key, value) {
    const bucketIndex = this.hashMod(key);


    if (!this.data[bucketIndex]) {
      const newKeyValuePair = new KeyValuePair(key, value);
      this.data[bucketIndex] = newKeyValuePair;
      this.count++;
    } else {
      if (this.data[bucketIndex].key === key && this.data[bucketIndex].value === value) {
        throw new Error('hash collision or same key/value pair already exists!');
      } else {
        throw new Error('hash collision or same key/value pair already exists!');
      }
    }





  }

  insertWithHashCollisions(key, value) {




  }

  insert(key, value) {



  }

}

module.exports = HashTable;
