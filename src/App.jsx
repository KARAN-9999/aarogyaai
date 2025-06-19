import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'


// // export default App
// function App() {
//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center">
//       <h1 className="text-4xl font-bold text-blue-600">
//         AarogyaAI is Live with Tailwind! 🚀
//       </h1>
//     </div>
//   );
// }

// export default App;
import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import SymptomChecker from './pages/SymptomChecker'
import VideoConsultation from './pages/VideoConsultation'
import PatientProfile from './pages/PatientProfile'
import DoctorLogin from './pages/DoctorLogin'
import './App.css'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <nav className="bg-blue-600 p-4 text-white flex justify-between items-center">
          <h1 className="text-2xl font-bold">AarogyaAI</h1>
          <div className="space-x-4">
            <Link to="/" className="hover:underline">Home</Link>
            <Link to="/symptom-checker" className="hover:underline">Symptom Checker</Link>
            <Link to="/video-consultation" className="hover:underline">Video Consultation</Link>
            <Link to="/patient-profile" className="hover:underline">Profile</Link>
            <Link to="/doctor-login" className="hover:underline">Doctor Login</Link>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/symptom-checker" element={<SymptomChecker />} />
          <Route path="/video-consultation" element={<VideoConsultation />} />
          <Route path="/patient-profile" element={<PatientProfile />} />
          <Route path="/doctor-login" element={<DoctorLogin />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }