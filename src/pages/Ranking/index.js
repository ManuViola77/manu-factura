import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import cn from 'classnames';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import ListRow from 'components/common/ListRow';
import Loading from 'components/common/Loading';
import Select from 'components/common/Select';
import { GAME_STATUS, RANKING_VALUES } from 'constants/types';
import useRankingData from 'hooks/useRankingData';

import './styles.css';

const WORD_HEIGHT = 40;

const Ranking = () => {
  const {
    currentUser,
    currentUserPlayed,
    rankingData,
    dailyResults,
    expandedUser,
    setExpandedUser,
    loading,
    selectedRanking,
    onChangeSelectedRanking,
    goToUsersStatistics,
  } = useRankingData();

  return (
    <div className="ranking">
      <h1 className="section-title">Ranking</h1>
      {loading ? (
        <Loading />
      ) : (
        <Tabs className="Tabs">
          <TabList>
            <Tab>{`Today (${dailyResults.length})`}</Tab>
            <Tab>{`All Time (${rankingData.length})`}</Tab>
          </TabList>
          <TabPanel>
            {dailyResults.map(
              ({ attemptedWords, attempts, position, status, user: { email, name, photo } }) => {
                const isCurrentUser = email === currentUser;
                const lost = status === GAME_STATUS.lost;
                const isExpanded = email === expandedUser;
                const isDisabled = !currentUserPlayed;

                return (
                  <ListRow
                    key={email}
                    classProps={{ isCurrentUser, lost, isDisabled }}
                    onClick={() => setExpandedUser(isExpanded ? '' : email)}
                    disabled={!currentUserPlayed}
                    name={name}
                    photo={photo}
                    leftText={position}
                    rightText={lost ? 'X' : attempts}
                    icon={isExpanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                    showIcon={currentUserPlayed}
                  >
                    {currentUserPlayed && (
                      <div
                        className={cn('daily-data-words', { isExpanded })}
                        style={{
                          height: isExpanded ? attemptedWords.length * WORD_HEIGHT : 0,
                        }}
                      >
                        {isExpanded && (
                          <>
                            {attemptedWords.map(({ word = '', results }) => (
                              <div key={word} className="daily-data-word-container">
                                {word.split('').map((letter, index) => (
                                  <span
                                    key={`${word}-${index}`}
                                    className="daily-data-word"
                                    style={{ backgroundColor: results[index] }}
                                  >
                                    {letter}
                                  </span>
                                ))}
                              </div>
                            ))}
                          </>
                        )}
                      </div>
                    )}
                  </ListRow>
                );
              }
            )}
          </TabPanel>
          <TabPanel>
            <>
              <Select
                options={RANKING_VALUES}
                onChange={onChangeSelectedRanking}
                value={selectedRanking}
              />
              {rankingData.map(
                ({
                  displayValue,
                  lastDatePlayed,
                  position,
                  user: { email, name, photo },
                  user,
                }) => {
                  const isCurrentUser = email === currentUser;

                  return (
                    <ListRow
                      key={email}
                      classProps={{ isCurrentUser }}
                      name={name}
                      photo={photo}
                      leftText={position}
                      rightText={`${displayValue} 🔥`}
                      suffix={`(${lastDatePlayed})`}
                      showIcon={false}
                      onClick={() => goToUsersStatistics(user)}
                    />
                  );
                }
              )}
            </>
          </TabPanel>
        </Tabs>
      )}
    </div>
  );
};

export default Ranking;
