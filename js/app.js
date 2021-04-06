'usestrict';
let userName = prompt('welcome to my website, what is your name?');
userName = userName.toLowerCase();
//console.log(userName);
alert('Hello '+ userName);

let job = prompt('do you think i am an engineer?');
switch(job.toLowerCase()){
case'yes':
case'y':
alert('Bravo '+ userName);
break;
case'no':
case'n':
    alert('wrong');
    break;
    default:
        alert('its ok');
}
let freeTime = prompt('do you think i like to spend time with my friends?');
switch(freeTime.toLowerCase()){
    case'yes':
    case'y':
    alert('ofcourse ' + userName);
    break;
    case'no':
    case'n':
    alert('wrong');
    break;
    default:
        alert('its ok');
}

let myfriend = prompt('would you like to be my friend?');
switch(myfriend.toLowerCase()){
    case'yes':
    case'y':
    alert('nice to meet you my friend');
    break;
    case'no':
    case'n':
    alert('you loser');
    break;
    default:
        alert('its ok');
}
let music = prompt('do you think i like classic music?');
switch(music.toLowerCase()){
    case'yes':
    case'y':
    alert('yes i really enjoy this type of music');
    break;
    case'no':
    case'n':
    alert(' OMG wrong');
    break;
    default:
        alert('its ok');
}

let series = prompt('do you think i like historical series?');
switch(series.toLowerCase()){
    case'yes':
    case'y':
    alert('yes i really enjoy them specially "vikings"');
    break;
    case'no':
    case'n':
    alert('wrong');
    break;
    default:
        alert('its ok');
}

alert('No more questions ' + userName +' enjoy my website');



