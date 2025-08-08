import React, { useState, useEffect } from 'react';

const MissingDependency = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // このuseEffectはcountに依存しているが、依存配列に含まれていない
    document.title = `You clicked ${count} times`;
    console.log('useEffect runs');
  }, []); // 依存配列から count が抜けている

  return (
    <div>
      <h2>1. 依存配列の漏れ</h2>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <p>
        このコンポーネントは、ボタンがクリックされるたびに`count`が更新されますが、`useEffect`の依存配列が空のため、`document.title`は最初のレンダリング時にしか更新されません。
      </p>
    </div>
  );
};

export default MissingDependency;