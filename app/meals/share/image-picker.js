"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import classes from "./image-picker.module.css";

export default function ImagePicker({ label, name, dValue }) {
  const [image, setImage] = useState();
  const imageInput = useRef();
  function hanldeImgInput() {
    imageInput.current.click();
  }

  function hanldeImgPreview(event) {
    const file = event.target.files[0];
    if (!file) {
      setImage(null);
      return;
    }
    const fileReader = new FileReader();
    fileReader.onload = () => setImage(fileReader.result);
    fileReader.readAsDataURL(file);
  }

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <input
          className={classes.input}
          type="file"
          accept="image/jpeg, image/png"
          name={name}
          id={name}
          ref={imageInput}
          onChange={hanldeImgPreview}
          defaultValue={dValue}
        />
        <div className={classes.preview}>
          {image && <Image src={image} alt={"Your picked Image"} fill />}
          {!image && <p>No picked image yet.</p>}
        </div>
        <button
          className={classes.button}
          type="button"
          onClick={hanldeImgInput}
        >
          Pick an image
        </button>
      </div>
    </div>
  );
}
