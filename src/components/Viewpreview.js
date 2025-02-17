import React from 'react';
import { LiveProvider, LivePreview, LiveError } from 'react-live';
import Preview from './Preview';  // Import your component

const componentCode = `
  <Preview/>
`;

function Viewpreview() {
  return (
    <LiveProvider code={componentCode} scope={{ Preview, React }}>
      <LivePreview />
      <LiveError />
    </LiveProvider>
  );
}

export default Viewpreview;
