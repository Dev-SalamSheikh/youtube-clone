import React from "react";
import styled from "styled-components";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOffAltOutlinedIcon from "@mui/icons-material/ThumbDownOffAltOutlined";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import AddTaskOutlinedIcon from "@mui/icons-material/AddTaskOutlined";
import Comments from "../comments/Comments";
import Card from "../cards/Card";

const Container = styled.div`
  display: flex;
  gap: 24px;
  padding-right: 20px;
`;

const Content = styled.div`
  flex: 7;
`;

const VideoWrapper = styled.div``;

const Title = styled.h1`
  font-size: 18px;
  font-weight: 400;
  margin-top: 20px;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.text};
`;

const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Info = styled.span`
  color: ${({ theme }) => theme.textSoft};
`;

const Buttons = styled.div`
  display: flex;
  gap: 20px;
  color: ${({ theme }) => theme.text};
`;
const Button = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
`;

const Recommandation = styled.div`
  flex: 3;
`;

const Hr = styled.hr`
  margin: 15px 0;
  border: 0.5px solid ${({ theme }) => theme.soft};
`;

const Channel = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ChannelInfo = styled.div`
  display: flex;
  gap: 20px;
`;

const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const ChannelDetails = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.text};
`;

const ChannelName = styled.span`
  font-weight: 500;
`;

const ChannelCounter = styled.span`
  margin-top: 5px;
  margin-bottom: 20px;
  font-size: 12px;
  color: ${({ theme }) => theme.textsoft};
`;

const Description = styled.p`
  font-size: 14px;
`;

const Subscribe = styled.button`
  background-color: #cc1a00;
  font-weight: 500;
  color: white;
  border: none;
  border-radius: 3px;
  height: max-content;
  padding: 10px 20px;
  cursor: pointer;
`;

