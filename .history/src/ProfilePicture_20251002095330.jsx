import image from './assets/wako.jpg';
const name = "wako";

function ProfilePicture() {
  const handleClick = (e) => {
    e.target.alt = name;   // change alt text to "wako"
  };

  return (
    <>
      <img onClick={handleClick} src={image} alt=" " />
    </>
  );
}

export default ProfilePicture;
