import mockedDb from './db';

const mockAsyncCall = () => new Promise((resolve) => setTimeout(resolve, 500));

export const addNewUser = async (newUserData) => {
  await mockAsyncCall();
  const { email } = newUserData;
  const updatedDb = mockedDb.data.filter((storedUserData) => storedUserData.email !== email);
  mockedDb.update([...updatedDb, newUserData]);
};

export const fetchAllConsents = async () => {
  await mockAsyncCall();
  return [...mockedDb.data];
};
