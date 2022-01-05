const getAllImages = async () => {
  try {
    const response = await fetch("/api/", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    return await response.json();
  } catch (err) {
    return [];
  }
};

const getImageById = async (id) => {
  try {
    const response = await fetch(`/api/show/${id}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    return await response.json();
  } catch (err) {
    return {};
  }
};

const postImage = async (image) => {
  try {
    const response = await fetch("/api/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(image),
    });
    return await response.json();
  } catch (err) {
    return {};
  }
};

const deleteImage = async (id) => {
  try {
    const response = await fetch(`/api/delete/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
    return await response.json();
  } catch (err) {
    return {};
  }
};

const updateImage = async (id, image) => {
  try {
    const response = await fetch(`/api/${id}/edit`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(image),
    });
    return await response.json();
  } catch (err) {
    return {};
  }
};

export { getAllImages, getImageById, postImage, deleteImage, updateImage };
