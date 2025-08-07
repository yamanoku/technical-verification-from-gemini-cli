import React, { useState, useEffect } from 'react';

const NoCleanup = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    // 1秒ごとに時間を更新するタイマーをセット
    const timerId = setInterval(() => {
      setTime(new Date());
      console.log('Timer tick');
    }, 1000);

    // クリーンアップ関数が返されていない
    // return () => {
    //   clearInterval(timerId);
    // };
  }, []);

  return (
    <div>
      <h2>2. クリーンアップの欠如</h2>
      <p>Current time: {time.toLocaleTimeString()}</p>
      <p>
        このコンポーネントは、マウント時にタイマーをセットしますが、アンマウント時にタイマーをクリアするクリーンアップ関数を返していません。これにより、コンポーネントがアンマウントされた後もタイマーが動き続け、メモリリークの原因となります。
      </p>
    </div>
  );
};

export default NoCleanup;