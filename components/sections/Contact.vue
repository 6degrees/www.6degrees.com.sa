<template>
	<section id="contact" class="text-dark">
		<div class="container">
			<div class="card">
				<div class="my-3 py-3 text-center">
					<h2>Contact Us</h2>
					<p class="lead">You are fingers away from your technological future</p>
				</div>
				<div class="card-body px-5">
					<form target="_blank" action="https://formsubmit.co/mohannad@6degrees.com.sa" method="POST">
						<input type="hidden" name="_next" :value="`${publicPath}/thanks`" />
						<input type="text" name="_honey" style="display: none" />
						
						
						<div class="form-floating mb-3">
							<input name="name" type="text" class="form-control" id="floatingName" placeholder="Name" />
							<label for="floatingName">Your Name</label>
						</div>

                        <div class="form-floating mb-3">
							<input name="email" type="email" class="form-control" id="floatingInput" placeholder="name@example.com" required />
							<label for="floatingInput">Your E-Mail</label>
                            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
						</div>

						<div class="form-floating mb-3">
							<input name="mobile" type="text" class="form-control" id="floatingMobile" placeholder="Mobile" required />
							<label for="floatingMobile">Your Phone</label>
						</div>

						<div class="form-floating mb-3">
							<textarea name="message" class="form-control" placeholder="Leave a comment here" style="height: 100px" id="floatingMessage"></textarea>
							<label for="floatingMessage">Your Message</label>
						</div>

						<div class="form-floating mb-3">
							<div class="d-grid gap-2">
								<button class="btn btn-primary btn-lg" type="submit">Send</button>
							</div>
						</div>
					</form>
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