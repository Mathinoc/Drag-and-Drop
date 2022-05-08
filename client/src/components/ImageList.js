import React, { useRef } from "react";
import { useDrag, useDrop } from "react-dnd";

const type = "Image";

function Image({ image, index, moveImage }) {
  const ref = useRef(null);
  const [, drop] = useDrop({
    accept: type,
    hover(item) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;
      if (dragIndex === hoverIndex) {
        return;
      }
      moveImage(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag] = useDrag(() => ({
    type: type,
    item: { id: image.id, index },
    collect: (monitor) => {
      return {
        isDragging: monitor.isDragging(),
      };
    },
  }));

  drag(drop(ref));

  return (
    <div
      ref={ref}
      style={{ opacity: isDragging ? 0 : 1 }}
      className="file-item"
    >
      <img alt={`img - ${image.id}`} src={image.src} className="file-img" />
    </div>
  );
}

export default function ImageList({ images, moveImage }) {
  const renderImage = (image, index) => {
    return image ? (
      <Image
        image={image}
        index={index}
        key={`${image.id}-image`}
        moveImage={moveImage}
      />
    ) : null;
  };

  return <section className="file-list">{images.map(renderImage)}</section>;
}
