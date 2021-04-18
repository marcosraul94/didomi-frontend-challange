import React, { useEffect } from 'react';
import { fetchAllConsents } from 'src/utils/api';
import { useDispatch, useSelector } from 'react-redux';
import { selectConsents, selectPage } from 'src/state/selectors/consents';
import { setConsents } from 'src/state/slices/consents';
import StyledDataGrid from './styles';
import MainSectionContainer from '../MainSection';
import { parseColumns, parseRows } from './parsing';

const CollectedConsents = () => {
  const dispatch = useDispatch();
  const page = useSelector(selectPage);
  const consents = useSelector(selectConsents);
  const columns = parseColumns();
  const rows = parseRows(consents);

  useEffect(() => {
    const loadConsents = async () => {
      const downloadedConsents = await fetchAllConsents();
      dispatch(setConsents(downloadedConsents));
    };

    loadConsents();
  }, []);

  return (
    <MainSectionContainer>
      <StyledDataGrid
        pagination
        autoHeight
        pageSize={2}
        page={page}
        data={consents}
        rows={rows}
        columns={columns}
      />
    </MainSectionContainer>
  );
};

export default CollectedConsents;
