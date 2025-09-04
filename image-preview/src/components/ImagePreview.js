import React, { useState } from "react";
import HiddenImageDiv from "./HiddenImageDiv";
const ImagePreview = (props) => {

  const [images, setImages] = useState([...props.images]);
  { console.log(images) }

  const toggleVisibility = ({ image }) => {
    const updatedImages = images.map((img) =>
      image.id === img.id ? { ...img, visible: !img.visible } : img
    );
    setImages(updatedImages);
  }


  return (
    <div className="layout align-items-center mt-100">
      <div className="card ma-20 pa-50">
        <section>
          <div
            className="layout-row justify-content-around"
            data-testid="images-div"
          >
            {images?.map((image) => (
              image?.visible ?
                (<img key={image.id} src={image.src} height={200} width={300} alt={image.alt} onClick={() => toggleVisibility({ image })}
                />
                ) : (<HiddenImageDiv key={image.key} onClick={() => toggleVisibility({ image })} />)
            ))}
          </div>
        </section>
        <section className="card-actions justify-content-center" >
          <button data-testid="show-all-btn" onClick={() => {
            const updatedImages = images.map((img) => ({ ...img, visible: true }));
            setImages(updatedImages);
          }} >Show all</button>
          <button className="danger" data-testid="hide-all-btn" onClick={() => {
            const updatedImages = images.map(img => ({ ...img, visible: false }));
            setImages(updatedImages);
          }}
          >
            Hide all
          </button>
        </section>
      </div>
    </div>
  );
};

export default ImagePreview;
