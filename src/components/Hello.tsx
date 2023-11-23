import React from "react";

export default function MyHelloBtn(){
  const handleClick = async () => {
    try{
      const response = await fetch('/api/hello');
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
    <button onClick={handleClick}>Hello world!</button>
  )
}
