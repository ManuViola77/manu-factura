import { useCallback, useEffect, useState } from 'react';

import useErrorHandling from 'components/common/ManuFacturaErrorBoundary/useErrorHandling';
import { getClients } from 'firebase/clients';

const useClients = () => {
  const [filters, setFilters] = useState({ name: '' });
  const [clientsList, setClientsList] = useState();

  const { name } = filters;
  const { triggerError } = useErrorHandling();

  const getClientsList = useCallback(async () => {
    const { clients } = await getClients({ name, triggerError });
    setClientsList(clients);
  }, [triggerError, name]);

  const changeFilter = async (key, value) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      [key]: value,
    }));
    getClientsList();
  };

  useEffect(() => {
    getClientsList();
  }, [getClientsList]);

  return {
    filters,
    changeFilter,
    clientsList,
  };
};

export default useClients;
