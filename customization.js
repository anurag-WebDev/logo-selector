const changeColor = (e) => {
  const isLogoImage = document.getElementById("logo-img");

  let uploadButton = document.getElementById("upload-button");
  let removeButton = document.getElementById("remove-button");
  if (e.target.id === "yellow") {
    uploadButton.style.background = "#f8ce45";
    removeButton.style.background = "#f8ce45";
  } else {
    uploadButton.style.background = e.target.id;
    removeButton.style.background = e.target.id;
  }

  let container = document.getElementById("image-container");
  if (container.children.length > 0) {
    container.innerHTML = " ";
  }
  let img = document.createElement("img");

  img.width = "400";
  img.height = "400";
  img.alt = "umbrella-image";

  // const container = document.getElementById("image-container");
  if (e.target.id === "dodgerblue") {
    img.src = "./images/blue.png";
    img.id = e.target.id;
    container.append(img);
    // console.log(isLogoImage);
    if (isLogoImage) {
      addLogo();
    }
  } else if (e.target.id === "yellow") {
    img.src = "./images/yellow.png";
    img.id = e.target.id;
    container.append(img);
    if (isLogoImage) {
      addLogo();
    }
  } else if (e.target.id === "deeppink") {
    img.src = "./images/pink.png";
    img.id = e.target.id;
    container.append(img);
    if (isLogoImage) {
      addLogo();
    }
  }
};

const addLogo = () => {
  document.getElementById("image-container").style.display = "none";
  document.getElementById("loader").style.display = "flex";
  document.getElementById("loader").style.placeContent = "center";
  document.getElementById("loader").style.padding = "5rem";
  setTimeout(() => {
    document.getElementById("loader").style.display = "none";
    document.getElementById("image-container").style.display = "block";
    let file = input.files;
    const logo = document.createElement("img");
    logo.className = "centered";
    logo.width = "60";
    logo.height = "60";
    logo.src = URL.createObjectURL(file[0]);
    logo.id = "logo-img";

    const imgToHaveLogo = document.getElementById("image-container");
    imgToHaveLogo.append(logo);
    let buttonText = document.getElementById("upload-button");
    buttonText.style.justifyContent = "center";
    buttonText.style.alignItems = "center";
    buttonText.style.fontSize = "larger";
    buttonText.style.color = "white";
    buttonText.innerText = file[0].name;
    let inputFile = document.getElementById("get-file");
    inputFile.style.display = "none";
    inputFile.style.margin = "-10px";
    let removeButton = document.getElementById("remove-button");
    removeButton.style.display = "block";
  }, 1000);
};

const removeLogo = () => {
  const imgToHaveLogo = document.getElementById("logo-img");
  imgToHaveLogo.remove();
  location.reload();
};
