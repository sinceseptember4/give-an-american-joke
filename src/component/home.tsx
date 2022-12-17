import Jokes from './jokes.json';

const Home = () => {
  const jokes =JSON.parse(JSON.stringify(Jokes.jokes));
  const jokesLength= jokes.length;
  let randnum = Math.floor( Math.random() * jokesLength );
  let joke = jokes[randnum].joke;
  const title = jokes[randnum].title;
  let check =true ;
  joke.replace('\n', '<br/>');
  while (check) {
    joke=joke.replace('\n', '<br/>');
    let test :number= joke.search(/\n/);
    
    if (test === -1) {
      check =false ;
    }
    
  }

  const reload = () => {
    window.location.reload()
  };
  
  return (
    <>
      <div>タイトル: {title}</div>
      <div dangerouslySetInnerHTML={{__html: joke}}></div>
      <button onClick= {reload}>次のジョーク</button>
    </>
  );
};

export default Home;