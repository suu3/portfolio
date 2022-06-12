import { IMAGES } from "lib/assets";

export const teamProjectList2021 =[
    {
        path: "/project/buddy",
        imageSrc: IMAGES.BUDDY,
        title: <span>딥러닝 기반 <br/> 심리안정 챗봇 스피커 "버디"</span>,
        period: "2021/03/16 - 2021/11/25",
        category: { backgroundColor: "#A5BECC", content: "Deep Learning"},
        stack: [{
            content: "Microsoft Azure",
            backgroundColor: "#47B5FF",
        },{
            content: "python",
            backgroundColor: "#1363DF",

        },{
            content: "Goole Colab",
            backgroundColor: "#FFC54D",
        }]
    },
    {
        path: "/project/gymt",
        imageSrc: IMAGES.GYMT,
        title: <span>공공 체육관 정보 제공 App <br/>
        "짐트"</span>,
        period: "2021/06/28 - 2021/08/27",
        category: { backgroundColor: "rgb(192, 293, 67)", content: "Mobile"},
        stack: [{
            content: "React Native",
            backgroundColor: "#F47C7C",
        },{
            content: "Expo",
            backgroundColor: "#839AA8",

        },{
            content: "Firebase",
            backgroundColor: "#F5820D",
        }]
    }
];


export const teamProjectList2022 =[
    {
        path: "/project/knockknock",
        imageSrc: IMAGES.KNOCKKNOCK,
        title: <span>동거인과의 생활 관리 웹 서비스 "Knock/Knock"</span>,
        period: "2022/02/02 ~",
        category: { backgroundColor: "rgb(255, 154, 119)", content: "Web"},
        stack: [{
            content: "Django",
            backgroundColor: "#1F4690",
            color: "white"

        },{
            content: "React",
            backgroundColor: "#F47C7C",
        },{
            content: "NodeJS",
            backgroundColor: "#FFC54D",
        }]
    },    {
        path: "/project/paws",
        imageSrc: IMAGES.PAWS,
        title: <span>반려동물 숏 폼 모바일 웹 "PAWS"</span>,
        period: "2021/04/15 - 2021/05/20",
        category: { backgroundColor: "rgb(192, 293, 67)", content: "Mobile"},
        stack: [{
            content: "React",
            backgroundColor: "#F47C7C",
        },{
            content: "TypeScript",
            backgroundColor: "#34B3F1",

        },{
            content: "NextJS",
            backgroundColor: "#B20600",
            color: "white"
        }]
    }
];