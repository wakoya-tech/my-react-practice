import image from './assets/wako.jpg'
function ProfilePicture(){
const handleClick =(e)=>e.target.alt="wako";
return(
    <>
<img onClick={handleClick(e)} src={image} alt="ProfilePicture" />
    </>
)
}
export default ProfilePicture