const Video = () => {
  return (
    <Container>
      <Content>
        <VideoWrapper>
          <iframe
            width="100%"
            height="570"
            src="https://www.youtube.com/embed/Gsj7uU_7Um4"
            title="Lecture 12 - Attendance System Requirement Analysis | Full-stack Army"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <Title>
            Lecture 12 - Attendance System Requirement Analysis | Full-stack
            Army
          </Title>
          <Details>
            <Info>3,453 views &middot; Premiered May 9, 2022</Info>
            <Buttons>
              <Button>
                <ThumbUpOutlinedIcon />
                148
              </Button>
              <Button>
                <ThumbDownOffAltOutlinedIcon />
              </Button>
              <Button>
                <ReplyOutlinedIcon />
                Share
              </Button>
              <Button>
                <AddTaskOutlinedIcon />
                Save
              </Button>
            </Buttons>
          </Details>
          <Hr />
          <Channel>
            <ChannelInfo>
              <Image src="https://yt3.ggpht.com/_laaRTCwOZ6hxLgPmjN8HnzzIlhWqyiwbD2kuofkSLx51FImoP0esGJVxyZm7oZ46Yby9MVz7g=s176-c-k-c0x00ffffff-no-rj-mo" />
              <ChannelDetails>
                <ChannelName>Stack Learner</ChannelName>
                <ChannelCounter>77.4K subscribers</ChannelCounter>
                <Description>
                  Lecture 12 - Attendance System Requirement Analysis In this
                  lecture, we discussed and analyzed the project requirements of
                  an attendance management system application.
                </Description>
              </ChannelDetails>
            </ChannelInfo>
            <Subscribe>SUBSCRIBE</Subscribe>
          </Channel>
          <Hr />
          <Comments></Comments>
        </VideoWrapper>
      </Content>
      <Recommandation>
        <Card
          type="sm"
          src="https://i.ytimg.com/vi/nWIUazF6obY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDOdwggVLVNqqoQfHsLAX-eDsm4UA"
          title="মন আমার কেমন কেমন করে | Prank Call | Chittainge Tv | funny audio"
          name="Chittainga TV"
          views="809,291 views &middot; Jun 30, 2022"
          channelImg="https://yt3.ggpht.com/jXBF5fu08_NMRf4U2OhusB7RZJ1pa1itobFpJSRNih-ZLzLeFnTnE5Ay-2159I5m5TQMHE6GpQ=s48-c-k-c0x00ffffff-no-rj"
        />
        <Card
          type="sm"
          src="https://i.ytimg.com/vi/wMy2IZ12mxM/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDums4ZfIhFpnBnkhhKaCdkaGoRqA"
          title="Lecture 9 - Functional Programming in JavaScript"
          name="Stack Learner"
          views="3,487 views &middot; Premiered Apr 24, 2022"
          channelImg="https://yt3.ggpht.com/_laaRTCwOZ6hxLgPmjN8HnzzIlhWqyiwbD2kuofkSLx51FImoP0esGJVxyZm7oZ46Yby9MVz7g=s176-c-k-c0x00ffffff-no-rj-mo"
        />
        <Card
          type="sm"
          src="https://i.ytimg.com/vi/39_UkSRzQrQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAXhaPwp3TQah5z4SpdrEMtxZElPA"
          title="Bolna | Kapoor & Sons | Sidharth Malhotra | Alia Bhatt "
          name="Sony Music India"
          views="491,853 views &middot; Jun 20, 2022"
          channelImg="https://yt3.ggpht.com/vJEsALWnQIwPZ2oaVbFWPu1n4L0CDkHpAdGJ-KBPFsxM9hsMsvExFK1mnCGUrMzfC67XPVThmQ=s48-c-k-c0x00ffffff-no-rj"
        />
        <Card
          type="sm"
          src="https://i.ytimg.com/vi/w0nrIl7iGwo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCyhqXAc-CmEyhvV5Wk6q53mgTG-Q"
          title="সবগুলো স্লুইচ গেট খুলে দিয়ে আন্তর্জাতিক অপরাধ করেছে ভারত'"
          name="Jamuna TV"
          views="332,323 views &middot; Jun 30, 2022"
          channelImg="https://yt3.ggpht.com/ytc/AKedOLS3kiLycZqByPXboXsBsfdfOfBHty045O7ULV4C4w=s48-c-k-c0x00ffffff-no-rj"
        />
        <Card
          type="sm"
          src="https://i.ytimg.com/vi/uIKfqQbvV_U/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBA-dxvSVMwwaZzif25DfHSB4Q11w"
          title="The Resume that got me into GOOGLE"
          name="Fraz"
          views="72,687 views &middot; Jun 28, 2022"
          channelImg="https://yt3.ggpht.com/FitboDHvZPrXqXtbe1JjfeN9x_wgNxv58GDadFqIf5nu1peeADWpWdW82Sb7eBaFH-TNy9AqgbM=s48-c-k-c0x00ffffff-no-rj"
        />
        <Card
          type="sm"
          src="https://i.ytimg.com/vi/0cOXKTbdufA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDoTvMeRZdEBCB7drGPGwdm1YZ-xg"
          title="ভারতের ইসলামিক সাম্রাজ্যের রাজধানী - আগ্রার কাহিনী 🇮🇳"
          name="Nadir On The Go - Bangla"
          views="86,131 views &middot; Premiered Jun 28, 2022"
          channelImg="https://yt3.ggpht.com/ytc/AKedOLS7umqlCtzXRI937Vm4T0x7fmJkyn7PA_UtnXKs=s48-c-k-c0x00ffffff-no-rj"
        />
        <Card
          type="sm"
          src="https://i.ytimg.com/vi/gSDncyuGw0s/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC9Rpb1Xe96R8ilBF83eTti-HGq5A"
          title="How functions work in JS ❤️ & Variable Environment "
          name="Akshay Saini"
          views="232,268 views &middot; Oct 22, 2020"
          channelImg="https://yt3.ggpht.com/ytc/AKedOLR8gqN3fHHNYbehMcsJ49rapBPhJMGPYSrl6YQyNg=s48-c-k-c0x00ffffff-no-rj"
        />
        <Card
          type="sm"
          src="https://i.ytimg.com/an_webp/7exOfIAKuWU/mqdefault_6s.webp?du=3000&sqp=CI6O_pUG&rs=AOn4CLBAM_6UlgaaD_4b2cRfhET9KjNx8A"
          title="4 ways to fetch fetch data from API in React (Bangla)"
          name="Learn with Sumit - LWS - Bangladesh"
          views="5,994 views &middot; Jun 28, 2022"
          channelImg="https://yt3.ggpht.com/D9X91qRuvaOSs2L5ai9ydYsfuW8sUYgeMs7gsCuGkbElWYtRmraazV6U9a277kGJ_MHEOTjdtcI=s48-c-k-c0x00ffffff-no-rj"
        />
        <Card
          type="sm"
          src="https://i.ytimg.com/vi/73ercXgTwgQ/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB6uQ2_etgy0pDaYJA82-n0ilwKuA"
          title="Joe Root Dismisses Dominant Pant | Highlights | England v India"
          name="England & Wales Cricket Board"
          views="1,641,305 views &middot; Jul 2, 2022"
          channelImg="https://yt3.ggpht.com/ytc/AKedOLQ1IkePr9q5BHgj3WLQcL8Xn1cm7ScXo2NU-Gz7eQ=s48-c-k-c0x00ffffff-no-rj"
        />
        <Card
          type="sm"
          src="https://i.ytimg.com/vi/KTNbXdVRdrM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBXTU6a8AfQ7DTrxpvp-_mFG_NYoA"
          title="চীনকে 'মারাত্মক হুমকি' হিসেবে দেখছে ন্যাটো | NATO | Jens Stoltenberg"
          name="SOMOY TV"
          views="289,176 views &middot; Jul 1, 2022"
          channelImg="https://yt3.ggpht.com/ytc/AKedOLSUl2lcBOUjY9QGWN3Z4FWcEKJ65AFpaEWxRgiL7w=s48-c-k-c0x00ffffff-no-rj"
        />
        <Card
          type="sm"
          src="https://i.ytimg.com/vi/oSIbvypd3KM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCVqXqOCId1ZIaZAJmy30tzG4O_Ng"
          title="Authentication Bangla tutorial 5 : session vs token based authentication"
          name="Anisul Islam"
          views="339 views &middot; Premiered Jun 30, 2022"
          channelImg="https://yt3.ggpht.com/ytc/AKedOLSKVDfHa1cOpwRjgKSrQXd492eXXIPGZYQ8XZNxlQ=s48-c-k-c0x00ffffff-no-rj"
        />
        <Card
          type="sm"
          src="https://i.ytimg.com/vi/HPerndfCzFw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA4CoFOjxi7GTh2cACabIirgoWvuw"
          title="#23 JavaScript Bangla Tutorial | JavaScript Array Sort"
          name="Learn with Sumit - LWS - Bangladesh"
          views="10,927 views &middot; Aug 13, 2021"
          channelImg="https://yt3.ggpht.com/D9X91qRuvaOSs2L5ai9ydYsfuW8sUYgeMs7gsCuGkbElWYtRmraazV6U9a277kGJ_MHEOTjdtcI=s48-c-k-c0x00ffffff-no-rj"
        />
        <Card
          type="sm"
          src="https://i.ytimg.com/vi/-2qwXp2jVT8/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBvdgRidFc_Jxg_pbUHq68wziRGJw"
          title="গুগলে ইঞ্জিনিয়ারদের বেতন কত? (3 Questions with Zulkarnine, EP2)"
          name="Zulkarnine Mahmud"
          views="6,696 views &middot; Jun 23, 2022"
          channelImg="https://yt3.ggpht.com/ytc/AKedOLQApu7zxbrSmcHbLDpu86PAo4HpXBaqTr-tK1L3Yg=s48-c-k-c0x00ffffff-no-rj"
        />
        <Card
          type="sm"
          src="https://i.ytimg.com/vi/qRByyyXDdE8/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLASw4TYRVaBVUnN8JlG-avw4bARSQ"
          title="Bhalobashi Bole Dao (REPRISE) - Piran Khan ft. Jony "
          name="Piran Khan"
          views="1,052,376 views &middot; Premiered Feb 7, 2022"
          channelImg="https://yt3.ggpht.com/9xAmaoTDmarBTwmSfZ7Km8VDZAQ37dBMC3kZnmn7b_i8flAjSIynXHCulcoqjjvDY2nb_pJ-ig=s48-c-k-c0x00ffffff-no-rj"
        />
        <Card
          type="sm"
          src="https://i.ytimg.com/vi/d0x2UbhbdmY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBGfRohf6J1O7A3PKKaK497ItVkOg"
          title="Hasi | Hamari Adhuri Kahani | Emraan Hashmi, Vidya Balan"
          name="Sony Music India"
          views="1,238,662 views &middot; Jun 17, 2022"
          channelImg="https://yt3.ggpht.com/vJEsALWnQIwPZ2oaVbFWPu1n4L0CDkHpAdGJ-KBPFsxM9hsMsvExFK1mnCGUrMzfC67XPVThmQ=s48-c-k-c0x00ffffff-no-rj"
        />
        <Card
          type="sm"
          src="https://i.ytimg.com/vi/jLNrvmXboj8/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBnXvi9aN6P8QwZguwkx4MtXpx1qA"
          title="Alec Benjamin - Let Me Down Slowly (Lyrics)"
          name="a paradise bird"
          views="355,316,241 views &middot; May 27, 2018"
          channelImg="https://yt3.ggpht.com/ytc/AKedOLSseZ_LPkdlIhNcarsqjJEdbDIhqGN4W43igyZJ=s48-c-k-c0x00ffffff-no-rj"
        />
        <Card
          type="sm"
          src="https://i.ytimg.com/vi/8hly31xKli0/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCFN0qRKwmeW1zC9ChzC-7CL7-ZaA"
          title="Algorithms and Data Structures Tutorial - Full Course for Beginners"
          name="freeCodeCamp.org"
          views="2,188,383 views &middot; Mar 19, 2021"
          channelImg="https://yt3.ggpht.com/ytc/AKedOLRR2uNiXJiFH-XRmtGgkdICxTuDJxCPJidKFRNCNg=s48-c-k-c0x00ffffff-no-rj"
        />
        <Card
          type="sm"
          src="https://i.ytimg.com/vi/Oido0SZRRNY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDl2mkHSTPxu0y1l5qyKul181o3vQ"
          title="Tujhe Sochta Hoon Full Video - Jannat 2|Emraan Hashmi"
          name="SonyMusicIndiaVEVO"
          views="45,422,574 views &middot; Sep 26, 2013"
          channelImg="https://yt3.ggpht.com/ytc/AKedOLQb29pcnUPnEwJ3kIHBHVPXptRbELdoEkdDnxPRrQ=s48-c-k-c0x00ffffff-no-rj"
        />
        <Card
          type="sm"
          src="https://i.ytimg.com/vi/GvBgPBVcjEM/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCBkPO1kKtqDyXYWB3ZkJGCjOcnPg"
          title="I’m bad at coding…. (my software engineering journey)"
          name="Pooja Dutt"
          views="366,257 views &middot; May 24, 2022"
          channelImg="https://yt3.ggpht.com/3mo-87LisCMIdpRyV3H7NC3nFQOaq9lSIcbEPuH3nS3blwZ5HrVAyoCUTZIu4tOvXFnTfJQ3Sg=s48-c-k-c0x00ffffff-no-rj"
        />
        <Card
          type="sm"
          src="https://i.ytimg.com/vi/IDgDWDpwvIc/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCNnPzkPM8UKc_PQ2y6LUeTcIpN4A"
          title="Quick First Look at Python 3.11 Features (10-60% FASTER!)"
          name="Python Engineer"
          views="8,776 views &middot; Jun 30, 2022"
          channelImg="https://yt3.ggpht.com/ytc/AKedOLTs-Pvd4mvUi-m2rDLd8bzrKwS5a8C9HnDbkUDzHw=s48-c-k-c0x00ffffff-no-rj"
        />
        <Card
          type="sm"
          src="https://i.ytimg.com/vi/LSNoRzojcQo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD7LeN2fOckI3fZXYhjR93IaU4J9Q"
          title="Modern CSS Glowing Button Hover Effects 02 | Html CSS Tutorial"
          name="Online Tutorials"
          views="151,578 views &middot; May 30, 2022"
          channelImg="https://yt3.ggpht.com/ytc/AKedOLQGJzANzs2ymcXNw3LKBSpQj9EpJojb5a6JY6oPlQ=s48-c-k-c0x00ffffff-no-rj"
        />
        <Card
          type="sm"
          src="https://i.ytimg.com/vi/A0J-hB3kSQ4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBh_0rF0KM-QU9uB6ncm7EmV6nfXA"
          title="Can you beat me at a CSS Battle?"
          name="Kevin Powell"
          views="37,060 views &middot; Jun 28, 2022"
          channelImg="https://yt3.ggpht.com/ytc/AKedOLT1tLx7BgAa7_SHaXE0hDRjQu1BRihsEDZ3lmUUcg=s48-c-k-c0x00ffffff-no-rj"
        />
        <Card
          type="sm"
          src="https://i.ytimg.com/vi/UWe4aMPAyvc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDiLgIy9_lz18xYOi1ZBjvm_meNWA"
          title="I rejected $360k Google job offer | Software Engineer"
          name="PIRATE KING"
          views="187,919 views &middot; Jun 11, 2022"
          channelImg="https://yt3.ggpht.com/wtylmZTnHHDOcD32yZh-46C1RsyqQA0BHs56v6CiNBAvf-BackU7cLGHwSOTzKADpjptr_40aQ=s48-c-k-c0x00ffffff-no-rj"
        />
      </Recommandation>
    </Container>
  );
};

export default Video;
