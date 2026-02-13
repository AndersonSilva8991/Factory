// Factory

function createstory(title, author) {
    const story = {
        storyTitle: title,
        storyAuthor: author
    }
    return story
}
const story1 = createstory("Matrix", "Lilly and Lana")
console.log(story1)
