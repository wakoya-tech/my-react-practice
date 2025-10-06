import image from './assets/wako.jpg'
function ProfilePicture(){
const handleClick =(e)=>e.target.textContent="wako";
return(
    <>
<img onClick={handleClick} src={image} alt="ProfilePicture" />
    </>
)
}
export default ProfilePicture