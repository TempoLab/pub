import { useCallback, useState } from "preact/hooks";

// type ToggleExpandedSignature = () => void;

// interface useNavBar {
//   expanded: boolean;
//   toggleExpanded: ToggleExpandedSignature;
// }
//
// type UseNavBarSignature = () => UseNavBar;
const useNavBar = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = useCallback(() => {
    setExpanded((current) => !current);
  }, []);

  return {
    expanded,
    toggleExpanded,
  };
};

export {useNavBar};