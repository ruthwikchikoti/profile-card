const finalScoreDisplay = document.getElementById('finalScore');
const recentScore = localStorage.getItem('recentScore');
finalScoreDisplay.innerText = recentScore;
