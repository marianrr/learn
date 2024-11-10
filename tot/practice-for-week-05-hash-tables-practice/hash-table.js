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
    const index = this.hashMod(key);
    const pair = new KeyValuePair(key, value);

    if (this.data[index] === null) {
      this.data[index] = pair;
      this.count++;
    } else {
      let current = this.data[index];

      // Check if the key already exists in the linked list
      while (current && current.key !== key) {
        current = current.next;
      }

      if (current) {
        // Key already exists, update the value
        current.value = value;
      } else {
        // Key doesn't exist, add the new pair to the head of the linked list
        pair.next = this.data[index];
        this.data[index] = pair;
        this.count++;
      }
    }
  }

  insert(key, value) {
    if (this.data === null) {
      throw new Error('No hash table data present');
    }

    if (this.capacity === 0) {
      throw new Error('No capacity set for hash table');
    }

    if (key === null || value === null) {
      throw new Error('Key or value is null');
    }

    const index = this.hashMod(key);
    const pair = new KeyValuePair(key, value);

    if (this.data[index] === null) {
      this.data[index] = pair;
      this.count++;
    } else {
      let current = this.data[index];

      // Check if the key already exists in the linked list
      while (current && current.key !== key) {
        current = current.next;
      }

      if (current) {
        // Key already exists, update the value
        current.value = value;
      } else {
        // Key doesn't exist, add the new pair to the head of the linked list
        pair.next = this.data[index];
        this.data[index] = pair;
        this.count++;
      }
    }
  }

}

module.exports = HashTable;
