export const unsortedList = document.getElementById('score-table');

export default (item) => {
  const list = document.createElement('li');
  list.classList.add('element');
  list.innerText = `${item.user}: ${item.score}`;
  unsortedList.appendChild(list);
};