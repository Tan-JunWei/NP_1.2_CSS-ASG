/* TypingAnimation done by: Ryan Tan Jia Jun */

import { TypeAnimation } from "react-type-animation";

const TypingAnimation = () => {
    return (
      <TypeAnimation
        sequence={[
          'Savour every bite', 
          3000,
          'Savour every moment', 
          3000, 
          'Savour every memory', 
          3000,
        ]}
        wrapper="span"
        cursor={true}
        repeat={Infinity}
      />
    );
  };

export default TypingAnimation;