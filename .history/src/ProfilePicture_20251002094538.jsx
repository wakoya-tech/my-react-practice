import image from './assets/wako.jpg';

function ProfilePicture() {
  const handleClick = (e) => {
    e.target.src = image;   // change image source to wako.jpg
  };

  return (
    <>
      <img onClick={handleClick} src="" alt="ProfilePicture" />
    </>
  );
}

export default ProfilePicture;
