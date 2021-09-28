/*
    JavaScript Programming
    Concatenation Exercise 1
    Oscar Vazquez
*/

let textDivision = "~~~~~~~~~~~~~~~~"
console.log(textDivision);
let text = "Fred was exited about starting his course at NBCC.\n"+ 
            "Web and Mobile Application development was " + 
            "the program Fred entered in the Fall of 2019. \n" +
            "Intro to Programming is going to be the course " + 
            "Fred likes best. Fred is going to study very hard.\n" +
            "Each night Fred is going to spend time reviewing all " +
            "of the course material.\n"
            "Fred will be committed to learning as much as possible" + 
            "about C# in 2019!\n"
console.log(text);
console.log(textDivision);

let firstName = "Fred"
let nameConcat = firstName + " was exited about starting his course at NBCC.\n" + 
            "Web and Mobile Application development was " + 
            'the program ' + firstName + ' entered in the Fall of 2019. \n' +
            "Intro to Programming is going to be the course " + 
            firstName + ' likes best. ' + firstName + ' is going to study very hard.\n' +
            'Each night ' + firstName + 'is going to spend time reviewing all ' +
            "of the course material.\n"
            firstName + ' will be committed to learning as much as possible' + 
            "about C# in 2019!\n"
console.log(nameConcat);
console.log(textDivision);

let templateLit = `${firstName} was exited about starting his course at NBCC.\n` + 
            "Web and Mobile Application development was " + 
            `the program ${firstName} entered in the Fall of 2019. \n` +
            "Intro to Programming is going to be the course" + 
            ` ${firstName} likes best. ${firstName} is going to study very hard.\n` +
            `Each night ${firstName} is going to spend time reviewing all` +
            `of the course material.\n` +
            `${firstName} will be committed to learning as much as possible` + 
            ' about C# in 2019!\n'
console.log(templateLit);
console.log(textDivision);