module.exports = {
	name: "WPoers", // optional, falls back to object key
	description: "WPoets web sites",
	// skip if localhost
	// skip if this is a new fork of the speedlify (not Zach’s)
	skip: !process.env.CONTEXT,
	options: {
		frequency: 60 * 11 + 30, // 11h, 30m
		// Use "run" if the sites don’t share assets on the same origin
		//           and we can reset chrome with each run instead of
		//           each site in every run (it’s faster)
		// Use "site" if sites are all on the same origin and share assets.
		freshChrome: "site",
	},
	urls: [
		// "https://www.netlify.com/donation-matching/",
		"https://www.wpoets.com/",
		"https://www.wpoets.com/continuous-improvement-program/",
		"https://www.wpoets.com/continuous-improvement-program/awesome-websites/",
		"https://www.wpoets.com/awesome-apps/",
		// "https://www.netlify.com/webinar/a-drupal-journey-to-the-jamstack/",
		"https://www.wpoets.com/resources/",
		"https://www.wpoets.com/careers/",
		"https://www.wpoets.com/blog/",
		"https://www.wpoets.com/contact-us/",
	]
};