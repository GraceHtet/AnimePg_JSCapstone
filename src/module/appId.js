const appId = async () => {
  const cUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';

  const gen = await fetch(`${cUrl}`, {
    method: 'POST',
  }).then((res) => res.text());

  return gen;
};

export default appId;
