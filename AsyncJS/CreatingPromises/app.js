// const fakeRequest = (url) => {
//   return new Promise((resolve, reject) => {
//     const rand = Math.random()
//     setTimeout(() => {
//       if(rand < 0.7) {
//         resolve('YOUR FAKE DATA HERE');
//       }
//       reject('REQUEST ERROR');
//     }, 1000)
//   })
// }

// fakeRequest('/dogs/1')
//   .then((data) => {
//     console.log('DONE WITH REQUEST!');
//     console.log('data is:', data);
//   })
//   .catch((err) => {
//     console.log('OH NO!', err);
//   });

// const delayedColorChange = (newColor, delay, doNext) => {
//   setTimeout(() => {
//     document.body.style.backgroundColor = newColor;
//     doNext && doNext();
//   }, delay);
// }
// delayedColorChange('red', 1000, () => {
//   delayedColorChange('orange', 1000, () => {
//     delayedColorChange('yellow', 1000, () => {
//       delayedColorChange('green', 1000, () => {
//         delayedColorChange('blue', 1000, () => {
//           delayedColorChange('olive', 1000, () => {
//             delayedColorChange('teal', 1000)
//           })
//         })
//       })
//     })
//   });
// });

const delayedColorChange = (color, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      document.body.style.backgroundColor = color;
      resolve();
    }, delay)
  })
}

delayedColorChange('red', 1000)
  .then(() => {
    return delayedColorChange('red', 1000)
  })
  .then(() => {
    return delayedColorChange('orange', 1000)
  })
  .then(() => {
    return delayedColorChange('yellow', 1000)
  })
  .then(() => {
    return delayedColorChange('green', 1000)
  })
  .then(() => {
    return delayedColorChange('blue', 1000)
  })
  .then(() => {
    return delayedColorChange('olive', 1000)
  })
  .then(() => {
    return delayedColorChange('teal', 1000)
  })