palyer1_dice_number = Math.floor(Math.random() * 6) + 1;
palyer2_dice_number = Math.floor(Math.random() * 6) + 1;

// alert(palyer1_dice_number);
// alert(palyer2_dice_number);

player1_image = "./images/dice" + palyer1_dice_number + ".png";
player2_image = "./images/dice" + palyer2_dice_number + ".png";

// alert(player1_image);
// alert(player2_image);

document.querySelector(".img1").setAttribute("src", player1_image);
document.querySelector(".img2").setAttribute("src", player2_image);
