import Jokes from './jokes.json';
export const Api = () => {
  const jokes =JSON.parse(JSON.stringify(Jokes.jokes));
  const jokesLength= jokes.length;
  let randnum = Math.floor( Math.random() * jokesLength );
  console.log(jokes[randnum].joke);

  return (
    <>
      
    </>
  );
};

