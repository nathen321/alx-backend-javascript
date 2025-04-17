import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const result = await Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)]);
  result.map((res) => [
    {
      status: res.status,
      value: res.status === 'fulfilled' ? res.value : String(res.reason),
    },
  ]);
  return result;
}
