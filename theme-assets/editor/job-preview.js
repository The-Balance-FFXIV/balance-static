function textStyling(content) {
  const frontmatter = String(content ?? "")
    .split(/\r?\n\s*\r?\n+/g) // split on one or more blank lines
    .map(s => s.trim())
    .filter(Boolean);

  const hasMarked = typeof window !== "undefined" && window.marked && typeof window.marked.parse === "function";
  const hasPurify = typeof window !== "undefined" && window.DOMPurify && typeof window.DOMPurify.sanitize === "function";

  return frontmatter.map((p, index) => {
    const html = hasMarked ? window.marked.parse(p) : text;
    const safe = hasPurify ? window.DOMPurify.sanitize(html) : html;
    return h("div", { key: index, class: "markdown", dangerouslySetInnerHTML: { __html: safe } });
  });
}

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
      // sort bis frontmatter fields into variables and prep for rendering
      const name = h("h2", {}, bis.name);
      const type = bis.type;
      const linkString = typeof bis.link === "string" ? bis.link : "";
      const isLink = /^https?:\/\//i.test(linkString);
      let description = textStyling(bis.description);

      // create embed element and check for input errors
      let bisFrame;
      let errorDetection = false; // hides description if validation fails

      switch(type) {
        case "plain-text":
        case "genericlink":
          bisFrame = linkString; // both of these types do not require an iframe
          break;

        case "xivgear": // check for embed link before creating iframe
          const isEmbed = linkString.includes("embed");
          const isXIVGear = linkString.includes("xivgear");
          errorDetection = !isEmbed || !isXIVGear || !isLink;
          bisFrame = isEmbed && isXIVGear && isLink
            ? h("div", { class: "xivgear-iframe-height" }, h("iframe", { src: linkString, class: "w-full h-full" }))
            : h("p", {}, "This XIVGear link does not appear to be a valid embed link. Please check the link.");
          break;

        case "etro": // extract ID from link to create embed link
          const etroId =
            linkString.match(/\/gearset\/([A-Za-z0-9-]+)(?:[?#]|$)/i)?.[1] ||
            (!isLink && linkString ? linkString : null);
          const etroLink = etroId ? `https://etro.gg/embed/gearset/${etroId}` : linkString;
          errorDetection = !etroLink;
          bisFrame = etroLink
            ? h("div", { class: "etro-iframe-height" }, h("iframe", { src: etroLink, class: "w-full h-full" }))
            : h("p", {}, "Please enter a link to the link field.");
          break;

        default: {
          const checkTypeError = linkString.includes("xivgear") || linkString.includes("etro");
          errorDetection = checkTypeError || !isLink;
          bisFrame = !checkTypeError && isLink
            ? h("div", { class: "h-96" }, h("iframe", { src: linkString, class: "w-full h-full" }))
            : h(
                "div",
                {},
                h("p", {}, "An error occurred with the link provided. The link is either invalid, missing, or you are attempting to use Etro/XIVGear links with the wrong type selected."),
                h("p", {}, "Please double check that the link field is not empty, and that the correct link type is selected. Use genericlink or plaintext if you only want a raw text link.")
              )
          break;
        }
      }

      description = errorDetection // append a line break to the description or hide it if link errors exist
        ? null
        : (description.length && type !== "plain-text" // ensures no break appears for empty descriptions
            ? [h("br", {}), description]
            : description);

      return h( // render all bis entries
        "div",
        { key: indexer, id: `bis-preview-${indexer}`, },
        name,
        bisFrame,
        description,
        h("hr", {})
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

const renderFaq = function (qna) {
  let faqEntries = qna ?? [];
  return h(
    "div", {}, faqEntries.map(function (qna, index) {
      const answerStyled = textStyling(qna.answer);
      return h("div", { key: index, class: "faq-entry" },
        h("h2", {}, qna.question),
        ...answerStyled
      );
    })
  );
}

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
    const bis = rawBis?.toJS?.() ?? rawBis ?? [];

    return renderGuideContainer(
      renderBisList(bis)
    );
  },
});

let faqTemplate = createClass({
  render: function () {
    const rawFaq = this.props.entry.getIn(["data", "qna"]);
    const faq = rawFaq?.toJS?.() ?? rawFaq ?? [];

    return renderGuideContainer(
      renderFaq(faq)
    );
  },
});
