<script lang="ts">
	import type { IContact } from '$lib/types';

	export let data: IContact;

	let name = '';
	let email = '';
	let message = '';
	let nameError = false;
	let emailError = false;
	let messageError = false;
	let emailErrorMsg = 'This field is required';

	const validateEmail = (email: string) => {
		const re = /\S+@\S+\.\S+/;
		return re.test(email);
	};

	const sendEmail = () => {
		if (!name) {
			nameError = true;
		}

		if (!email) {
			emailError = true;
		}

		if (!message) {
			messageError = true;
		}

		if (!validateEmail(email)) {
			emailError = true;
			emailErrorMsg = 'Please enter a valid email address';
		}

		if (!nameError && !emailError && !messageError) {
			const data = {
				name,
				email,
				message
			};

			// send email to rubel.contact@gmail.com

			name = '';
			email = '';
			message = '';
		}
	};
</script>

<section id="contact" class="custom-container section-py">
	<!-- title -->
	<h2 class="mb-10 flex items-center justify-start space-x-4 text-[clamp(26px,5vw,32px)]">
		<span class="text-2xl text-green">04.</span>
		<span
			class="relative text-lightest-slate after:absolute after:left-full after:top-1/2 after:ml-4 after:h-[1px] after:w-[150px] after:bg-lightest-navy after:lg:w-[300px]"
		>
			{data.title}
		</span>
	</h2>

	<div class="items-start justify-between lg:flex lg:space-x-16">
		<!-- form -->
		<div class="lg:w-3/5">
			<p class="mb-4 text-lg">
				{data.description}
			</p>

			<p class="mb-4 text-lg">
				{data.formTitle}
			</p>

			<div class="space-y-6">
				<div class="relative">
					<input
						type="text"
						placeholder="Name*"
						name="name"
						bind:value={name}
						class="custom-transition w-full rounded border-2 border-light-navy bg-light-navy py-2 px-4 text-base text-light-slate focus:border-green/40"
					/>
					{#if nameError}
						<span class="absolute top-full right-0 text-xs text-pink/80">
							This field is required
						</span>
					{/if}
				</div>

				<div class="relative">
					<input
						type="email"
						name="name"
						placeholder="Email*"
						bind:value={email}
						class="custom-transition w-full rounded border-2 border-light-navy bg-light-navy py-2 px-4 text-base text-light-slate focus:border-green/40"
					/>
					{#if emailError}
						<span class="absolute top-full right-0 text-xs text-pink/80">
							This field is required
						</span>
					{/if}
				</div>

				<div class="relative">
					<textarea
						placeholder="Message*"
						bind:value={message}
						class="custom-transition h-32 w-full rounded border-2 border-light-navy bg-light-navy py-2 px-4 text-base text-light-slate focus:border-green/40"
					/>
					{#if messageError}
						<span class="absolute top-full right-0 text-xs text-pink/80">
							This field is required
						</span>
					{/if}
				</div>

				<button
					class="btn-primary custom-transition px-6 text-base hover:bg-green-tint"
					on:click={sendEmail}
				>
					{data.buttonLabel}
				</button>
			</div>
		</div>

		<!-- social media -->
		<div class="mt-12 flex justify-center lg:mt-0 lg:w-2/5">
			<div class="rounded">
				<p class="mb-4 text-lg">{data.socialMediaTitle}</p>

				<div class="flex items-start justify-start space-x-4">
					{#each data.socialMedia as item}
						<a
							href={item.link}
							target="_blank"
							aria-label="link to social media"
							class="flex h-6 w-6 items-center justify-center"
						>
							<svelte:component
								this={item.icon}
								className="h-full w-full hover:text-green transform hover:scale-110 custom-transition"
							/>
						</a>
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>
