import React, { useState } from 'react'
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { app } from './firebase/firebaseConfig';
export default function App() {
  const [image, setImage] = useState("")
  // function upload image
  const handleUploadImage = () => {

    const storage = getStorage(app);
    const storageRef = ref(storage, `images/${image.name}`);

    const uploadTask = uploadBytesResumable(storageRef, image);

    // Register three observers:
    // 1. 'state_changed' observer, called any time the state changes
    // 2. Error observer, called on failure
    // 3. Completion observer, called on successful completion
    uploadTask.on('state_changed',
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        switch (snapshot.state) {
          case 'paused':
            console.log('Upload is paused');
            break;
          case 'running':
            console.log('Upload is running');
            break;
        }
      },
      (error) => {
        // Handle unsuccessful uploads
        console.log("lỗi", error);
      },
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log('File available at', downloadURL);
        });
      }
    );
  }
  // function lấy giá trị ảnh cần đưa lên firebase
  const handleChangeImage = (e) => {
    // console.log("111111", e.target.files[0]);
    setImage(e.target.files[0])
  }
  return (
    <div>
      <h1>Fire Base</h1>
      <input
        type="file"
        onChange={() => handleChangeImage(event)}
      />
      <button onClick={handleUploadImage}>Click</button>
    </div>
  )
}
