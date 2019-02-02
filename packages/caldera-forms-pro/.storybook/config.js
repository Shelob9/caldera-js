import { configure } from '@storybook/react'

const storiesDirStories = require.context('../stories', true, /.stories.js$/)
function loadStories () {
	storiesDirStories.keys().forEach(filename => storiesDirStories(filename))
}

configure(loadStories, module)
