import { configure } from '@kadira/storybook'

function loadStories () {
  require('../src/story.js')
}

configure(loadStories, module)
