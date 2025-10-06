import Student from './Student.jsx'
function App(){
  return(
  <>
  <Student name="Spongebob" age={30} isStudent={false}/>
  <Student name="Wakjira" age={20} isStudent={true}/>
  <Student name="Samuel" age={25} isStudent={true}/>
  </>
  )
}
export default App