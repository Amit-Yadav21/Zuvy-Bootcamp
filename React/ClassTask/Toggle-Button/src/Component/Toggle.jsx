import React, { useState } from 'react';

function ToggleButton() {
  const [isToggled, setIsToggled] = useState(false);

  const toggleButton = () => {
    setIsToggled(!isToggled);
  };

  return (
    <div>
      <p>Toggle: {isToggled ? 'Yes' : 'No'}</p>
      <button onClick={toggleButton}>{isToggled ? 'Turn Off' : 'Turn On'}</button>
    </div>
  );
}

export default ToggleButton;