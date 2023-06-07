<template>
    <section id="contact" class="text-dark">
        <div class="container card py-5">
            <div class="text-center mb-3 mb-md-5">
                <h2 class="fw-bolder">Contact Us</h2>
                <p class="lead">You are clicks away from your technological future</p>
            </div>

            <div class="row row-cols-1 ">
                <div class="col col-md-6 px-4">
                    <div class="pipedriveWebForms" data-pd-webforms="https://webforms.pipedrive.com/f/6FxcygmIqiOLw3yJbcPSFhs2Hntf0KMmgg3NwvCvYI7aGT2E4bMKALVs28jEYHPTqP"></div>
                </div>

                <div class="col col-md-6 px-4">
                    <div class="contact-info ps-0 ps-md-4">
                        <h4 class="mt-5 mt-md-5 fw-bolder border-bottom pb-2">Other ways to contact us</h4>
                        <h6 class="mt-4"><i class="bi bi-phone"></i> Phone Number(s)</h6>
                        <a dir="ltr" href="tel:+966-558412255">+966 55 841 2255</a>
                        <div>
                            <a dir="ltr" href="tel:+966-537862922">+966 53 786 2922</a>
                            <small class="text-muted">(For SMS only)</small>
                        </div>

                        <h6 class="mt-4"><i class="bi bi-envelope"></i> Email Address</h6>
                        <a dir="ltr" href="mailto:contact@6degrees.com.sa">contact@6degrees.com.sa</a>

                        <h6 class="mt-4"><i class="bi bi-globe"></i> Address</h6>
                        <p><a title="google maps location" href="https://goo.gl/maps/NDfdU2A5B7cHWphM6">6919 Prince Turki Road</a>, Corniche,<br>Khobar, Eastern Region 34413,<br>Saudi Arabia</p>
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