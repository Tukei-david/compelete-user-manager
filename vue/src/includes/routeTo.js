import router from "../router"


function routeTo(route) {
    router.push({ name: route })
}

export default routeTo