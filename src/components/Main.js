import "../App.css";
import { useState, useEffect } from "react";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
} from "firebase/storage";
import { storage } from "./firebase";
import { v4 } from "uuid";

function Main() {
  const [imageUpload, setImageUpload] = useState(null);
  const [imageUrls, setImageUrls] = useState([]);

  const imagesListRef = ref(storage, "images/");
  const uploadFile = () => {
    if (imageUpload == null) return;
    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageUrls((prev) => [...prev, url]);
      });
    });
  };

  useEffect(() => {
    listAll(imagesListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageUrls((prev) => [...prev, url]);
        });
      });
    });// eslint-disable-next-line
  }, []);

  return (
    <div className="App">
        <div className="mainSection">
            <div className="subSection">
            <input
                className="btn"
                type="file"
                onChange={(event) => {
                setImageUpload(event.target.files[0]);
                }}
            /> <br/>
            <button className="btn btn-primary" onClick={uploadFile}> Upload Image</button>
            </div>
        </div>

        <div className="mainSection">
            {imageUrls.map((url) => {
            return <div>
                <div className="subSection">
                <img src={url} alt={"pic"}/>
            </div>
            </div> ;
            })}
        </div>
    </div>
  );
}

export default Main;
