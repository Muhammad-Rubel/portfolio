<script lang="ts">
	import ProfilePic from '$lib/images/robel.jpg';

	const items = [
		'JavaScript (ES6+)',
		'TypeScript',
		'Svelte',
		'React',
		'Vue',
		'Tailwind',
		'Sass',
		'GitHub'
	];
</script>

<section class="custom-container section-py">
	<h2 class="mb-10 flex items-center justify-start space-x-4 text-[clamp(26px,5vw,32px)]">
		<span class="text-2xl text-green">01.</span>
		<span
			class="relative after:absolute after:left-full after:top-1/2 after:ml-4 after:h-[1px] after:w-[150px] after:bg-lightest-navy after:lg:w-[300px]"
			>About Me</span
		>
	</h2>

	<div class="items-start justify-between lg:flex lg:space-x-10">
		<div class="lg:w-3/5">
			<p class="mb-4 text-lg">
				Hello! My name is Mohammad Robel and I enjoy creating things that live on the internet. My
				interest in web development started back in 2012 when I decided to try editing custom Tumblr
				themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!
			</p>

			<p class="mb-4 text-lg">
				Fast-forward to today, and I’ve had the privilege of working at an advertising agency, a
				start-up, a huge corporation, and a student-led design studio. My main focus these days is
				building accessible, inclusive products and digital experiences at Upstatement for a variety
				of clients.
			</p>

			<p class="mb-4 text-lg">
				I also recently launched a course that covers everything you need to build a web app with
				the Spotify API using Node & React.
			</p>

			<p class="mb-4 text-lg">Here are a few technologies I’ve been working with recently:</p>

			<ul class="mt-5 grid grid-cols-2 gap-2">
				{#each items as item}
					<li class="text-base">
						<span class="text-green"> ▹ </span>
						{item}
					</li>
				{/each}
			</ul>
		</div>

		<div class="mt-12 flex justify-center lg:mt-0 lg:w-2/5">
			<div class="group relative h-60 w-48 rounded md:h-64 md:w-52 lg:h-[370px] lg:w-[300px]">
				<img src={ProfilePic} alt="" class="h-full w-full rounded object-cover object-center" />

				<span
					class="absolute top-5 left-5 z-[-1] h-full w-full rounded border-2 border-green transition-all duration-300 ease-in-out group-hover:top-3 group-hover:left-3"
				/>
			</div>
		</div>
	</div>
</section>
