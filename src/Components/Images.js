
import Image3 from './images/image-3.jpg';
import Image4 from './images/image-4.jpg';
import Image5 from './images/image-5.svg';
import Image6 from './images/image-6.jpg';
import Image7 from './images/image-7.jpg';

function Images(props) {
  let image;
  switch (props.id) {
    case 3:
      image = Image3;
      break;
    case 4:
      image = Image4;
      break;
    case 5:
      image = Image5;
      break;
    case 6:
      image = Image6;
      break;
    case 7:
      image = Image7;
      break;
    default:
      image = null; // Handle default case here
  }

  return (
    <img src={image} alt={props.title} />
  );
}

// [Image1,Image2,Image3,Image4,Image5,]
export default Images;