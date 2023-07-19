<script>
	let activeExperience = 0;
	const experiences = [
		{
			company: 'Rebelslab',
			website: 'https://rebelslab.com',
			position: 'Frontend Engineer',
			date: 'Nov 2022 - Present',
			workingAreas: [
				'Write modern, performant, maintainable code for a diverse array of client and internal projects',
				'Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, Gatsby, React, Craft, WordPress, Prismic, and Netlify',
				'Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis'
			]
		},
		{
			company: 'SR Web Studio',
			website: 'https://https://srwebstudio.com',
			position: 'Web Developer',
			date: 'Jan 2020 - Present',
			workingAreas: [
				'Worked with a team of three designers to build a marketing website and e-commerce platform for blistabloc, an ambitious startup originating from Northeastern',
				'Helped solidify a brand direction for blistabloc that spans both packaging and web',
				'Interfaced with clients on a weekly basis, providing technological expertise'
			]
		}
	];
</script>

<section id="experience" class="section-py mx-auto max-w-[700px] px-6">
	<h2
		class="mb-10 flex items-center justify-start space-x-4 text-[clamp(26px,5vw,32px)] text-lightest-slate"
	>
		<span class="text-2xl text-green">02.</span>
		<span
			class="relative after:absolute after:left-full after:top-1/2 after:ml-4 after:h-[1px] after:w-[70px] after:bg-lightest-navy after:lg:w-[300px]"
		>
			Where I’ve Worked
		</span>
	</h2>

	<div class="items-start justify-start md:flex md:space-x-4">
		<div class="mb-8">
			{#each experiences as item, i}
				<button
					class={'whitespace-nowrap border-b-2 px-4 py-2 text-[13px] md:border-l-2 md:border-b-0 ' +
						(activeExperience === i ? 'border-green text-green' : 'border-lightest-navy')}
					on:click={() => {
						activeExperience = i;
					}}
				>
					{item.company}
				</button>
			{/each}
		</div>

		<div class="py-2.5 px-1 md:py-0">
			<h3 class="mb-0.5 text-[22px] font-medium text-lightest-slate">
				{experiences[activeExperience].position}
				<a
					href={experiences[activeExperience].website}
					target="_blank"
					class="text-green underline-offset-2 hover:underline"
				>
					@ {experiences[activeExperience].company}
				</a>
			</h3>

			<p class="mt-2 font-mono text-[13px]">{experiences[activeExperience].date}</p>

			<ul class="mt-6 space-y-2.5">
				{#each experiences[activeExperience].workingAreas as area}
					<li class="relative pl-7 text-base">
						<span class="absolute top-0 left-0 text-green">▹</span>
						{area}
					</li>
				{/each}
			</ul>
		</div>
	</div>
</section>
