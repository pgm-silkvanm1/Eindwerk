<template>
  <div class="member-wrap">
    <div class="member" :style="memberStyles">
      <div class="member__content p-3">
        <div class="h3">{{ name }}</div>
        <div class="member__jobtitle">{{ jobtitle }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    image: String,
    jobtitle: String,
  },
  computed: {
    memberStyles() {
      return {
        'background-image': `url(${this.imageStyle(this.image, 'square')})`,
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.member-wrap {
  @include aspect-ratio(4, 5);
}
.member {
  background-color: $silver;
  display: flex;
  flex-direction: column;
  background-repeat: no-repeat;
  background-size: cover;
  justify-content: flex-end;

  &:before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(
      to bottom,
      rgba($primary, 0) 0%,
      rgba($primary, 0.52) 100%
    );
    z-index: 0;

    // <stop offset="0" stop-color="#132156" stop-opacity="0"/>
    // <stop offset="1" stop-color="#132156" stop-opacity="0.525"/>
  }

  &__content {
    position: relative;
    z-index: 1;
    color: #fff;
  }
  &__jobtitle {
    text-transform: uppercase;
    font-size: $h6-font-size;
    font-weight: 500;
    letter-spacing: 1px;
  }
}
</style>
