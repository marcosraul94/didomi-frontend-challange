import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserAgreements } from 'src/state/selectors/user';
import { addUserAgreement, removeUserAgreement } from 'src/state/slices/user';
import Checkbox from '../Checkbox';
import { AgreementsInnerContainer } from './styles';

const agreements = [
  'Receive newsletter',
  'Be shown targeted ads',
  'Contribute to anonymous visit statistics',
];

const AgreementsList = () => {
  const dispatch = useDispatch();
  const checkedAgreements = useSelector(selectUserAgreements);

  const handleChange = (agreement, updatedIsChecked) => {
    if (updatedIsChecked) dispatch(addUserAgreement(agreement));
    else dispatch(removeUserAgreement(agreement));
  };

  return (
    <AgreementsInnerContainer>
      {agreements.map((agreement) => (
        <Checkbox
          key={agreement}
          label={agreement}
          isChecked={checkedAgreements.includes(agreement)}
          onChange={handleChange}
        />
      ))}
    </AgreementsInnerContainer>
  );
};

export default AgreementsList;
