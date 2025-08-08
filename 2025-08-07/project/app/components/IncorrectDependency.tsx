import React, { useState, useEffect, useMemo } from 'react';

const IncorrectDependency = () => {
  const [text, setText] = useState('');

  const options = {
    // このオブジェクトは毎回のレンダリングで再生成される
    data: 'some data',
  };

  useEffect(() => {
    // optionsオブジェクトは毎回のレンダリングで新しいインスタンスになるため、
    // このuseEffectは意図せず毎回のレンダリングで実行されてしまう
    console.log('useEffect with object dependency runs');
  }, [options]);

  const memoizedOptions = useMemo(() => ({
    data: 'some data',
  }), []);

  useEffect(() => {
    console.log('useEffect with memoized object dependency runs');
  }, [memoizedOptions]);


  return (
    <div>
      <h2>3. オブジェクトや関数を直接依存配列に指定</h2>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something"
      />
      <p>
        このコンポーネントでは、`useEffect`の依存配列にオブジェクトを直接指定しています。JavaScriptの仕様上、オブジェクトは毎回再生成されるため、`useEffect`が意図せず毎回のレンダリングで実行されてしまいます。これを避けるためには、`useMemo`や`useCallback`を使って依存関係をメモ化するか、依存配列にオブジェクトのプリミティブなプロパティを指定する必要があります。
      </p>
    </div>
  );
};

export default IncorrectDependency;