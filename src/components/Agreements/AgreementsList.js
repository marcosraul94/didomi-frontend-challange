import React from 'react';
import Checkbox from '../Checkbox';
import { AgreementsInnerContainer } from './styles';

const agreements = [
  'Receive newsletter',
  'Be shown targeted ads',
  'Contribute to anonymous visit statistics',
];

const AgreementsList = () => {
  const checkedAgreements = [];

  const handleChange = (label, updatedIsChecked) => {
    console.log(label, updatedIsChecked);
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
