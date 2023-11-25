import React from "react";

export default function HelloFromOtherWorker(){
  const handleClick = async () => {
    try{
      const apiUrl = process.env.REACT_APP_CF_HELLO_WORLD_API_URL;
      const url = `${apiUrl}/index.json`;
      const response = await fetch(url);
      const data = await response.json();
      alert(JSON.stringify(data));
    } catch (error) {
      if (error instanceof Error) {
        alert('エラーが発生しました: ' + error.message);
      } else {
        // errorがErrorインスタンスではない場合の処理
        alert('予期せぬエラーが発生しました');
      }
    }
  }

  return (
    <button onClick={handleClick}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      Hello world from Other Worker
    </button>
  )
}
