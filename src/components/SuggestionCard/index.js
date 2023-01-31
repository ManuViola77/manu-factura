import { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import ModeCommentIcon from '@mui/icons-material/ModeComment';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import IconButton from '@mui/material/IconButton';

import Comments from 'components/Comments';
import DeleteDialog from 'components/common/DeleteDialog';
import { NOT_VOTED_COLOR, VOTED_COLOR, TEXT_COLOR } from 'constants/constants';
import useTranslation from 'hooks/useTranslation';

import './styles.css';

const SuggestionCard = ({
  suggestion,
  suggestion: {
    comments,
    description,
    id,
    isMySuggestion,
    negativeVotesCount,
    positiveVotesCount,
    status,
    statusColor,
    suggestedBy: { name, photo },
    title,
    votedNegative,
    votedPositive,
  },
  deleteSuggestion,
  voteSuggestion,
  openEditModal,
  addComment,
  selectedComment,
  changeSelectedComment,
  updateComment,
  deleteComment,
}) => {
  const t = useTranslation();
  const isPending = status === 'Pending';

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const handleOpenDialog = () => setIsDialogOpen(true);
  const handleCloseDialog = () => setIsDialogOpen(false);
  const toggleShowComments = () => setShowComments(prevValue => !prevValue);
  const handleDeleteSuggestion = () => {
    const isOk = deleteSuggestion(id);
    isOk && handleCloseDialog();
  };

  const voteDisabled = isMySuggestion || !isPending;

  return (
    <>
      <div className="suggestion-card-container">
        <div className="left-container">
          <span className="suggestion-title">{title}</span>
          {isMySuggestion && isPending && (
            <>
              <IconButton onClick={openEditModal}>
                <EditIcon htmlColor={VOTED_COLOR} fontSize="small" />
              </IconButton>
              <IconButton onClick={handleOpenDialog}>
                <DeleteIcon htmlColor={VOTED_COLOR} fontSize="small" />
              </IconButton>
            </>
          )}
          <p>{description}</p>
          <div className="suggested-by-container">
            <span className="suggested-by-name">
              {t('suggestions.suggestedBy')} {name}
            </span>
            <img src={photo} className="suggested-by-photo" alt={`suggested-by-${name}`} />
            <IconButton onClick={toggleShowComments}>
              <ModeCommentIcon htmlColor={TEXT_COLOR} />
            </IconButton>
            <span className="comments-count">{comments.length}</span>
          </div>
        </div>
        <div className="right-container">
          <span className="status" style={{ backgroundColor: statusColor }}>
            {status}
          </span>
          <div className="votes-container">
            <div className="votes-item-container">
              <IconButton disabled={voteDisabled} onClick={() => voteSuggestion(suggestion, true)}>
                <ThumbUpAltIcon htmlColor={votedPositive ? VOTED_COLOR : NOT_VOTED_COLOR} />
              </IconButton>
              <span className="vote-count">{positiveVotesCount}</span>
            </div>
            <div className="votes-item-container">
              <IconButton disabled={voteDisabled} onClick={() => voteSuggestion(suggestion, false)}>
                <ThumbDownAltIcon htmlColor={votedNegative ? VOTED_COLOR : NOT_VOTED_COLOR} />
              </IconButton>
              <span className="vote-count">{negativeVotesCount}</span>
            </div>
          </div>
        </div>
      </div>
      <DeleteDialog
        isDialogOpen={isDialogOpen}
        handleCloseDialog={handleCloseDialog}
        handleConfirmDialog={handleDeleteSuggestion}
        title={t('suggestions.confirmTitle')}
        description={t('suggestions.confirmDescription', { title })}
      />
      {showComments && (
        <Comments
          suggestion={suggestion}
          comments={comments}
          addComment={addComment}
          selectedComment={selectedComment}
          changeSelectedComment={changeSelectedComment}
          updateComment={updateComment}
          deleteComment={deleteComment}
        />
      )}
    </>
  );
};

export default SuggestionCard;
