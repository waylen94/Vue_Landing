const ls = localStorage

export default {

  setItem(name, value) {
    ls.setItem(name, JSON.stringify(value))
  },

  getItem(name) {
    try {
      return JSON.parse(ls.getItem(name))
    } catch (e) {
      return null
    }
  },

  removeItem(name) {
    ls.removeItem(name)
  },

//   all(){
//     var archive = [];
//     for (var i = 0; i<ls.length; i++) {
// console.log(i);
//       let date = ls.key(i);

//       archive[i] = JSON.parse(ls.getItem(ls.key(i)));

//       archive[i].push({
//         date: date,
//       });
//     }
//     return archive
//   }

}
