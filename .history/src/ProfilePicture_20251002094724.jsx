import image from './assets/wako.jpg';

function ProfilePicture() {
  const handleClick = (e) => {
    e.target.src.textContent = "wako";   // change image source to wako.jpg
  };

  return (
    <>
      <img onClick={handleClick} src={image} alt="" />
    </>
  );
}

export default ProfilePicture;
