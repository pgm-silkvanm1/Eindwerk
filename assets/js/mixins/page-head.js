import HTMLDecoderEncoder from 'html-encoder-decoder'

/**
 * Parses the 'head_tags' property from the rest response
 * into the head tags.
 */

export default {
  head() {
    if (this.page && this.page.head_tags) {
      const tags = {
        meta: [],
        link: [],
      }

      this.page.head_tags.forEach((item) => {
        if (tags[item.tag]) {
          tags[item.tag].push({ ...item.attributes })
        }
      })

      const titleTag = this.page.head_tags.find((t) => t.tag == 'title')

      let pageTitle = this.page.title
      if (typeof pageTitle === 'object' && pageTitle.rendered) {
        pageTitle = pageTitle.rendered
      }

      const title = titleTag ? titleTag.content : pageTitle

      return {
        title: HTMLDecoderEncoder.decode(title),
        ...tags,
      }
    }
  },
}
