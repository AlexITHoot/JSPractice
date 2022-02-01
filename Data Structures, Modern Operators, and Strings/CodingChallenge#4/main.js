'use strict';

//TEST DATA

// underscore_case
//  first_name
// Some_variable
//   calculate_AGE
// delayed_departure

const createTextarea = document.createElement('textarea');
const createBtn = document.createElement('button');
createBtn.innerHTML = 'Click';
document.body.append(createTextarea);
document.body.append(createBtn);

const btn = document.querySelector('button');

btn.addEventListener('click', function () {
  // const text = document.querySelector('textarea').value.split('\n');
  // for (const item of text) {
  //   const newItem = item.trim().toLocaleLowerCase().split('_');
  //   const uperWord = newItem[1].slice(0, 1).toUpperCase() + newItem[1].slice(1);
  //   const camelCaseWord = newItem[0] + uperWord + ' ✅';
  //   console.log(camelCaseWord);
  // }

  const text = document.querySelector('textarea').value;
  const rows = text.split('\n');

  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split('_');
    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(`${output.padEnd(20, ' ')} ${'✅'.repeat(i + 1)}`);
  }
});
