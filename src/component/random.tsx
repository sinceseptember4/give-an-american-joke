
import Jokes from './jokes.json';

const Random = () => {
  const jokes =JSON.parse(JSON.stringify(Jokes.jokes));
  const jokesLength= jokes.length;
  let randnum = Math.floor( Math.random() * jokesLength );
  console.log(jokes[randnum].joke);
  return (
    
    <>
      <h1>ホーム</h1>
    </>
  );
};

export default Random;