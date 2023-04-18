export default function getFullResponseFromAPI(success) {
  return new Promise((successful, failure) => {
    if (success) {
      successful({ status: 200, body: 'Success' });
    } else {
      failure(new Error('The fake API is not working currently'));
    }
  });
}
