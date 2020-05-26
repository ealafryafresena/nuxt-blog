<template>
  <div class="blog-post-item mb-6">
    <div class="blog-post-item-container">
      <div class="blog-post-item-img">
        <img src="/images/adi-goldstein-mDinBvq1Sfg-unsplash.jpg" />
      </div>
      <div class="blog-post-item-content">
        <div class="blog-post-item-text">
          <p class="blog-post-item-published caption mb-1">05-18-2020</p>
          <h2 class="headline mb-2">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr
          </h2>
          <p class="blog-post-item-teaser body-1">
            At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
            kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
            amet.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.blog-post-item {
  width: 392px;
  height: 540px;

  @media (max-width: 800px) {
    width: 364px;
  }

  &-img {
    width: 100%;
    height: 240px;
    background-color: $primaryBase;

    img {
      object-fit: cover;
      width: 100%;
      height: 240px;
    }
  }

  &-published {
    color: $primaryBase;
  }

  &-content {
    width: 100%;
    height: 300px;
    padding: 15px;
    border-left: $primaryLight5 solid 3px;
    border-right: $primaryLight5 solid 3px;
    border-bottom: $primaryLight5 solid 3px;
  }

  &-text {
    height: 170px;
  }

  &-teaser {
    --lh: 2rem;
    line-height: var(--lh);
    --max-lines: 5;
    max-height: calc(var(--lh) * var(--max-lines));
    overflow: hidden;
  }
}
</style>
