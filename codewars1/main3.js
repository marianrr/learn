function countFruits(halfFruits){
    let arr = []
    let lol = new Map()
      for(let i = 0; i < halfFruits.length; i = i+2) {
        if(halfFruits[i] < halfFruits[i+1]) continue
        else {
          const fruit = halfFruits[i] + halfFruits[i+1]
          if(fruitsName.includes(fruit)) arr.push(fruit)
        }
        arr = arr.sort((a, b) => a-b)
      console.log(arr)
        for(let j = 0; j < arr.length; j++) {
          let num = 0
          if(arr[j] === arr[j+1]) num++
          else {
            lol.set(`${arr[j]}`, num)
            num = 0
          }
        }
      }
      return lol
    }
    
    
    countFruits((["app","le","pe","ar","ban","ana"]))