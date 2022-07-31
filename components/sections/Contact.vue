<template>
	<section id="contact" class="text-dark">
		<div class="container  d-flex h-100 justify-content-center">
			<div class="card">
				<div class="my-3 py-3 text-center">
					<h2>Contact Us</h2>
					<p class="lead">You are fingers away from your technological future</p>
				</div>
				<div class="card-body">
					<div class="pipedriveWebForms" data-pd-webforms="https://webforms.pipedrive.com/f/6FxcygmIqiOLw3yJbcPSFhs2Hntf0KMmgg3NwvCvYI7aGT2E4bMKALVs28jEYHPTqP"><script src="https://webforms.pipedrive.com/f/loader"></script></div>
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