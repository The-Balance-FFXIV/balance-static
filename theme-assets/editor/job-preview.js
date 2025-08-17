const renderGuideContainer = function (body, ...children) {
  return h(
    "div",
    { class: "space-y-16" },
    h(
      "div",
      { class: "responsive-container" },
      h(
        "div",
        { class: "job-guides-container" },
        h("div", { class: "markdown max-w-none" }, body)
      ),
      ...children
    )
  );
};

const renderBisList = function (bis) {
  const bisList = bis;

  return h(
    "div", {}, bisList.map(function (bis, indexer) {
        const name = h("h2", {}, bis.name);
        const type = bis.type;
        const link = bis.link;
        const description = h("p", {}, bis.description);
        const bisFrame =
          type != "plaintext"
            ? h("div", { class: "h-96" }, h("iframe", {
                src: 
                  type === "etro" ? `https://etro.gg/embed/gearset/${link}` : 
                  link,
                class: "w-full h-full",
              }))
              : link;

        return h(
          "div",
          { key: indexer, id: `bis-preview-${indexer}`, },
          name,
          bisFrame,
          description,
        );
      })
    )
};

const renderAuthorList = function (authors) {
  let authorList = authors ?? [];
  return h(
    "div",
    { class: "job-guides-container markdown" },
    h("h1", {}, "Authors"),
    h(
      "ul",
      {},
      authorList.map(function (author) {
        return h("li", {}, author);
      })
    )
  );
};

let GenericJobGuide = createClass({
  render: function () {
    const authors = this.props.entry.getIn(["data", "authors"]);

    return renderGuideContainer(
      this.props.widgetFor("body"),
      h("hr", {}),
      renderAuthorList(authors)
    );
  },
});

let bisSetTemplate = createClass({
  render: function () {
    const bis = this.props.entry.getIn(["data", "bis"]);
    const bisList = typeof bis.toJS === "function" ? bis.toJS() : bis;

    return renderGuideContainer(
      renderBisList(bisList)
    );
  },
});
