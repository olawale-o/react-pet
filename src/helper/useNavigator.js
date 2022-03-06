import { useNavigate } from 'react-router-dom';

const useNavigator = (replace = false) => {
  const navigate = useNavigate();
  const pushAndReplace = (route) => navigate(route, { replace });
  return { pushAndReplace };
};

export default useNavigator;
