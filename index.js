import chalk from "chalk"
import inquirer from "inquirer"
import gradient from "gradient-string"
import chalkAnimation from "chalk-animation"
import figlet from "figlet"
import { createSpinner } from "nanospinner"

let playername;

const sleep = (ms = 5000) => new Promise((r) => setTimeout(r, ms));

async function welcome() {
    const rainbowtitle = chalkAnimation.rainbow("who wants to be javascript millionaire \n");
    await sleep();
    rainbowtitle.stop()
    console.log(`
    ${chalk.yellowBright('  HOW TO PLAY GAME  ')}
        ${chalk.rgb(66, 245, 215)("You will be given set of questions")}
        ${chalk.rgb(66, 245, 215)("If you get any questions wrong i will be")} ${chalk.red(" killed instantly ")}
        ${chalk.rgb(66, 245, 215)("So get all the questions")} ${chalk.rgb(144, 59, 196)("Correctly")} `)
}


async function askname() {
    const answers = await inquirer.prompt(
        {
            name: "player_name",
            type: "input",
            message: "What is your name ? ",
            default() {
                return 'Player';
            },
        })
        playername=answers.player_name
}



async function question1() {
    const answers = await inquirer.prompt(
        {
            name: "qsn_1",
            type: "list",
            message: "Python supports the creation of anonymous functions at runtime, using a construct called",
            choices: [
                'pi',
                'lambda',
                'anonymous',
                'none of the above'
            ]
        })
        return handleAnswer1(answers.qsn_1=='lambda');
}
async function handleAnswer1(isCorrect)
{
    const spinner=createSpinner("checking answer...").start();
    await sleep();
    if(isCorrect)
    {
        spinner.success({text:`Nice Work ${playername} 🤑 still 7 more to go...`});
    }
    else
    {
        spinner.error({text:`Game Over, you loose ${playername}!`});
        process.exit(1);
    }

}

async function qns2()
{
    const answers=await inquirer.prompt({
        name:"qns_2",
        type:"list",
        message:"Which of the following functions can help us to find the version of python that we are currently working on?",
        choices:[
            'sys.version(1)',
            'sys.version(0)',
            'sys.ver()',
            'sys.version()'
        ]
    })
    return handleAnswer2(answers.qns_2=="sys.version()")
}
async function handleAnswer2(isCorrect)
{
    const spinner=createSpinner("checking answer...").start();
    await sleep();
    if(isCorrect)
    {
        spinner.success({text:`Nice Work ${playername} 🤑 still 6 more to go...`});
    }
    else
    {
        spinner.error({text:`Game Over, you loose ${playername}!`});
        process.exit(1);
    }
}

async function qns3()
{
    const answers=await inquirer.prompt({
        name: 'qns_3',
        type:'list',
        message:'What does pip stand for python?',
        choices:[
            'pip installs python',
            'pip installs packages',
            'Preferred Installer Program',
            'all of the above'
        ]
    })
    return  handleAnswer3(answers.qns_3=="Preferred Installer Program")
}
async function handleAnswer3(isCorrect)
{
    const spinner=createSpinner("checking answer...").start();
    await sleep();
    if(isCorrect)
    {
        spinner.success({text:`Nice Work ${playername} 🤑 still 5 more to go...`});
    }
    else
    {
        spinner.error({text:`Game Over, you loose ${playername}!`});
        process.exit(1);
    }
}
async function qns4()
{
    const answers=await inquirer.prompt({
        name:'qns_4',
        type:'list',
        message:'Which of the following is the truncation division operator in Python',
        choices:[
            '|',
            '//',
            '/',
            '%'
        ]
    })
    return handleAnswer4(answers.qns_4=="//")
}
async function handleAnswer4(isCorrect)
{
    const spinner=createSpinner("checking answer...").start();
    await sleep();
    if(isCorrect)
    {
        spinner.success({text:`Nice Work ${playername} 🤑 still 4 more to go...`});
    }
    else
    {
        spinner.error({text:`Game Over, you loose ${playername}!`});
        process.exit(1);
    }
}
async function qns5()
{
    const answers=await inquirer.prompt({
        name:'qns_5',
        type:'list',
        message:'What will be the output of the following Python function min(max(False,-3,-4), 2,7) ?',
        choices:[
            '-4',
            '-3',
            '2',
            'False'
        ]
    })
    return handleAnswer5(answers.qns_5=="False")
}
async function handleAnswer5(isCorrect)
{
    const spinner=createSpinner("checking answer...").start();
    await sleep();
    if(isCorrect)
    {
        spinner.success({text:`Nice Work ${playername} 🤑 still 3 more to go...`});
    }
    else
    {
        spinner.error({text:`Game Over, you loose ${playername}!`});
        process.exit(1)
    }
}
async function qns6()
{
    const answers=await inquirer.prompt({
        name:'qns_6',
        type:'list',
        message:' output of for i in [1, 2, 3, 4][::-1]: print (i)',
        choices:[
            '4 3 2 1',
            'error',
            '1 2 3 4',
            'None of the above'
        ]
    })
    return handleAnswer6(answers.qns_6=="4 3 2 1")
}
async function handleAnswer6(isCorrect)
{
    const spinner=createSpinner("checking answer...").start();
    await sleep();
    if(isCorrect)
    {
        spinner.success({text:`Nice Work ${playername} 🤑 still 1 more to go...`});
    }
    else
    {
        spinner.error({text:`Game Over, you loose ${playername}!`});
        process.exit(1);
    }
}
async function qns7()
{
    const answers=await inquirer.prompt({
        name:'qns_7',
        type:'list',
        message:'What is the maximum possible length of an identifier in Python ?',
        choices:[
            '79 Characters',
            '31 Characters',
            '63 Characters',
            'None of the above'
        ]
    })
    return handleAnswer7(answers.qns_7=="None of the above")
}
async function handleAnswer7(isCorrect)
{
    const spinner=createSpinner("checking answer...").start();
    await sleep();
    if(isCorrect)
    {
        console.clear();
        success()
    }
    else
    {
        spinner.error({text:`Game Over, you loose ${playername}!`});
        process.exit(1);
    }
}
function success()
{
     console.clear();
     const winner="Congratulations"+"  " + playername+"\n $ 100,000";
     figlet(winner,(err,data)=>
     {
         console.log(gradient.pastel.multiline(data))
         process.exit(1);
     });
}
await welcome()
await askname()
await question1()
await qns2()
await qns3()
await qns4()
await qns5()
await qns6()
await qns7()

