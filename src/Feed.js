import React, { useEffect, useState } from 'react';
import './Feed.css';
import CreateIcon from '@material-ui/icons/Create';
import InputOption from './InputOption';
import ImageIcon from '@material-ui/icons/Image';
import SubscriptionIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalenderViewDayIcon from '@material-ui/icons/CalendarViewDay';
import Posts from './Posts';
import { collection, onSnapshot, addDoc, query, orderBy } from 'firebase/firestore';
import { db , serverTimestamp } from './firebase'; // Correct import statement

function Feed() {
  const [input, setInput] = useState('');
  const [posts, setPosts] = useState();

  useEffect(() => {
    const unsubscribe = onSnapshot(query(collection(db, 'posts'), orderBy('timestamp','desc')), (snapshot) => {
      setPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });

    // Unsubscribe when the component unmounts or when you no longer need updates
    return () => unsubscribe();
  }, [db]);

  const sendPost = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'posts'), {
        name: 'Sonny',
        description: 'this is the test',
        message: input,
        photoUrl: '',
        timestamp: serverTimestamp()
      });
      // Clear input after successfully adding a post
      setInput('');
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  };

  return (
    <div className='feed'>
      <div className='feed_inputContainer'>
        <div className='feed__input'>
          <CreateIcon />
          <form>
            <input value={input} onChange={(e) => setInput(e.target.value)} type='text'></input>
            <button onClick={sendPost} type='submit'>
              Send
            </button>
          </form>
        </div>
        <div className='feed__inputOptions'>
          <InputOption Icon={ImageIcon} title='Photo' color='#70B5F9' />
          <InputOption Icon={SubscriptionIcon} title='Video' color='#E7A33E' />
          <InputOption Icon={EventNoteIcon} title='Event' color='#C0CBCD' />
          <InputOption Icon={CalenderViewDayIcon} title='Write Article' color='#7FC15E' />
        </div>
      </div>
      {/*Posts*/}
      {posts &&
        posts.map(({ id, data: { name, description, message, photoUrl } }) => (
          <Posts key={id} name={name} description={description} message={message} photoUrl={photoUrl} />
        ))}
      <div></div>
    </div>
  );
}

export default Feed;
