import PropTypes from "prop-types";

function Profile({fullName, bio, profession,handleName,children}){
    
    return(

        <div style={{borderStyle:"solid",borderColor:"green",borderRadius:"30px",width:"350px",height:"700px",margin:"auto",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
            {children}
            <h1 style={{color:"darkgreen"}} >{fullName}</h1>
            <h2 style={{color:"green"}}>{bio}</h2>
            <h3 style={{color:"gray"}}>{profession}</h3>
            <button onClick={handleName} style={{backgroundColor:"green",color:"darkgrey",fontSize:"large",fontWeight:"bold"}}>Send</button>

        </div>
    )
}


export default Profile;


Profile.defaultProps = {
    fullName : "COVID",
    bio : "COVID",
    profession : "COVID",
    handleName : function handleName(){alert("Covid")}
};

Profile.propTypes = {
    fullName : PropTypes.string,
    bio : PropTypes.string,
    profession : PropTypes.string,
    handleName : PropTypes.func
};


