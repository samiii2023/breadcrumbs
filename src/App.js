import React from 'react';

function MyComponent() {
  const paths = [
    { name: 'Home', path: '/' },
    { name: 'List', path: '/list' },
    { name: 'App', path: '/app' },
  ];

  return (
    <div>
      {paths.map((item, index) => (
        <span key={index}>
          <a href={item.path}>{item.name}</a>
          {index !== paths.length - 1 && " / "}
        </span>
      ))}
    </div>
  );
}

export default MyComponent;
