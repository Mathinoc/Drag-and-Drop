import React, { useCallback, useState } from "react";
import cuid from "cuid";
import "./App.css";

import Dropzone from "./components/Dropzone";
import ImageList from "./components/ImageList";

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import update from "immutability-helper";


export default function App() {
  const [images, setImages] = useState([]);
  
  const moveImage = (dragIndex, hoverIndex) => {
    const draggedImage = images[dragIndex];
    setImages(
      update(images, {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, draggedImage],
        ],
      })
    );
  };

  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.map((file) => {
      const reader = new FileReader();
      reader.onload = function (event) {
        setImages((prev) => [
          ...prev,
          { id: cuid(), src: event.target.result },
        ]);
      };
      reader.readAsDataURL(file);
      return file;
    });
  }, []);

  return (
    <main className="App">
      <h1 className="text-center">Drag and Drop Example</h1>
      {/* {'application/pdf', image/*} to allow both pdf and image files */}
      <Dropzone onDrop={onDrop} accept={"image/png"} />
      <DndProvider backend={HTML5Backend}>
        <ImageList images={images} moveImage={moveImage} />
      </DndProvider>
    </main>
  );
}
