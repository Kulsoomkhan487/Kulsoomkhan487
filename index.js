import inquirer from "inquirer";
let condition = true;
while (condition) {
    let array = ["apple", "mango", "orange"];
    let ans = await inquirer.prompt({
        name: "Select",
        type: "list",
        message: "Select an Operation:",
        choices: ["add", "update", "view", "delete"],
    });
    if (ans.Select === "add") {
        let addTodo = await inquirer.prompt({
            name: "todo",
            type: "input",
            message: "Add item"
        });
        array.push(addTodo.todo);
        console.log(array);
    }
    else if (ans.Select === "update") {
        let updateTodo = await inquirer.prompt({
            name: "updateTodo",
            type: "list",
            message: "Select item for update",
            choices: array
        });
        let addTodo = await inquirer.prompt({
            name: "todo",
            type: "input",
            message: "Add item"
        });
        let newTodo = array.filter(val => val !== updateTodo.updateTodo);
        array = [...newTodo, addTodo.todo];
        console.log(array);
    }
    else if (ans.Select === "view") {
        console.log(array);
    }
    else if (ans.Select === "delete") {
        let deleteTodo = await inquirer.prompt({
            name: "deleteTodo",
            type: "list",
            message: "Select item for update",
            choices: array
        });
        let newTodo = array.filter(val => val !== deleteTodo.deleteTodo);
        array = [...newTodo];
        console.log(array);
    }
    let repeatanswer = await inquirer.prompt({
        name: "restart",
        type: "list",
        message: "Do you want to continue?",
        choices: ["Yes", "No"]
    });
    if (repeatanswer.restart === "No") {
        condition = false;
    }
}
