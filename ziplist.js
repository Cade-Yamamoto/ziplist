const arr1 = ['a', 'b', 'c'];
const arr2 = ['1', '2', '3'];
function ziplist(list1, list2) {
  const list = [];
  for (let i = 0; i < list1.length; i++) {
    list.push(list1[i], list2[i]);
  }
  return list;
}
console.log(ziplist(arr1, arr2));

function zipListTheSimpleWay(list1, list2) {
  return _.flatten(_.zip(list1, list2));
}
console.log(zipListTheSimpleWay(arr1, arr2));
