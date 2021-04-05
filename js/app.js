"usestrict";
var userName = prompt('welcome to my website, what is your name?');
userName = userName.toLowerCase();
//console.log(userName);
alert('Hello '+ userName);

let job = prompt('do you think i am an engineer?');
switch(job.toLowerCase()){
    case'yes':
    alert('Bravo ' + userName);
    break;
    case'no':
    alert('wrong');
    break;
}
let freeTime = prompt('do you think i like to spend time with my friends?');
switch(freeTime.toLowerCase()){
    case'yes':
    alert('ofcourse ' + userName);
    break;
    case'no':
    alert('wrong');
    break;
}

let myfriend = prompt('would you like to be my friend?');
switch(myfriend.toLowerCase()){
    case'yes':
    alert('nice to meet you my friend');
    break;
    case'no':
    alert('you loser');
    break;
}
let music = prompt('do you think i like classic music?');
switch(music.toLowerCase()){
    case'yes':
    alert('yes i really enjoy this type of music');
    break;
    case'no':
    alert(' OMG wrong');
    break;
}

let series = prompt('do you think i like historical series?');
switch(series.toLowerCase()){
    case'yes':
    alert('yes i really enjoy them specially "vikings"');
    break;
    case'no':
    alert('wrong');
    break;
}

alert('No more questions ' + userName +' enjoy my website');



