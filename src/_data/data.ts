export type weblink = {
	url: string,
	icon: string,
}

export const weblinks:weblink[] = [
	{
		url: "https://github.com",
		icon: "faGithubAlt",
	},
	{
		url: "https://reddit.com",
		icon: "faRedditAlien",
	},
	{
		url: "https://gitlab.com",
		icon: "faGitlab",
	},
	{
		url: "https://www.wallpaperflare.com/park-junkyu-women-cyborg-futuristic-cyberpunk-black-hair-wallpaper-wekdq",
		icon: "faImage",
	},
	{
		url: "https://www.youtube.com/channel/UCtQqZ6EhvprvC0H2tLN2EcA",
		icon: "faYoutube",
	},
	{
		url: "",
		icon: "faGitkraken",
	},
]
export const welcome:string = "お帰りなさい"

export type searchEngine = {
	label: string,
	url: string,
}

export const searchEngines:searchEngine[] = [
	{
		label: "Google",
		url: "google.com/search",
	},
	{
		label: "DuckDuckGo",
		url: "duckduckgo.com/",
	},
	{
		label: "Qwant",
		url: "qwant.com/",
	},
]