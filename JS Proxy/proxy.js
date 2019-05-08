//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy

const handler = {
    //handle traps like: get, set, construct, apply
    get(obj, prop) {
        return prop in obj ?
            obj[prop] :
            'Not a property of "p"';
    }
};

const p = new Proxy({}, handler);
p.a = 1;
p.b = undefined;
//p.c = 'hello'

console.log(p.a, p.b)
console.log('c' in p, p.c)

const IndexedArray = new Proxy(Array, {
    construct(target, [originalArray]) {
      const index = {}
      originalArray.forEach((item) => {
        index[item.id] = item
      })
  
      const newArray = new target(...originalArray)
  
      return new Proxy(newArray, {
        get(target, name) {
          if (name === 'push') {
            return  (item) => {
              index[item.id] = item
              return target[name].call(target, item)
            }
          } else if (name === 'findById') {
            return (searchId) => {
              return index[searchId]
            }
          }
          return target[name]
        }
      })
    }
  })
  
  const bears = new IndexedArray([
    {
      id: 2,
      name: 'grizzly',
    },
    {
      id: 4,
      name: 'black',
    },
    {
      id: 3,
      name: 'polar',
    },
  ])
  
  bears.push({
    id: 55,
    name: 'brown'
  })
  
  const brown = bears.findById(55)
  console.log(brown)
  console.log(bears.findById(3))
  




  
  const person = {
    first: 'Bear',
    last: 'McBearison'
  }
  
  const cleverPerson = new Proxy(person, {
    get(target, prop) {
      if (!(prop in target)) {
        return prop.split('_').map((part) => {
          return target[part]
        }).join(' ')
      }
      return target[prop]
    }
  })
  
  console.log(cleverPerson.last_first_first_first_first_first)
  
  cleverPerson.last = 'Beary'
  console.log(cleverPerson.first_last)