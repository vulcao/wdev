import axios from 'axios';

const apisynergius = axios.create({
    baseURL:'https://synergius.unimedbelem.com.br/SynergiusServicos/M0/api/'
});

export default apisynergius;