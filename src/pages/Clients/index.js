import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

import Input from 'components/common/Input';
import ListRow from 'components/common/ListRow';
import useTranslation from 'hooks/useTranslation';
import useClients from 'hooks/useClients';

import './styles.css';

const Clients = () => {
  const { filters, changeFilter, clientsList } = useClients();
  const { name } = filters;

  const t = useTranslation();
  const filterByName = t('clients.filterByName');

  return (
    <div className="clients-container">
      <div className="clients-filters-container">
        <span className="clients-filter-label">{filterByName}</span>
        <Input value={name} handleOnChange={newValue => changeFilter('name', newValue)} />
      </div>
      <div className="clients-list-container">
        {clientsList?.map(({ address, description, name, photo, id }, index) => (
          <ListRow
            key={`${name}-${index}`}
            name={name}
            photo={photo}
            icon={<KeyboardArrowRightIcon />}
            expandedHeight="50px"
            showIcon
          >
            <h2>{address}</h2>
            <h2>{description}</h2>
          </ListRow>
        ))}
      </div>
    </div>
  );
};

export default Clients;
