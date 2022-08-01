<template>
    <section id="contact" class="text-dark">
        <div class="container card py-5 ">
            <div class="text-center">
                <h2>Contact Us</h2>
                <p class="lead">You are clicks away from your technological future</p>
            </div>

            <div class="row row-cols-1">
                <div class="col col-md-6 px-4">
                    <div class="pipedriveWebForms" data-pd-webforms="https://webforms.pipedrive.com/f/6FxcygmIqiOLw3yJbcPSFhs2Hntf0KMmgg3NwvCvYI7aGT2E4bMKALVs28jEYHPTqP"><script src="https://webforms.pipedrive.com/f/loader"></script></div>
                </div>

                <div class="col col-md-4 offset-md-1 pt-5">
                    <div class="contact-info ps-4">
                        <h6 class="mt-4"><i class="bi bi-phone"></i> Phone Number</h6>
                        <a dir="ltr" href="tel:+966-558412255">+966 55 841 2255</a>

                        <h6 class="mt-4"><i class="bi bi-envelope"></i> Email Address</h6>
                        <a dir="ltr" href="mailto:contact@6degrees.com.sa">contact@6degrees.com.sa</a>

                        <h6 class="mt-4"><i class="bi bi-globe"></i> Address</h6>
                        <p>6919 Prince Turki Road, Corniche Khobar, Eastern Region 34413, Saudi Arabia</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            publicPath: process.env.baseUrl,
            selected: ''
        };
    }
};
</script>

<style>
</style>