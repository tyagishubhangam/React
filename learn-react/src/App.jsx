import  Student  from "./Student.jsx";

function App() {
    return(
      <>
      <Student name="John" age={18} isStudent={true}/>
      <Student name="Mona" age={15} isStudent={true}/>
      <Student name="Jacob" age={45} isStudent={false}/>
      <Student name="jenny" age={26} isStudent={true}/>
      <Student />
      </>
    );
};
export default App