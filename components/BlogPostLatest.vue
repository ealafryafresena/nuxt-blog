<template>
  <div class="blog-post-latest">
    <div class="blog-post-latest-container">
      <div class="blog-post-latest-img">
        <img src="/images/kevin-ku-w7ZyuGYNpRQ-unsplash.jpg" />
      </div>
      <div class="blog-post-latest-content">
        <p class="blog-post-latest-published caption mb-1">05-18-2020</p>
        <h2 class="display-1 mb-3">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr
        </h2>
        <p class="blog-post-latest-teaser title">
          At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
          kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
          amet. Duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus est.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.blog-post-latest {
  width: 100%;
  height: 340px;

  @media (max-width: 600px) {
    display: flex;
    flex-wrap: wrap;
    height: 600px;
  }

  h2 {
    color: $greyDark4;
  }

  &-published {
    color: $primaryBase;
  }

  &-container {
    display: flex;

    @media (max-width: 600px) {
      display: block;
    }
  }

  &-img {
    width: 44%;
    height: 340px;
    background-color: $primaryBase;

    @media (max-width: 600px) {
      height: 180px;
      width: 100%;
    }

    img {
      object-fit: cover;
      width: 100%;
      height: 340px;

      @media (max-width: 600px) {
        height: 180px;
      }
    }
  }

  &-content {
    width: 56%;
    height: 340px;
    padding: 25px;
    border-top: $primaryLight5 solid 3px;
    border-right: $primaryLight5 solid 3px;
    border-bottom: $primaryLight5 solid 3px;

    @media (max-width: 600px) {
      width: 100%;
      height: 420px;
      border-top: none;
      border-left: $primaryLight5 solid 3px;
    }
  }

  &-teaser {
    color: $greyDark2;
    --lh: 2rem;
    line-height: var(--lh);
    --max-lines: 4;
    max-height: calc(var(--lh) * var(--max-lines));
    overflow: hidden;
  }
}
</style>
