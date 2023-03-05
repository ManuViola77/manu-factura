import { useState } from 'react';
import { useDispatch } from 'react-redux';

import useErrorHandling from 'components/common/RSWordleErrorBoundary/useErrorHandling';
import { getAllTimeRankingData, getTodaysResults } from 'firebase/ranking';
import useConstructor from 'hooks/useConstructor';
import { setAllTimeRanking, setTodaysResults } from 'state/actions/rankingActions';
import { getTodaysDate } from 'utils/helpers';

const useRankingEndpoints = () => {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);
  const { triggerError } = useErrorHandling();

  const today = getTodaysDate();

  const fetchTodaysResults = async () => {
    setLoading(true);
    const { todaysResults } = await getTodaysResults(today, triggerError);
    await dispatch(setTodaysResults({ todaysResults }));
    setLoading(false);
  };

  const fetchAllTimeRanking = async () => {
    const { allTimeRankingData } = await getAllTimeRankingData([], triggerError);
    await dispatch(setAllTimeRanking({ allTimeRankingData }));
  };

  useConstructor(fetchTodaysResults);
  useConstructor(fetchAllTimeRanking);

  return { loading };
};

export default useRankingEndpoints;
