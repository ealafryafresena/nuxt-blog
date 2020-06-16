---
title: Magna aliquyam erat, sed diam voluptua
subline: Consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.
image: images/fabian-grohs-XMFZqrGyV-Q-unsplash.jpg
published: 06/13/2020
caption: Photo by Fabian Grohs on Unsplash
category: Sanctus
---

##### At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.

### Stet clita kasd gubergren

Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.

```js
export default {
  components: {
    HeaderHero
  },
  async asyncData({ $content, params }) {
    const post = await $content(`posts/${params.slug}`).fetch()
    return {
      post
    }
  }
}
```

### Stempor invidunt ut labore

Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
