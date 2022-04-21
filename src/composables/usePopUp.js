import React from 'react';
import PropType from 'prop-types';

const usePopUp = (el, initial) => {
  const [isVisible, setIsVisible] = React.useState(initial);

  React.useEffect(() => {
    const checkIfClickedOutside = (e) => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if (isVisible && el.current && !el.current.contains(e.target)) {
        setIsVisible(!isVisible);
      }
    };
    document.addEventListener('click', checkIfClickedOutside);
    // Cleanup the event listener
    return () => document.removeEventListener('click', checkIfClickedOutside);
  }, [isVisible]);

  return { isVisible, setIsVisible };
};

export default usePopUp;

usePopUp.propTypes = {
  initial: PropType.oneOfType([PropType.bool, PropType.number]),
  el: PropType.shape({ current: PropType.instanceOf(Element) }).isRequired,
};
