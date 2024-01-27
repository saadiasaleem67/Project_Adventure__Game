import chalk from "chalk";
import inquirer from "inquirer";
console.log(chalk.yellow.italic("Welcome to Oogy and the Chocroches"));
class Oogy {
    constructor(name) {
        this.energy = 100;
        this.name = name;
    }
    energyDecrese() {
        this.energy = this.energy - 25;
        this.energy = this.energy;
    }
    energyIncrease() {
        this.energy = 100;
    }
}
class Cockroches {
    constructor(name) {
        this.energy = 100;
        this.name = name;
    }
    energyDecrese() {
        this.energy = this.energy - 25;
        this.energy = this.energy;
    }
    energyIncrease() {
        this.energy = 100;
    }
}
let o1 = new Oogy(Oogy.name);
let c1 = new Cockroches(Cockroches.name);
do {
    let answer = await inquirer.prompt({
        type: "list",
        choices: ["Oogy", "Cockroches"],
        name: "play",
        message: "Select any one chararacter"
    });
    if (answer.play == "Oogy") {
        let oogy = await inquirer.prompt({
            type: "list",
            name: "select",
            message: "Select any one:",
            choices: ["Drink milk", "talking with Olivia", "fight aganist with Cockroches"]
        });
        if (oogy.select == "Drink milk") {
            o1.energyIncrease();
            console.log(`${chalk.green.bold.italic(o1.name)} energy is ${chalk.green.bold.italic(o1.energy)}`);
        }
        if (oogy.select == "talking with Olivia") {
            console.log(chalk.green.italic("Oogy is very happy"));
        }
        if (oogy.select == "fight aganist with Cockroches") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                o1.energyDecrese();
                console.log(`${chalk.gray.bold.italic(o1.name)} energy =  ${chalk.gray.bold.italic(o1.energy)}`);
                console.log(`${chalk.gray.bold.italic(c1.name)} energy =  ${chalk.gray.bold.italic(c1.energy)}`);
                process.exit();
            }
            if (num <= 0) {
                c1.energyDecrese();
                console.log(`${chalk.green.bold.italic(c1.name)} energy = ${chalk.green.bold.italic(c1.energy)}`);
                console.log(`${chalk.green.bold.italic(o1.name)} energy = ${chalk.green.bold.italic(o1.energy)}`);
                process.exit();
            }
        }
    }
    if (answer.play == "Cockroches") {
        let ans1 = await inquirer.prompt({
            type: "list",
            name: "select",
            message: "Select any one",
            choices: ["Nap", "irritating the Oogy", "Eat meal"]
        });
        if (ans1.select == "Nap") {
            console.log(chalk.blue.bold("Don't distrub!"));
        }
        if (ans1.select == "irritating the Oogy") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                o1.energyDecrese();
                console.log(`${chalk.gray.bold.italic(o1.name)} energy =  ${chalk.gray.bold.italic(o1.energy)}`);
                console.log(`${chalk.gray.bold.italic(c1.name)} energy =  ${chalk.gray.bold.italic(c1.energy)}`);
                process.exit();
            }
            if (num <= 0) {
                c1.energyDecrese();
                console.log(`${chalk.green.bold.italic(c1.name)} energy = ${chalk.green.bold.italic(c1.energy)}`);
                console.log(`${chalk.green.bold.italic(o1.name)} energy = ${chalk.green.bold.italic(o1.energy)}`);
                process.exit();
            }
        }
        if (ans1.select == "Eat meal") {
            c1.energyIncrease();
            console.log(`${chalk.green.bold.italic(c1.name)} energy is ${chalk.green.bold.italic(c1.energy)}`);
        }
    }
} while (true);
