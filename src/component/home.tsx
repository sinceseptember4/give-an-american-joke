import Jokes from './jokes.json';

const Home = () => {
  const jokes =JSON.parse(JSON.stringify(Jokes.jokes));
  const jokesLength= jokes.length;
  let randnum = Math.floor( Math.random() * jokesLength );
  let joke = jokes[randnum].joke;
  let check =true ;
  joke.replace('\n', '<br/>');
  while (check) {
    joke=joke.replace('\n', '<br/>');
    let test :number= joke.search(/\n/);
    
    if (test === -1) {
      check =false ;
    }
    
  }

  
  return (
    <>
      <div dangerouslySetInnerHTML={{__html: joke}}></div>
    </>
  );
};

export default Home;