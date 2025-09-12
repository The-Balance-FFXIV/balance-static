const anchors = document.querySelectorAll("nav#TableOfContents ul a")
const headers = document.querySelectorAll(".markdown h1, .markdown > h1")
const subheaders = document.querySelectorAll(".markdown h2, .markdown > h2")

// elements for mobile TOC toggle
const tocToggle = document.getElementById('toc-toggle')
const tocNav = document.getElementById('TableOfContents')
const expandIcon = document.getElementById('toc-expand')
const collapseIcon = document.getElementById('toc-collapse')
const toc = document.querySelector('.table-of-contents-container')

// defaults to collapsed state on mobile, contains collapse function
function collapseTOC() {
  if (tocNav && tocNav.classList.contains('toc-expanded')) {
    tocNav.classList.remove('toc-expanded')
    if (expandIcon && collapseIcon) {
      expandIcon.classList.remove('hidden')
      collapseIcon.classList.add('hidden')
    }
  }
}

// contains expand function for mobile TOC
function expandTOC() {
  if (tocNav && !tocNav.classList.contains('toc-expanded')) {
    tocNav.classList.add('toc-expanded')
    if (expandIcon && collapseIcon) {
      expandIcon.classList.add('hidden')
      collapseIcon.classList.remove('hidden')
    }
  }
}

// expands or collapses the TOC when pressing the button
if (tocToggle && tocNav) {
  tocToggle.addEventListener('click', function(click) {
    click.stopPropagation()
    const expanded = tocNav.classList.contains('toc-expanded')

    if (expanded) {
      collapseTOC()
    } else {
      expandTOC()
    }
  })
  
  // resets TOC state if the window is resized to desktop size
  window.addEventListener('resize', function() {
    if (window.innerWidth >= 1024) {
      if (tocNav.classList.contains('toc-expanded')) {
        collapseTOC()
      }
    }
  })
}

function findCurrentHeader(headers) {
  let bestHeader = null
  let bestTop = Number.NEGATIVE_INFINITY

  for (const header of headers) {
    const top = header.getBoundingClientRect().top
    if (top < window.innerHeight / 2 && top > bestTop) {
      bestHeader = header
      lowestTop = top
    }
  }

  return bestHeader
}

// callback that detects and highlights which header is currently "active"
const observerCallback = () => {
  // Deactivate all anchors
  for (const anchor of anchors) {
    anchor.classList.remove("active")
    anchor.classList.remove("parent-active")
    const next = anchor.nextElementSibling

    if (next && next.tagName === "UL") {
      next.classList.remove("active")
    }
  }

  // treat h2 as main headers if no h1s exist (BIS pages)
  const headerList = headers.length > 0 ? headers : subheaders
  const currentHeader = findCurrentHeader(headerList) || headerList[0]
  const activeHeader = currentHeader || headerList[0]
  if (!activeHeader) { return }

  let currentSubheader = null
  
  // check for h2 subheaders when h1 headers exist
  if (headers.length > 0 && currentHeader) {
    const subheaders = []
    let sibling = currentHeader.nextElementSibling

    while (sibling && sibling.tagName !== "H1") {
      if (sibling.tagName === "H2") {
        subheaders.push(sibling)
      }
      sibling = sibling.nextElementSibling
    }

    currentSubheader = findCurrentHeader(subheaders)
  }

  for (const header of [activeHeader, currentSubheader]) {
    if (header != null) {
      const anchor = document.querySelector(`a[href="#${header.id}"]`)
      if (!anchor) continue // Skip if anchor not found
      
      const next = anchor.nextElementSibling
      
      anchor.classList.add("active")
      
      // keeps header active when subheader is currently active in the TOC
      let parentLi = anchor.closest('li').parentElement?.closest('li')
      while (parentLi) {
        const parentAnchor = parentLi.querySelector('a')
        if (parentAnchor) {
          parentAnchor.classList.add("parent-active")
        }
        parentLi = parentLi.parentElement?.closest('li')
      }
  
      if (next && next.tagName === "UL") {
        // Hugo generates empty lists for some reason, ignore those
        if (next.children.length > 0 && next.children[0].children.length > 0) {
          next.classList.add("active")
        }
      }
    }
  }
}

// needed with observer in the next function to determine which header is currently in view
const opts = {
	root: null,
	rootMargin: "0px",
}

const observer = new IntersectionObserver(observerCallback, opts)
headers.forEach(header => observer.observe(header))
subheaders.forEach(header => observer.observe(header))

// when the page loads, select an appropriate header as active
// this is mainly to avoid having no active header when the page freshly loads
function setActiveHeader() {
  // collects all headers to feed to findCurrentHeader to determine what is in view
  const headerList = headers.length > 0 ? headers : subheaders
  if (headerList.length === 0) return
  
  // find what header is in view at page load (in case of refresh or direct link)
  const currentHeader = findCurrentHeader(headerList)
  
  // exits early if a header was found (it will return null if user is at very top of page)
  // not doing this would cause the first header to be active at page load even if another one is active
  if (currentHeader) {
    return
  }
  
  // if findCurrentHeader returns null (top of page/fresh page load), sets first header as active
  const firstHeader = headerList[0]
  const firstAnchor = document.querySelector(`a[href="#${firstHeader.id}"]`)
  
  if (firstAnchor) {
    firstAnchor.classList.add("active")
    
    // nested UL handling
    const next = firstAnchor.nextElementSibling
    if (next && next.tagName === "UL") {
      if (next.children.length > 0 && next.children[0].children.length > 0) {
        next.classList.add("active")
      }
    }
  }
}

// set active header on page load
window.addEventListener('load', function() {
  setActiveHeader()
})

// detects when the TOC is in a "stuck" position on mobile and adds a class for styling
function detectMobileRestyle() {
  const toc = document.querySelector('.table-of-contents-container')
  if (!toc) return

  let sticky = false
  function restyleCheck() {
    // if screen viewport is lg+, remove any mobile sticky class and exit
    if (window.innerWidth > 1024) {
      if (sticky) {
        toc.classList.remove('stuck-mobile')
        sticky = false
      }
      return
    }
    
    // get current position of the TOC container relative to viewport
    const tocPos = toc.getBoundingClientRect()
    const computedStyle = window.getComputedStyle(toc)
    
    // get what value the toc should be stuck at, default to top-12 if not found
    const expectedTop = parseInt(computedStyle.top) || 48

    // determines that stuck-mobile should be applied if within 10px of expected top position
    const shouldSticky = Math.abs(tocPos.top - expectedTop) <= 10
    
    if (shouldSticky && !sticky) {
      toc.classList.add('stuck-mobile')
      sticky = true
    } else if (!shouldSticky && sticky) {
      toc.classList.remove('stuck-mobile')
      sticky = false
    }
  }

  // check restyle necessity on scroll
  function onScroll() {
    requestAnimationFrame(restyleCheck)
  }

  window.addEventListener('scroll', onScroll, { passive: true })
  
  // check restyle necessity on page resize
  let resizeTimeout
  function onResize() {
    
    // check restyle necessity after a short delay to avoid excessive calls
    clearTimeout(resizeTimeout)
    resizeTimeout = setTimeout(() => {
      requestAnimationFrame(restyleCheck)
    }, 100)
  }
  
  window.addEventListener('resize', onResize, { passive: true })

  // first check on load
  restyleCheck()
}

// starts the restyle detection after DOM is loaded
document.addEventListener('DOMContentLoaded', detectMobileRestyle)
