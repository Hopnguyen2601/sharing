import React, { memo } from 'react';

Content.propTypes = {};

function Content({ count }) {
  console.log('Hello FE28');
  return <div> Count: {count}</div>;
}

export default memo(Content);
