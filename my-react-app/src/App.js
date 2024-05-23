import React , {useId} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Component/Login';
// import usePreventZoom from './PreventZoom';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Users1 from './Component/Highcharts/index1';
// import Users from './Component/Highcharts/Index';



function App() {
  // usePreventZoom();
  const Id = useId();
  console.log(Id)
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/page1" element={<DndProvider backend={HTML5Backend}>  <Users1 />  </DndProvider>} />
          {/* <Route path="/page2" element={<DndProvider backend={HTML5Backend}>  <Users />  </DndProvider>} /> */}
        </Routes>
      </Router>
    </div>
  )  
  }
export default App;
