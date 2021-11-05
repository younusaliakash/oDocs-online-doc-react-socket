import {
  BrowserRouter as Router, Navigate, Route, Routes
} from "react-router-dom";
import { v4 as uuidV4 } from "uuid";
import TextEditor from './Components/TextEditor/TextEditor';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to={`/document/${uuidV4()}`}/>}/>
        <Route path="/document/:id" element={<TextEditor/>} /> 
      </Routes>
    </Router>
  );
}

export default App;
