import ImageShow from "./ImageShow";
import './ImageList.css';

function ImageList({images}){
    const renderedImage = images.map((image) => {
        return ( <div key= {image.id}>
        <ImageShow className='img' image = {image} />
        </div>
        );
    });

    return <div className="image-list">{renderedImage}</div>
}

export default ImageList;