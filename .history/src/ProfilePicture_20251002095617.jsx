import image from './assets/wako.jpg';
const name = "wako";

function ProfilePicture() {
  const handleClick = (e) => {
    e.target.style.display = "none";
  };

  return (
    <>
      <img onClick={handleClick} src={image} alt="profile" />
    </>
  );
}

export default ProfilePicture;
