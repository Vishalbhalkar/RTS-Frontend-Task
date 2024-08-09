import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import './App.css'
import Courses from './pages/Courses'
import Header from './layout/Header';
import Footer from './layout/Footer';

const Overview = () => <h2>Overview</h2>;
const Assignments = () => <h2>Assignments</h2>;
const Classmates = () => <h2>Classmates</h2>;
const Schedule = () => <h2>Schedule</h2>;
const Community = () => <h2>Community</h2>;

function App() { 

  const [count, setCount] = useState(0)

  return (
    <>
    <div className='full_navbar'>
      <Header />
    </div>
      <div>
        <Routes>
          <Route path="/" element={<Courses />} />
          <Route path="/overview" element={<Overview />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/assignments" element={<Assignments />} />
          <Route path="/classmates" element={<Classmates />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/community" element={<Community />} />
        </Routes>
      </div>
      <Footer/>
    </>
  )
}

export default App
