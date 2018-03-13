export const state = () => ({})

export const actions = {
  nuxtServerInit (store, ctx) {
    console.log(Object.keys(ctx))
    ctx.redirect(503, '/unavailable')
  }
}
