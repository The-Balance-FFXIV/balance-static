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
  const bisEntries = bis;

  return h(
    "div", {}, bisEntries.map(function (bis, indexer) {
      // Sort bis frontmatter fields into variables and prep for rendering
      const name = h("h2", {}, bis.name);
      const type = bis.type;
      let description = h("p", {}, bis.description);
      let link = bis.link;
      
      // Create embed element and check for input errors based on type
      let bisFrame;
      let errorDetection = false; // Hides description if link or link type validation fails
      switch(type) {
        case "plain-text":
        case "genericlink":
          bisFrame = link; // both of these types do not require an iframe
          break;
        case "xivgear": // check for embed link before creating iframe
          const isEmbed = String(link).includes("embed");
          errorDetection = !isEmbed;
          bisFrame = isEmbed
            ? h("div", { class: "xivgear-iframe-height" }, h("iframe", { src: link, class: "w-full h-full" }))
            : h("p", {}, "This XIVGear link does not appear to be an embed link. Please check the link.");
          break;
        case "etro": // extract ID from link to create embed link
          const etroLink = link.match(/\/gearset\/([A-Za-z0-9-]+)(?:[?#]|$)/i);
          link = etroLink ? `https://etro.gg/embed/gearset/${etroLink[1]}` : link;
          bisFrame = h("div", { class: "etro-iframe-height" }, h("iframe", {
            src: link,
            class: "w-full h-full"
          }));
          break;
        default: {
          const checkTypeError = String(link).includes("xivgear") || String(link).includes("etro");
          errorDetection = checkTypeError;
          bisFrame = !checkTypeError
            ? h("div", { class: "h-96" }, h("iframe", { src: link, class: "w-full h-full" }))
            : h(
                "div",
                {},
                h("p", {}, "You currently have either an Etro link or a XIVGear link in the link field with an improper link type selected for that type of link (e.g. genericiframe)."),
                h("p", {}, "Please double-check that the type selection matches what type of link you are using, or consider the use of the genericlink / plain-text type if you do not want an embed.")
              )
          break;
        }
      }
      return h(
        "div",
        { key: indexer, id: `bis-preview-${indexer}`, },
        name,
        bisFrame,
        description = errorDetection ? null : description,
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
    const rawBis = this.props.entry.getIn(["data", "bis"]);
    const bis = typeof rawBis.toJS === "function" ? rawBis.toJS() : rawBis;

    return renderGuideContainer(
      renderBisList(bis)
    );
  },
});
