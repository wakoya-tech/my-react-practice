import image from './assets/wako.jpg';

function ProfilePicture() {
  const handleClick = (e) => {
    e.target.src = image;   // change image to wako.jpg
  };

  return (
    <>
      <img onClick={handleClick} src="" alt="Profile" />
    </>
  );
}

export default ProfilePicture;
