import inquirer from "inquirer";
import { image } from "qr-image";
import fs from "node:fs";

// get user input
let input_url = await inquirer.prompt({
  name: "url",
  message: "Enter the URL you want to convert to QR code:",
});

// create QR code image
const qr_svg = image(input_url.url, { type: "png" });
const qr_file = fs.createWriteStream("qr_code.png");
qr_svg.pipe(qr_file);

// create txt file to save user input
fs.writeFileSync("user_input.txt", input_url.url);

console.log("QR code generated and saved as qr_code.png");
console.log("User input saved in user_input.txt");
