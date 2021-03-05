export function toggleOverlay(bool, updateFn) {
  let x = !bool;
  const title = document.getElementsByClassName(`title--gallery`)[0];
  const eye = document.getElementsByClassName('eye')[0];
  const vid = document.getElementsByClassName('fsvid')[0];
  const overlay = document.getElementsByClassName('overlay')[0];
   
  switch(x) {
    case false:
        vid.classList.add("fsvid--toFront");
        overlay.classList.add("hide");
        title.classList.add("hide");
        eye.children[0].classList.remove("fa-eye");
        eye.children[0].classList.add("eye__icon--slash");
        eye.children[0].classList.add("fa-eye-slash");
    break;

    case true:
    default:
      vid.classList.remove("fsvid--toFront");
      overlay.classList.remove("hide");
      title.classList.remove("hide");
      eye.children[0].classList.remove("eye__icon--slash", "fa-eye-slash");
      eye.children[0].classList.add("fa-eye");
  }   
  updateFn(!bool);
}