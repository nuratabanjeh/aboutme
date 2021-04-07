/* eslint-disable indent */
'usestrict';
let userName = prompt('welcome to my website, what is your name?');
userName = userName.toLowerCase();
//console.log(userName);
alert('Hello ' + userName);
let score = 0;

question1();
question2();
question3();
question4();
question5();

function question1() {
  let job = prompt('do you think i am an engineer?');
  switch (job.toLowerCase()) {
    case 'yes':
    case 'y':
      alert('Bravo ' + userName);
      score++;
      break;
    case 'no':
    case 'n':
      alert('wrong');
      break;
    default:
      alert('its ok');
  }
}

function question2() {
  let freeTime = prompt('do you think i like to spend time with my friends?');
  switch (freeTime.toLowerCase()) {
    case 'yes':
    case 'y':
      alert('ofcourse ' + userName);
      score++;
      break;
    case 'no':
    case 'n':
      alert('wrong');
      break;
    default:
      alert('its ok');
  }
}

function question3() {
  let myfriend = prompt('would you like to be my friend?');
  switch (myfriend.toLowerCase()) {
    case 'yes':
    case 'y':
      alert('nice to meet you my friend');
      score++;
      break;
    case 'no':
    case 'n':
      alert('you loser');
      break;
    default:
      alert('its ok');
  }
}

function question4() {
  let music = prompt('do you think i like classic music?');
  switch (music.toLowerCase()) {
    case 'yes':
    case 'y':
      alert('yes i really enjoy this type of music');
      score++;
      break;
    case 'no':
    case 'n':
      alert(' OMG wrong');
      break;
    default:
      alert('its ok');
  }
}

function question5() {
  let series = prompt('do you think i like historical series?');
  switch (series.toLowerCase()) {
    case 'yes':
    case 'y':
      alert('yes i really enjoy them specially "vikings"');
      score++;
      break;
    case 'no':
    case 'n':
      alert('wrong');
      break;
    default:
      alert('its ok');
  }
}

let myage = parseInt(prompt('guess my age'));
for (let i = 1; i <= 4; i++) {
  if (myage === 25) {
    alert('right');
    score++;
    break;
  } else if (myage > 25) {
    console.log(myage);

    myage = parseInt(prompt('too high try again please'));
  } else if (myage < 25) {
    myage = parseInt(prompt('too low try again please'));
  }
  if (i === 4) {
    alert('you lost, im 25 years old');
  }
}
let topsong = ['iris', 'yellow', 'grace kelly'];
let usersong = prompt('guess my favorite song');
for (let i = 1; i <= 6; i++) {
  if (
    usersong === topsong[0] ||
    usersong === topsong[1] ||
    usersong === topsong[2]
  ) {
    alert('correct');
    score++;
    break;
  } else {
    usersong = prompt('wrong guess again please');
  }
}

alert(
  'No more questions ' +
    userName +
    'your score is ' +
    score +
    ' enjoy my website'
);
