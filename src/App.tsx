import React from 'react';
import Greeting from './components/Greeting';
import Counter from './components/Counter';

const App: React.FC = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>My React TypeScript App</h1>
      
      {/* Using the Greeting component */}
      <Greeting name="TypeScript Developer" />
      
      {/* Using the Counter component */}
      <div style={{ marginTop: '20px' }}>
        <Counter />
      </div>
    </div>
  );
};

export default App;