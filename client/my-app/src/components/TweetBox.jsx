import React, { useState , useEffect } from "react";
import Avatar from 'avataaars';
import { generateRandomAvatarOptions } from './Avatar';
import { Button } from "@material-ui/core";
import axios from 'axios';
import {ethers} from 'ethers';
import {contractAddress, abi} from '../utils/TwitterContract.js'

function TweetBox({getAllTweets, setLoading}) {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");
  const [avatarOptions, setAvatarOptions] = useState("");

  const addTweet = async () => {
    let tweet = {
      'tweetText': tweetMessage,
      'isDeleted': false
    };

    try {
      const {ethereum} = window

      if(ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const TwitterContract = new ethers.Contract(
          contractAddress,
          abi,
          signer
        )

        let twitterTx = await TwitterContract.addTweet(tweet.tweetText, tweet.isDeleted);

        //await listenForTransactionMine(twitterTx, provider).then(() => {window.href("/")});
        await twitterTx.wait(1);

      } else {
        console.log("Ethereum object doesn't exist!");
      }
    } catch(error) {
      console.log("Error submitting new Tweet", error);
    }
  }

  const sendTweet = (e) => {
    e.preventDefault();
    setLoading(true);

    addTweet().then((res) => {getAllTweets();setLoading(false)});

    setTweetMessage("");
    setTweetImage("");

  //   setTimeout(() => {
  //     window.reload(true)
      
  //   }, 5000);
   };

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    let avatar = generateRandomAvatarOptions();
    setAvatarOptions(avatar);
  }, []);

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar
            style={{ width: '100px', height: '100px' }}
            avatarStyle='Circle'
            {...avatarOptions }
          />
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="What's happening?"
            type="text"
          />
        </div>
        

        <Button
          onClick={sendTweet}
          type="submit"
          className="tweetBox__tweetButton"
        >
          Post
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;