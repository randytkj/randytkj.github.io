let number1, number2;

function generateQuestion() {
  // Angka acak antara 1 hingga 10
  number1 = Math.floor(Math.random() * 10) + 1;
  number2 = Math.floor(Math.random() * 10) + 1;

  // Tampilkan pertanyaan di layar
  document.getElementById('number1').textContent = number1;
  document.getElementById('number2').textContent = number2;
  document.getElementById('result').textContent = '';
  document.getElementById('answer').value = '';
}

function checkAnswer() {
  const userAnswer = parseInt(document.getElementById('answer').value);
  const correctAnswer = number1 * number2;

  if (userAnswer === correctAnswer) {
    document.getElementById('result').textContent = 'Jawaban Anda benar!';
    document.getElementById('result').style.color = 'green';
  } else {
    document.getElementById('result').textContent = 'Jawaban Anda salah, coba lagi!';
    document.getElementById('result').style.color = 'red';
  }
}

function nextQuestion() {
  generateQuestion();
}

// Saat halaman dimuat, buat soal pertama
window.onload = generateQuestion;
