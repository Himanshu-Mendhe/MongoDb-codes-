const express = require('express');
const app = express();
const TweetRepository = require('./repository/tweer-reapository')

const connect = require('./config/database');
const Tweet = require('./models/tweets'); 

app.listen (3006, async() => {
    console.log("server started")

    await connect();
    console.log("mongoose connection made");
    /*
    const tweet = await Tweet.create({
        content: "third tweet"
    })
    console.log(tweet)
    */
   //const tweets = await Tweet.find({content: 'third tweet'});
   //const tweets = await Tweet.findById('65db42a1ef4df9bac3cfeb72');;
   //tweets.email = "himau@gmail.com";
   //const tweets = await Tweet.findByIdAndDelete('65db4388a76548af3b9e7b23')

   /*
   const tweets = await tweetRepo.update('65db42a1ef4df9bac3cfeb72', {content: "update 3"});
   console.log(tweets)
   */
   /*
   const tweetRepo = new TweetRepository;
   const tweets = await tweetRepo.getAll(0,3);
   console.log(tweets[0].contentWithEmail)
   console.log(tweets[0].id)
   */ 
   const tweetRepo = new TweetRepository;
   console.log(await tweetRepo.create ({content: "with hooks 1"}))
   
});