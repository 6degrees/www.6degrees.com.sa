<template>
  <div class="col partner text-center justify-content-center align-items-center">
    <a :href="link" class="d-flex justify-content-center align-items-center">
        <img style="max-width:80%; max-height:100px;" :alt="name" :src="require(`~/assets/images/partners/${image}`)" />
    </a>
    </div>
</template>

<script>
export default {
    props: ['image','name', 'link']
}
</script>

<style>

</style>