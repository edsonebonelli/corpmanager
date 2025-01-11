import axios from 'axios'

const apiUrl = 'http://localhost:3000'

const statusAPI = async () => {
    try {
        const res = await axios.get(apiUrl, {timeout: 5000})
        if (res.status >= 200 && res.status < 300){
            console.log('API está online - status: ${resposta.status}')
        } else {
            console.log('API respondeu com status: ${resposta.status}')
        }
    } catch (erro){
        console.log('API está offline ou inacessível: ', erro.message)
    }
}

setInterval(statusAPI, 10000)