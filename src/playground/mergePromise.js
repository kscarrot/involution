const timeout = (ms) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
    }, ms)
  })

const ajax1 = () =>
  timeout(2000).then(() => {
    console.log('1')
    return 1
  })

const ajax2 = () =>
  timeout(1000).then(() => {
    console.log('2')
    return 2
  })

const ajax3 = () =>
  timeout(2000).then(() => {
    console.log('3')
    return 3
  })

const mergePromise = (ajaxArray) =>
  ajaxArray.reduce(
    (p, ajax) => p.then((data) => new Promise((res) => ajax().then((value) => res([...data, value])))),
    Promise.resolve([]),
  )

//async way
// const mergePromise = async (ajaxArray) => {
//   const data = []
//   for (let i = 0; i < ajaxArray.length; i++) {
//     const ajax = ajaxArray[i]
//     await ajax().then((value) => data.push(value))
//   }
//   return data
// }

mergePromise([ajax1, ajax2, ajax3]).then((data) => console.log(data))
