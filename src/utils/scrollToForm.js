/**
 * Scrolls to the nearest form on the page, or navigates to the homepage form.
 * @param {Function|null} navigate - react-router navigate function
 */
export function scrollToForm(navigate) {
  const form = document.querySelector("form");
  if (form) {
    form.scrollIntoView({ behavior: "smooth", block: "center" });
    form.classList.add("ring-2", "ring-[#e71c24]", "ring-offset-2");
    setTimeout(() => {
      form.classList.remove("ring-2", "ring-[#e71c24]", "ring-offset-2");
    }, 2000);
  } else if (navigate) {
    navigate("/?scrollToForm=true");
  }
}
