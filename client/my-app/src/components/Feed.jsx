import React, { useState, useEffect } from "react";
import TweetBox from "./TweetBox";
import Post from "./Post";
import FlipMove from "react-flip-move";
import axios from 'axios';
import {contractAddress, abi} from '../utils/TwitterContract.js';
import {ethers} from 'ethers';


function Feed({personal}) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  const getUpdatedTweets = (allTweets, address) => {
    let updatedTweets = [];
    // Here we set a personal flag around the tweets
    for(let i=0; i<allTweets.length; i++) {
      if(allTweets[i].username.toLowerCase() == address.toLowerCase()) {
        let tweet = {
          'id': allTweets[i].id,
          'tweetText': allTweets[i].tweetText,
          'isDeleted': allTweets[i].isDeleted,
          'username': allTweets[i].username,
          'personal': true
        };
        updatedTweets.push(tweet);
      } else {
        let tweet = {
          'id': allTweets[i].id,
          'tweetText': allTweets[i].tweetText,
          'isDeleted': allTweets[i].isDeleted,
          'username': allTweets[i].username,
          'personal': false
        };
        updatedTweets.push(tweet);
      }
    }
    return updatedTweets;
  }

  const getAllTweets = async () => {
    try {
      const {ethereum} = window

      if(ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const TwitterContract = new ethers.Contract(
          contractAddress,
          abi,
          signer
        );

        const account = await ethereum.request({method: "eth_accounts"});

        let allTweets = await TwitterContract.getAllTweets();
        console.log(allTweets)
        setPosts(getUpdatedTweets(allTweets, account[0]));
      } else {
        console.log("Ethereum object doesn't exist");
      }
    } catch(error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getAllTweets();
  }, []);

  const deleteTweet = key => async () => {
    console.log(key);

    // Now we got the key, let's delete our tweet
    try {
      const {ethereum} = window

      if(ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const TwitterContract = new ethers.Contract(
          contractAddress,
          abi,
          signer
        );

        const account = await ethereum.request({method: "eth_accounts"});

        let deleteTweetTx = await TwitterContract.deleteTweet(key, true);
        let allTweets = await TwitterContract.getAllTweets();
        setPosts(getUpdatedTweets(allTweets, account[0]));
      } else {
        console.log("Ethereum object doesn't exist");
      }

    } catch(error) {
      console.log(error);
    }
  }

  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>

      <TweetBox getAllTweets={getAllTweets} setLoading={setLoading} />

      {loading && <div className="loading" style={{textAlign:"center",fontWeight:"800",fontStyle:"italic",padding:"10px",borderBottom:"1px solid grey"}}>...Sending Tweet</div>}

      <FlipMove>
        
        {posts.sort(function(a,b){return b.id-a.id}).map((post) => (<Post
            key={post.id}
            displayName={post.username}
            text={post.tweetText}
            personal={post.personal}
            onClick={deleteTweet(post.id)}
          />))}
      </FlipMove>
    </div>
  );
}

export default Feed