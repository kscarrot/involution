const { myNew } = require('./myNew')

describe('test myNew', () => {
  it('it shoud bind new context', () => {
    function Person(name) {
      this.name = name
    }

    Person.prototype.say = function () {
      return `hello,${this.name}`
    }

    let q = myNew(Person, 'jerry')
    expect(q.say()).toBe('hello,jerry')
    expect(q instanceof Person).toBe(true)

    let p = myNew(Person, 'tom')
    expect(p instanceof Person).toBe(true)
    expect(p.say()).toBe('hello,tom')
    expect(q.say()).toBe('hello,jerry')
  })
})
