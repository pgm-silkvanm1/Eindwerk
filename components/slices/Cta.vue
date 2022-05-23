<template>
  <div class="cta bg-primary">
    <div class="content-container">
      <div class="px-2 py-3 px-md-8 py-md-10">
        <MediaText
          :title="title"
          :image="image"
          :body="body"
          :button="button"
          :remove-icon="true"
          align="center"
          variant="primary"
          title-variant="primary"
          text-variant="white"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    image: Object,
    body: String,
    button: Object,
  },
}
</script>
