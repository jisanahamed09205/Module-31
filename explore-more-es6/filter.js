// filter select element based on condition and returns an array with the elements that fullfill the condition
const numbers = [12,36,8,7];
const player = [85,72,69,56,45];
// const selected = player.filter(p => p > 70);
// const selected = player.filter(p => p > 90);
// const selected = player.filter(p => p > 40);
const selected = player.filter(p => p % 2 === 1);
// console.log(selected);

// const friends = ['jisan', 'jihad','shishir','tutul','siam','emon','yeasin','saiful']
// const oddFriends = friends.filter(frnd => frnd.length % 2 === 1)
// // console.log(oddFriends);

const friends = ['jisan', 'jihad','shishir','tutul','siam','emon','yeasin','saiful']
const oddFriends = friends.filter(frnd => frnd.length > 6)
// console.log(oddFriends);

const friends2 = ['jisan', 'jihad','shishir','tutul','siam','emon','yeasin','saiful']
const evenFriends = friends2.filter(frnd => frnd.length % 2 === 0)
// console.log(evenFriends);



