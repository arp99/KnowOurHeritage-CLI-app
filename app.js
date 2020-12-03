const readLineSync = require('readline-sync');
const chalk = require('chalk');

const questions = [
    {
        question: 'UNESCO world heritage site “Fatehpur Sikri” is in which state?',
        options: {
            a: 'Karnataka',
            b: 'Uttar Pradesh',
            c: 'Goa',
            d: 'Maharashtra'
        },
        correctAns: 'b'
    },
    {
        question: 'Taj Mahal is in which state of India?',
        options: {
            a: 'Delhi',
            b: 'Rajasthan',
            c: 'Orissa',
            d: 'Uttar Pradesh'
        },
        correctAns: 'd'
    },
    {
        question: 'Group of Monuments at Mahabalipuram is in which state?',
        options: {
            a: 'Tamil Nadu',
            b: 'Gujarat',
            c: 'Karnataka',
            d: 'Orissa'
        },
        correctAns: 'a'
    },
    {
        question: 'In the case of Western Ghats how many properties were designated as world heritage sites in India?',
        options: {
            a: '59',
            b: '29',
            c: '19',
            d: '39'
        },
        correctAns: 'd'
    },
    {
        question: 'In which state Elephanta Caves is located?',
        options: {
            a: 'Karnataka',
            b: 'Gujarat',
            c: 'Maharashtra',
            d: 'West Bengal'
        },
        correctAns: 'c'
    },
    {
        question: 'Khajuraho Group of Monuments is in which state?',
        options: {
            a: 'Madhya Pradesh',
            b: 'Karnataka',
            c: 'Orissa',
            d: 'Bihar'
        },
        correctAns: 'a'
    },
    {
        question: 'In which state Group of Monuments at Pattadakal is located?',
        options: {
            a: 'Bihar',
            b: 'Karnataka',
            c: 'Orissa',
            d: 'Goa'
        },
        correctAns: 'b'
    },
    {
        question: 'Full form of UNESCO',
        options: {
            a: 'Union Nations Education, Science and Cultural Organization',
            b: 'United Nations Environmental, Social and Cultural Organization',
            c: 'United Nations Enterprise, Science and Cultural Organization',
            d: 'United Nations Educational, Scientific, and Cultural Organization'
        },
        correctAns: 'd'
    },
    {
        question: 'Which of the following statement is not true about Red Fort of Agra?',
        options: {
            a: 'It is situated on the bank of river Yamuna',
            b: 'This fort was built in 1565',
            c: 'It was constructed by the Mughal emperor Akbar in 1565',
            d: 'It is tagged as world heritage site by UNESCO in 1989'
        },
        correctAns: 'd'
    },
    {
        question: 'Who take cares of Ellora caves?',
        options: {
            a: 'Government of Maharashtra',
            b: 'Archaeological Survey of India',
            c: 'Ministry of Culture',
            d: 'Ministry of Tourism'
        },
        correctAns: 'b'
    }
]

let listOfScorers = [];
let highestScorer = {name:'',score:-1};

function quizPlay(){
    let currScore = 0,ans,Qno = 1;
    
    const name = readLineSync.question(chalk.bgRedBright.whiteBright.bold('What is your name? '));
    console.log(chalk.bgYellow.whiteBright.bold(chalk`Welcome {red ${name}}! Answer all the questions correctly to beat others..`))
    console.log('Answer the questions carefully..\n');

    for(q of questions){
        console.log(chalk.bold`\n${Qno++}.{blue ${q.question}}\n`);
        
        let bgR = chalk.bgRedBright.bold,colYel = chalk.yellowBright;

        console.log(`${bgR('a:')} ${colYel(q.options.a)}\n${bgR('b:')} ${colYel(q.options.b)}\n${bgR('c:')} ${colYel(q.options.c)}\n${bgR('d:')} ${colYel(q.options.d)}`);
        ans = readLineSync.question('Enter your choice: ');
        if(ans.toLowerCase() === q.correctAns){
            console.log(chalk.greenBright('\nCorrect Answer!'));
            currScore+=1;
        }else{
            console.log(chalk.redBright('\nWrong Answer!'));
        }
    }
    listOfScorers.push({name: name , score: currScore});
    console.log(`Your total Score: ${currScore}`);
    //compare currScore with highestScore till now
    if(currScore >highestScorer.score){
        console.log(chalk.bgGreen.redBright.bold.inverse('New high Score!!'));
        highestScorer.name = name;
        highestScorer.score = currScore;
    }
    console.log(chalk.cyanBright('List of participants:'));
    console.table(listOfScorers);
    console.log(chalk.hex('#fd3a69')(`Highest Scorer: ${highestScorer.name} Score: ${highestScorer.score}`))
    
}

for(;;){
    quizPlay();
    let play = readLineSync.question('Continue playing..?(Yes/No)');
    if(play.toLowerCase() === 'no'){
        break;
    }
    while(play.toLowerCase() != 'yes' && play.toLowerCase() != 'no'){
        console.log(chalk.bgRed('Oops!! Wrong input..'));
        play = readLineSync.question('Continue playing..?(Yes/No)');
    }
}
