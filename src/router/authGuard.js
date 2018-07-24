
export default (to, from, nexr)=>{
    if(store.getters.user)
        next()
    else 
        next('/login')
}