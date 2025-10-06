import image from './assets/wako.jpg'
function ProfilePicture(){
const handleClick =()=console.log("wako");
return(
    <>
<img onClick={handleClick} src={image} alt="ProfilePicture" />
    </>
)
}
export default ProfilePicture