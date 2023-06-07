<template>
    <li class="list-inline-item ms-3">
        <a class="link-light link-opacity-50 link-opacity-100-hover" :href="link"><i :class="`bi bi-${ icon }`"></i></a>
    </li>
</template>

<script>
export default {
    props: ['link','icon']
}
</script>

<style>

</style>