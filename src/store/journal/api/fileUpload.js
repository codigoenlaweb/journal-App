export const fileUpload = async (file) => {
    const cloudURL = `https://api.cloudinary.com/v1_1/dht8n0mvx/upload`;
    const formData = new FormData();
    formData.append("upload_preset", "react-jounal");
    formData.append("file", file);
  
    try {
      const resp = await fetch(cloudURL, {
        method: "POST",
        body: formData,
      });
      if (!resp.ok) throw new Error("No se pudo subir imagen"); // if not ok return error
      const cloudResp = await resp.json(); // response from resp
      return cloudResp.secure_url; // return URLS of photo
    } catch (error) {
      console.log(error);
      throw new Error(error.message);
    }
  };