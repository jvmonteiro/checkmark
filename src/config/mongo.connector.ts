export default () => ({
  url: `mongodb+srv://antqueen:${process.env.MONGO_PASSWORD}@anthill-dev.romr0.gcp.mongodb.net/${process.env.MONGO_DATABASE}?retryWrites=true&w=majority`
})