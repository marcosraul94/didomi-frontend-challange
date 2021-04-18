import React, { useEffect } from 'react';
import { fetchAllConsents } from 'src/utils/api';
import { useDispatch, useSelector } from 'react-redux';
import { selectConsents, selectPage } from 'src/state/selectors/consents';
import { setConsents, setPage } from 'src/state/slices/consents';
import MainSectionContainer from '../MainSection';
import ConsentsTable from '../ConsentsTable';

const CollectedConsents = () => {
  const dispatch = useDispatch();
  const page = useSelector(selectPage);
  const consents = useSelector(selectConsents);

  const isConsentsListEmpty = !(consents.length > 0);
  const rowsPerPage = 2;
  const totalPages = Math.ceil(consents.length / rowsPerPage);
  const startIndex = rowsPerPage * page;
  const endIndex = rowsPerPage * (page + 1);
  const rows = consents.slice(startIndex, endIndex);
  const columns = ['Name', 'Email', 'Given consent for'];

  useEffect(() => {
    const loadConsents = async () => {
      const fetchedConsents = await fetchAllConsents();
      dispatch(setConsents(fetchedConsents));
    };

    loadConsents();
  }, []);

  const handlePageChange = (newPage) => {
    dispatch(setPage(newPage));
  };

  return (
    <MainSectionContainer>
      {!isConsentsListEmpty && (
        <ConsentsTable
          currentPage={page}
          totalPages={totalPages}
          onPageChange={handlePageChange}
          columns={columns}
          rows={rows}
        />
      )}
    </MainSectionContainer>
  );
};

export default CollectedConsents;
