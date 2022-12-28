import cn from 'classnames';

import './styles.css';

const ListRow = ({
  classProps,
  onClick,
  disabled,
  leftText,
  name,
  photo,
  rightText,
  icon,
  showIcon,
  suffix,
  children,
}) => (
  <>
    <button
      className={cn('list-row-container', { ...classProps, isEnabled: !classProps?.isDisabled })}
      onClick={onClick}
      disabled={disabled}
    >
      <span className="list-row-left-text">{leftText}</span>
      <div className="list-row-user">
        <img src={photo} className="list-row-photo" alt={`user-${name}`} />
        <span className="list-row-name">{name}</span>
      </div>
      <span className="list-row-right-text">{rightText}</span>
      {suffix && <span>{suffix}</span>}
      {showIcon && <div className="list-row-icon">{icon}</div>}
    </button>
    {children}
  </>
);

export default ListRow;
