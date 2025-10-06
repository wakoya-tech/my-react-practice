import image from './assets/wako.jpg';
const name = "wako";

function ProfilePicture() {
  const handleClick = (e) => {
    e.target.alt = wako;   // change image to wako.jpg
  };

  return (
    <>
      <img onClick={handleClick} src={image} alt=" " />
    </>
  );
}

export default ProfilePicture;
