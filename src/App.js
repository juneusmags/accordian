import Questions from './components/Questions';
import 'bootstrap/dist/css/bootstrap.min.css';
import data from "./data";
import { useState } from 'react';
function App() {
  const [questions, setQuestions] = useState(data)
  return (
    <>
      <div className = "d-flex justify-content-around">
        
          <h1>Questions And Answers About Login</h1>
          <div>
            {questions.map((question)=>{
              return(
                <div>
                  <Questions key = {question.id } {...question} />
                </div>
              )
            })}
        </div>
          
        
      </div>
    </>
  );
}

export default App;
