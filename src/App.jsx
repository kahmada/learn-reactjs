import Background from "./componements/background/back";

const App = () => {
  let heData = [
    {text1:"Dive into", text2:"What You Love"},
    {text1:"Indulge", text2:"Your Passions"},
    {text1:"Give In To", text2:"Your Passions"},
  ]
  const[hrCount,sethr] = userState(0);
  const[playStatus,setPlayStatus]= useState(true);

  return(
    <div>
        <Background playStatus={playStatus} hrCount = {hrCount}/>
    </div>
  )
}
export default App
