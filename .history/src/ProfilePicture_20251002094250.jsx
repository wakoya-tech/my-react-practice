import image from './assets/wako.jpg';

function ProfilePicture() {
  const handleClick = (e) => {
    e.target.alt = "wako";   // better to change alt text, not textContent
  };

  return (
    <>
      <img onClick={handleClick} src={image} alt="ProfilePicture" />
    </>
  );
}

export default ProfilePicture;
