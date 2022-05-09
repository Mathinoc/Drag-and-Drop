import React from "react";
import { useDropzone } from "react-dropzone";

export default function Dropzone({ onDrop, accept }) {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    // accept,
  });
  return (
    <div className="dropzone-div" {...getRootProps()}>
      <input className="dropzone-input" {...getRootProps()} />
      <div className="text-center">
        {isDragActive ? (
          <p className="dropzone-content">Release to drop the files here</p>
        ) : (
          <p className="dropzone-content">
            Drag and drop some files here or click to select files
          </p>
        )}
      </div>
    </div>
  );
}
