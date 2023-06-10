// const delayedColorChange = (newColor, delay, doNext) => {
//   setTimeout(() => {
//     document.body.style.backgroundImage = newColor;
//     doNext && doNext();
//   }, delay);
// };

// const backgroundImage1 =
//   "https://images.unsplash.com/photo-1496167117681-944f702be1f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2232&q=80";
// const backgroundImage2 =
//   "https://images.unsplash.com/photo-1488998427799-e3362cec87c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80";

// delayedColorChange(`url${backgroundImage1}`, 1000, () => {
//   delayedColorChange(`url${backgroundImage2}`, 1000, () => {
//   });
// });
const people = [
  { name: "A", surname: "b" },
  { name: "B", surname: "c" },
  { name: "C", surname: "d" },
  { name: "D", surname: "e" },
];
console.table(people);
