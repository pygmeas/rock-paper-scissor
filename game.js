let winStreak = 0;
let loseStreak = 0;
let tieStreak = 0;

function playGame(myPick) {
    let randomNumber = Math.random();
    let computerPick = '';

    // Randomly pick computer choice
    if (randomNumber < 1 / 3) {
        computerPick = 'Rock';
    } else if (randomNumber < 2 / 3) {
        computerPick = 'Paper';
    } else {
        computerPick = 'Scissor';
    }

    // Get HTML elements
    const resultDiv = document.getElementById('result');
    const resultImg = document.getElementById('result-img');
    const achievementImg = document.getElementById('achievement-img');
    const achievementText = document.getElementById('achievement-text');

    let result = '';

    // Check who wins
    if (myPick === computerPick) {
        result = 'Tie!';
        resultImg.src = './images/tie.png';
        tieStreak++;
        winStreak = 0;
        loseStreak = 0;
    } else if (
        (myPick === 'Rock' && computerPick === 'Scissor') ||
        (myPick === 'Paper' && computerPick === 'Rock') ||
        (myPick === 'Scissor' && computerPick === 'Paper')
    ) {
        result = 'You Win!';
        resultImg.src = './images/win.png';
        winStreak++;
        loseStreak = 0;
        tieStreak = 0;
    } else {
        result = 'You Lose!';
        resultImg.src = './images/lose.png';
        loseStreak++;
        winStreak = 0;
        tieStreak = 0;
    }

    // Show result
    resultDiv.innerHTML = `
    You chose <strong>${myPick}</strong><br>
    Computer chose <strong>${computerPick}</strong><br>
    <span><strong>${result}</strong></span>
  `;
    resultImg.style.display = 'block';

    // Check achievements (no alerts now)
    if (winStreak === 5) {
        achievementImg.src = './images/achievement_win.png';
        achievementImg.style.display = 'block';
        achievementText.textContent = `You didn’t just win… you bullied the computer!`;
        winStreak = 0;
    } else if (loseStreak === 5) {
        achievementImg.src = './images/achievement_lose.png';
        achievementImg.style.display = 'block';
        achievementText.textContent = `From ashes of defeat rises the Lose King! Long may you reign in failure!`;
        loseStreak = 0;
    } else if (tieStreak === 5) {
        achievementImg.src = './images/achievement_tie.png';
        achievementImg.style.display = 'block';
        achievementText.textContent = 'Neither win nor lose… you’ve achieved ultimate neutrality!';
        tieStreak = 0;
    }
}
