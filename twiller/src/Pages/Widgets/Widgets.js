import React from "react";
import './widgets.css';
import SearchIcon from "@mui/icons-material/Search";
import { TwitterTimelineEmbed, TwitterTweetEmbed } from "react-twitter-embed";

const Widgets = () => {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>
      <div className="widgets__widgetsContainer">
        <h2> What 's Happeninig </h2>
        <TwitterTweetEmbed tweetId={"1862100552567660581"} />
        <TwitterTweetEmbed
          sourceType="profile"
          screenName="BCCI"
          options={{ height: 400 }}
        />
      </div>
    </div>
  );
};
export default Widgets;
