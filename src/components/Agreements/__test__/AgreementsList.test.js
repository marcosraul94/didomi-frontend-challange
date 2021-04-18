import renderWithRedux from 'src/utils/testing';
import AgreementsList from '../AgreementsList';

describe('AgreementsList component', () => {
  it('displays the agreements', () => {
    const { getByText } = renderWithRedux(AgreementsList);
    getByText('Receive newsletter');
    getByText('Be shown targeted ads');
    getByText('Contribute to anonymous visit statistics');
  });
});
