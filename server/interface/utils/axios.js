import axios from 'axios'

const instance =axios.create({
    baseURL:`http://${process.env.Host||'loaclhost'}:${process.env.PORT||3000}`,
    timeout:1000,
    headers:{

    }
})
export default instance