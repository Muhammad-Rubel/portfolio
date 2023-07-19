<script>
	import About from '$lib/components/About.svelte';
	import Contact from '$lib/components/Contact.svelte';
	import Experience from '$lib/components/Experience.svelte';
	import FeaturedProjects from '$lib/components/FeaturedProjects.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import OtherProjects from '$lib/components/OtherProjects.svelte';

	import { homepageData } from '$lib/data';
</script>

<Hero data={homepageData.hero} />
<About data={homepageData.about} />
<Experience data={homepageData.experience} />
<FeaturedProjects data={homepageData.featuredProjects} />
<OtherProjects data={homepageData.noteworthyProjects} />
<Contact data={homepageData.contact} />

<!-- <h1 class="font-fira text-4xl font-bold text-dark-navy">Welcome to dark-navy</h1>
<h1 class="font-fira text-4xl font-bold text-navy">Welcome to navy</h1>
<h1 class="font-fira text-4xl font-bold text-light-navy">Welcome to light-navy</h1>
<h1 class="font-fira text-4xl font-bold text-lightest-navy">Welcome to lightest-navy</h1>
<h1 class="font-fira text-4xl font-bold text-navy-shadow">Welcome to navy-shadow</h1>
<h1 class="font-fira text-4xl font-bold text-slate">Welcome to slate</h1>
<h1 class="font-fira text-4xl font-bold text-light-slate">Welcome to light-slate</h1>
<h1 class="font-fira text-4xl font-bold text-lightest-slate">Welcome to lightest-slate</h1>
<h1 class="font-fira text-4xl font-bold text-white">Welcome to White</h1>
<h1 class="font-fira text-4xl font-bold text-green">Welcome to green</h1>
<h1 class="font-fira text-4xl font-bold text-green-tint">Welcome to green-tint</h1>
<h1 class="font-fira text-4xl font-bold text-pink">Welcome to Pink</h1>
<h1 class="font-fira text-4xl font-bold text-blue">Welcome to blue</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p> -->
