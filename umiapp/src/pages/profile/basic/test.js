// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useState, useEffect } from 'react';

const useTest = (props) => {
  const { isShow } = props;
  const [visibile, setVisible] = useState(false);

  useEffect(() => {
    if (isShow) {
      setVisible(isShow);
    }
  }, []);

  return [visibile, setVisible];
};
export default useTest;
