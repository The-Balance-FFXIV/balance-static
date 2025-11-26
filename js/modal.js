// Open the Modal and display an image
function openModal(img) {
  const modalImg = document.getElementById("modalPic");
  modalImg.src = img.src;
  const modal = document.getElementById("myModal");
  modal.showModal();
  // Don't use a persistent event listener - boosted navigation causes us to get
  // a different modal on every "page".
  modal.addEventListener(
    "close",
    () => (modalImg.src = ""),
    { once: true },
  );
}
