import React, { useState } from "react";

function App() {
  const [target, setTarget] = useState(generateRandomNumber());
  const [guess, setGuess] = useState("");
  const [message, setMessage] = useState("Coba tebak angka antara 1-100!");

  function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
  }

  function handleGuess() {
    const guessNumber = parseInt(guess);
    if (isNaN(guessNumber)) {
      setMessage("Masukkan angka yang valid!");
    } else if (guessNumber < target) {
      setMessage("Terlalu rendah! Coba lagi.");
    } else if (guessNumber > target) {
      setMessage("Terlalu tinggi! Coba lagi.");
    } else {
      setMessage("Selamat! Anda menebak dengan benar!");
    }
  }

  function resetGame() {
    setTarget(generateRandomNumber());
    setGuess("");
    setMessage("Coba tebak angka antara 1-100!");
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-4">Tebak Angka</h1>
      <p className="text-lg mb-4">{message}</p>
      <div className="flex items-center space-x-2 mb-4">
        <input
          type="number"
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
          className="px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Masukkan tebakan"
        />
        <button
          onClick={handleGuess}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Tebak
        </button>
      </div>
      <button
        onClick={resetGame}
        className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600"
      >
        Reset Game
      </button>
    </div>
  );
}

export default App;
