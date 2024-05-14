import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Navigation from './Components/Navigation';
import All from './Pages/All';
import Fsd from './Pages/Fsd';
import Cybersecurity from './Pages/Cybersecurity';
import DataScience from './Pages/DataScience';
import Blockchain from './Pages/Blockchain';

const App = () => {
  const data = [{
    id:1,
    img:'https://www.guvi.in/blog/wp-content/uploads/2023/07/how-long-it-would-it-take-to-learn-full-stack-development_-2048x1072.webp',
    title:'Best Full-Stack Development Project Ideas in 2024',
    topic:'Full Stack Development',
    author:'Isha Sharma',
    date:'25 Mar, 2024',
    timePeriod:'4 Min Read'
  },
  {
    id:2,
    img:'https://www.guvi.in/blog/wp-content/uploads/2023/02/1_6rDcIgFJQldloIERiUSmzw.png',
    title:'How Long Would It Take to Be a Full Stack Developer?',
    topic:'Full Stack Development',
    author:'Meghana D',
    date:'26 Mar, 2024',
    timePeriod:'3 Min Read'
  },
  {
    id:3,
    img:'https://www.guvi.in/blog/wp-content/uploads/2023/07/person-front-computer-working-html.jpg',
    title:'How does Apache work? A detailed introduction to Apache',
    topic:'Full Stack Development',
    author:'Tushar Vinocha',
    date:'26 Mar, 2024',
    timePeriod:'5 Min Read'
  },
  {
    id:4,
    img:'https://www.guvi.in/blog/wp-content/uploads/2022/12/Yellow-Blue-Illustration-Business-Blog-Banner-2048x1152.png',
    title:'Cybersecurity Vs Ethical Hacking: Top 10 Differences',
    topic:'Cyber Security',
    author:' Tushar Vinocha',
    date:'16 Apr, 2024',
    timePeriod:'5 Min Read'
  },
  {
    id:5,
    img:'https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Non-Coding-Jobs-in-Cybersecurity.webp',
    title:'Non-Coding Jobs in Cybersecurity: A Comprehensive Guide',
    topic:'Cyber Security',
    author:'Jaishree Tomar',
    date:'26 Mar, 2024',
    timePeriod:'4 Min Read'
  },
  {
    id:6,
    img:'https://www.guvi.in/blog/wp-content/uploads/2023/08/Feature-image-Best-Full-Stack-Development-Online-Courses.webp',
    title:'What Is Hacking? Types of Hacking & More',
    topic:'Cyber Security',
    author:'Meghana D',
    date:'25 Mar, 2024',
    timePeriod:'6 Min Read'
  },
  {
    id:7,
    img:'https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-What-Is-Hacking_-Types-of-Hacking-More.webp',
    title:'Top 10 High Paying Non-Coding Jobs in Data Science in 2024',
    topic:'Data Science',
    author:' Isha Sharma',
    date:'16 Apr, 2024',
    timePeriod:'6 Min Read'
  },
  {
    id:8,
    img:'https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Top-High-Paying-Non-Coding-Jobs-in-Data-Science.webp',
    title:'12 Real-World Data Science Examples: Power Of Data Science',
    topic:'Data Science',
    author:'Lukesh S',
    date:'25 Mar, 2024',
    timePeriod:'7 Min Read'
  },
  {
    id:9,
    img:'https://www.guvi.in/blog/wp-content/uploads/2023/08/How-Long-Would-It-Take-to-Learn-Data-Science-2048x1072.png',
    title:'Can A Commerce Student Do Data Science?',
    topic:'Data Science',
    author:'Saakshi Priyadarshini',
    date:'16 Apr, 2024',
    timePeriod:'3 Min Read'
  },
  {
    id:10,
    img:'https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Non-Coding-Jobs-in-Blockchain.webp',
    title:'A Guide To Learning Blockchain Technology From Scratch',
    topic:'Blockchain',
    author:'Lukesh S',
    date:'06 Oct, 2023',
    timePeriod:'3 Min Read'
  },
  {
    id:11,
    img:'https://www.guvi.in/blog/blockchain-developer-resume-tips/',
    title:'Non-Coding Jobs in Blockchain: Exploring Opportunities Beyond',
    topic:'Blockchain',
    author:'Jaishree Tomar',
    date:'22 Mar, 2024',
    timePeriod:'3 Min Read'
  },
  {
    id:12,
    img:'https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Non-Coding-Jobs-in-Blockchain.webp',
    title:'Best Books to Learn Blockchain',
    topic:'Blockchain',
    author:'Meghana D',
    date:'24 Mar, 2024',
    timePeriod:'5 Min Read'
  }
]


  return (
    <div>
     
     <BrowserRouter>
     <Navigation/>
     <Routes>
      <Route path='/'  element={<All data={data}/>} />
      <Route path='/fullstack'  element={<Fsd data={data}/>} />
      <Route path='/cyber_security'  element={<Cybersecurity data={data}/>} />
      <Route path='/data_science'  element={<DataScience data={data}/>} />
      <Route path='/blockchain'  element={<Blockchain data={data}/>} />
     </Routes>
     </BrowserRouter>
    </div>
  );
};

export default App;