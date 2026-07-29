export const showErrorPage = (req, res) => {
  res
    .status(404)
    .render("404", { title: "404 - Page Not Found", currentPage: "404" });
};
