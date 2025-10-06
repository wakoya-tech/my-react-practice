import image from './assets/wako.jpg';


function ProfilePicture() {
  const handleClick = (e) => {
    e.target.style.display = "none";
  };

  return (
    <>
      <img onClick={(e)=>handleClick(e)} src={image} alt="profile" />
    </>
  );
}

export default ProfilePicture;
