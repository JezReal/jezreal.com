<div class="flex flex-col justify-center p-16">
	<div>
		<h1>Jezreel Joshua Martin</h1>
		<p>
			Hello there! I am a software engineer focused on web development. Constantly improving and
			learning new things has always been my passion which has helped me in learning new
			technologies and allowed me to be competent in an unfamiliar stack and be productive within a
			relaitvely short period of time.
		</p>
	</div>

	<div id="tech">
		<h3>Some technologies I have worked with:</h3>
		<div id="stacks" class="flex flex-col">
			<ul class="flex flex-row gap-2">
				<li>Python</li>
				<li>C#</li>
				<li>GoLang</li>
				<li>Javascript/Typescript</li>
			</ul>

			<ul class="flex flex-row gap-2">
				<li>Django</li>
				<li>VueJS</li>
				<li>SvelteKit</li>
				<li>ExpressJS</li>
			</ul>

			<ul class="flex flex-row gap-2">
				<li>Docker</li>
				<li>Git & GitHub</li>
			</ul>
		</div>
	</div>

	<div id="contact" class="flex flex-col">
		<p>
			If you are interested in learning more, you can download my CV and/or contact me through the
			following channels below:
		</p>

		<div>
			<a href="https://github.com/JezReal/" target="_blank">GitHub</a>
			<a href="https://linkedin.com/in/jezreel-joshua-martin/" target="_blank">LinkedIn</a>
			<a href="mailto:jezreeljoshuam@gmail.com" target="_blank">
				Send an email (jezreeljoshuam@gmail.com)
			</a>
			<a href={data.url} download>Download my CV</a>
		</div>
	</div>
</div>

<script>
export let data
</script>
