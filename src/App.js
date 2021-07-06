import logo from './logo.svg';
import './App.css';
import Profile from "./profile/Profile";
import profileImage from "./Photo.jpeg";


function App() {
  let name = "Mahmoud Zaouchi";
  let bioM = "I am 27";
  let proff = "Developper";

  function handleName(){
    alert(`The profile of : ${name}`);
  }
   
  return (
          
    <div>
      <Profile fullName = {name}  bio={bioM} profession={proff} handleName={handleName}> <img src={profileImage} alt="" style={{width:"300px",height:"400px"}} /> </Profile>
    </div>
  );
}

export default App;
