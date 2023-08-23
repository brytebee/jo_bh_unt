import { useRouter } from 'next/router';

const useNavigation = () => {
  const router = useRouter();
  const navigate = (path) => {
    router.push(path);
  };

  return { navigate, router };
};

export default useNavigation;
