import { useCallback, useEffect, useState } from "react";
import { RepositoryFactory } from "../shared/repositories/repository-factory";
import { routes } from "../shared/router/routes";
import { useNavigate } from "react-router-dom";

export const useHttp = (config: any, applyData: (data: any) => void) => {
  const RepositoryBase = RepositoryFactory.get(config.repositoryName);

  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const navigate = useNavigate();

  const navigateHome = useCallback((): void => {
    navigate(routes.home, { replace: true });
  }, [navigate]);

  const getData = useCallback(async () => {
    setLoading(true);

    let responseData;

    try {
      if (config.productParam) {
        const { data } = await RepositoryBase.getProduct(config.productParam);
        responseData = data;
      } else {
        const { data } = await RepositoryBase.get();
        responseData = data;
      }
      applyData(responseData);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(true);
      navigateHome();
      return;
    }
  }, [RepositoryBase, applyData, config.productParam, navigateHome]);

  useEffect(() => {
    clearError();
  }, []);

  const clearError = (): void => {
    setError(false);
  };

  return {
    loading,
    error,
    getData,
  };
};

