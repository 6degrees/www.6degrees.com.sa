<template>
  <div class="col partner">
        <div class="">
        <div class="card-body text-dark text-center">
            <a :href="link"><img :alt="name" :src="require(`~/assets/images/partners/${image}`)" /></a>
        </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['image','name', 'link']
}
</script>

<style>

</style>