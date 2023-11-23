import React from "react";

export default function MyHelloBtn(){
  const handleClick = async () => {
    try{
      const response = await fetch('/api/hello');
      const data = await response.json();
      alert(JSON.stringify(data));
    } catch (error) {
      alert('エラーが発生しました: ' + error.message);
    }
  }

  return (
    <button onClick={handleClick}>Hello world!</button>
  )
}
