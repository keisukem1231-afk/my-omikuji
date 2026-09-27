import { useState } from "react";

const results = [
  { label: "大吉", color: "text-red-500" },
  { label: "中吉", color: "text-orange-500" },
  { label: "吉", color: "text-yellow-600" },
  { label: "小吉", color: "text-green-600" },
  { label: "末吉", color: "text-blue-500" },
  { label: "凶", color: "text-gray-500" },
];

function App() {
  const [result, setResult] = useState(null);

  const draw = () => {
    const picked = results[Math.floor(Math.random() * results.length)];
    setResult(picked);
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-6 bg-gray-50">
      <h1 className="text-2xl font-bold">今日のおみくじ</h1>

      <div className="h-20 flex items-center">
        {result ? (
          <p className={`text-5xl font-bold ${result.color}`}>{result.label}</p>
        ) : (
          <p className="text-gray-400">ボタンを押してね</p>
        )}
      </div>

      <button
        onClick={draw}
        className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600"
      >
        おみくじを引く
      </button>
    </main>
  );
}

export default App;