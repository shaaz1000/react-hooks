import React from 'react';
import useFetch from './hooks/CustomHooks';
import UseCallBackHooks from './hooks/UseCallBackHooks';
import UseContextHooks from './hooks/UseContextHooks';
import UseEffectHooks from './hooks/UseEffectHooks';
import UseMemoHooks from './hooks/UseMemoHooks';
import UseReducerHooks from './hooks/UseReducerHooks';
import UseRefHooks from './hooks/UseRefHooks';
import UseStateHooks from './hooks/UseStateHooks';

function App() {
  const data = useFetch("https://jsonplaceholder.typicode.com/todos")

  return (
    <>
      {/* <UseStateHooks /> */}
      {/* <UseEffectHooks /> */}
      {/* <UseRefHooks /> */}
      {/* <UseCallBackHooks /> */}
      {/* <UseMemoHooks /> */}
      {/* <UseReducerHooks /> */}
      {/* <UseContextHooks /> */}
      {data &&
        data.map((item) => {
          return <p key={item.id}>{item.title}</p>;
        })}
    </>
  );
}

export default App;
