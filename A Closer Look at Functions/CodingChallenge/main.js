'use strict';

const button = document.querySelector('button');

const poll = {
  question: 'asdskla kdasdkj s',
  options: ['0:JS', '1:C++', '2:C#', '3:Pascal'],
  register: function () {
    const number = `${this.question}\n${this.options.join('\n')}`;
    const result = Number(prompt(number));
    console.log(typeof result, result);
    this.update(result);
    this.show();
  },
  update: function (input) {
    let value = this.answers[input];
    if (typeof value === 'undefined') {
      return;
    }
    this.answers[input]++;
  },
  show: function () {
    console.log(this.answers);
  },
  answers: new Array(4).fill(0),
};

button.addEventListener('click', poll.register.bind(poll));

// poll.register();
// poll.update();
// console.log(poll.answers);
