export const parseColumns = () => ([
  { field: 'col1', headerName: 'Name', flex: 0.25 },
  { field: 'col2', headerName: 'Email', flex: 0.25 },
  { field: 'col3', headerName: 'Consent given for', flex: 0.5 },
]);

export const parseRows = (consents) => consents.map((consent, id) => ({
  id,
  col1: consent.name,
  col2: consent.email,
  col3: consent.agreements.join(', '),
}));
