#!/usr/bin/env node
const fs = require("fs");
const program = require("commander"); //生成命令和帮助的库
const download = require("download-git-repo"); //下载版本库
const handlebars = require("handlebars");
const inquirer = require("inquirer"); //命令行问答输入
const ora = require("ora"); //执行最终状态输出
const chalk = require("chalk"); //生成个性格式输出
const symbols = require("log-symbols");
//生成一个进度状态
// const spinner = ora("Downloading template...");
// spinner.start();
// spinner.stop();

download("xishanwawa/webpack4-antd", "test/tmp", function(err) {
  console.log(err ? "Error" : "Success");
});

// const question = [
//   {
//     type: "input",
//     name: "name",
//     message: "你的名字",
//     validate(val) {
//       if (val === "") {
//         return "不能为空!";
//       } else {
//         console.log("好名字");
//         return true;
//       }
//     }
//   },
//   {
//     type: "input",
//     name: "age",
//     message: "你的年龄",
//     validate(val) {
//       if (val === "") {
//         return "不能为空!";
//       } else {
//         return true;
//       }
//     }
//   },
//   {
//     type: "rawlist",
//     name: "title",
//     message: "选择表情",
//     choices: ["👻", "🤓", "👩🏻‍💻", "👨🏻‍💻", "🦄", "💻", "👾", "👽"],
//     paginated: true
//   }
// ];

// inquirer.prompt(question).then(({ name, age }) => {
//   console.log(`${name}, ${age}`);
// });
