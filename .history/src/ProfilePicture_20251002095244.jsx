import image from './assets/wako.jpg';
const name = "wako";

function ProfilePicture() {
  const handleClick = (e) => {
    e.target.src = image; // changes the image to wako.jpg
  };

  return (
    <>
      <img onClick={handleClick} src="" alt=" " />
    </>
  );
}

export default ProfilePicture;
