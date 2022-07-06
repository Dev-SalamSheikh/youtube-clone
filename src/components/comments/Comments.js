import React from "react";
import styled from "styled-components";
import Comment from "./Comment";

const Container = styled.div``;
const NewComment = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;
const Input = styled.input`
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.soft};
  background-color: transparent;
  outline: none;
  padding: 5px;
  width: 100%;
  color: ${({ theme }) => theme.text};
`;

const Comments = () => {
  return (
    <Container>
      <NewComment>
        <Avatar src="https://avatars.githubusercontent.com/u/94852238?v=4" />
        <Input placeholder="Add a Comment..." />
      </NewComment>
      <Comment
        img="https://yt3.ggpht.com/ytc/AKedOLQuZqap1ug3huh2w1tjmoO-S3N756IGeDv9fRhE8A=s48-c-k-c0x00ffffff-no-rj"
        name="Sadat Arefin Rafat"
        date="1 month ago"
        comment="This video is so good! We had a whole course in our varsity(System Analysis & Design) on this. This video summarized the course very precisely."
      />
      <Comment
        img="https://yt3.ggpht.com/nDgHm5s9o2pH7W3MwaqhzgGec4n7wtLDg8WCy2yigZEZmADKmoFz3vDIuazRKJWI9nrDVrXbHg=s48-c-k-c0x00ffffff-no-rj"
        name="CODE ABC"
        date="1 month ago"
        comment="Nayeem ভাই আপনিতো দেখি industrial  experience দিয়ে দিচ্ছেন। ২০২৩ থেকে ভালো মানের ডেভেলপার খুঁজে পায়না বাংলাদেশে এই কথা কোন কোম্পানি বলতে পারবে না আশাকরি, বরং ডেভেলপারই বলবে কাজ করার মতো ভালো কোম্পানি তেমন তৈরি হয়নি দেশে এখনো।
        You are so great bro❤"
      />
      <Comment
        img="https://yt3.ggpht.com/ytc/AKedOLSUwTp6ptiNCy1eovPrO61XfV74a8S21hpP3MU-D4ybbS47m9xmjKJ-JjbghP1m=s48-c-k-c0x00ffffff-no-rj"
        name="Aditya Chakraborty"
        date="1 month ago"
        comment="এভাবে ধরে ধরে কিভাবে শুরু থেকে এক একটা প্রজেক্ট করতে হয় তা এই কোর্স না করলে পারা যাবে না। অমুক ফ্রম স্ক্র্যাচ, তমুক ফ্রম স্ক্র্যাচ লিখে সার্চ দিলে অনেক ভিডিও আসবে। কিন্তু স্ক্র্যাচ থেকে করা মানে কি তা এই প্রজেক্টে বুঝলাম। স্ক্র্যাচ মানে ধুম করে বসে কোড করা না। প্রপার প্ল্যানিং, অ্যানালাইসিস, সুডোকোড এসবই হচ্ছে ভিত্তি। নাঈম ভাই ধন্যবাদ আপনাকে"
      />
      <Comment
        img="https://yt3.ggpht.com/ytc/AKedOLQGsYzwsEUIhb1A9XK9EDbkjSC1M5NncI_Kq1lVHw=s48-c-k-c0x00ffffff-no-rj"
        name="Brave Believer"
        date="10 days ago"
        comment="Which tool are you using for this planning?"
      />
      <Comment
        img="https://yt3.ggpht.com/ytc/AKedOLQZhEwjrdljhUn5c5Yw_U6IA1DhDELgWoWGvg=s48-c-k-c0x00ffffff-no-rj"
        name="CRAZY FOOTBALL INDUSTRY"
        date="1 month ago"
        comment="another world class tutorial"
      />
      <Comment
        img="https://yt3.ggpht.com/ytc/AKedOLQxDeltX1VICL2c_OVdKfAhsRzTGYFELwUn6fU-aQ=s48-c-k-c0x00ffffff-no-rj"
        name="Md Kaium Islam"
        date="1 month ago"
        comment="Great content"
      />
    </Container>
  );
};

export default Comments;
