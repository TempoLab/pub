import { useCallback, useState } from "preact/hooks";

type ToggleExpandedSignature = () => void;

interface useNavBar {
  expanded: boolean;
  toggleExpanded: ToggleExpandedSignature;
}

type UseNavBarSignature = () => UseNavBar;
const useNavBar: UseNavBarSignature = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = useCallback<ToggleExpandedSignature>(() => {
    setExpanded((current) => !current);
  }, []);

  return {
    expanded,
    toggleExpanded,
  };
};

export {useNavBar};