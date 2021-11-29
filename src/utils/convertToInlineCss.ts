export default function convertToInlineCss(htmlString: string) {
  const dom = new DOMParser().parseFromString(htmlString, 'text/html')
  // Get all style tags
  dom.querySelectorAll('style').forEach(e => {
    const rule = e.sheet?.cssRules
    if (!rule) return

    for (let i = 0; i < rule?.length || 0; i++) {
      // Get selector and css style
      const [selector, style] =
        rule[i].cssText.match(/(.*){(.*)}/)?.slice(1) || []

      // Apply style to dom
      dom.querySelectorAll<HTMLElement>(selector).forEach(d => {
        d.style.cssText += style
      })
    }
    e.remove()
  })

  return dom.querySelector('body')?.innerHTML || htmlString
}
