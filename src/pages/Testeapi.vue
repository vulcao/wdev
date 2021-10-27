<template>
    <main>
        <section class="container">
            <h1>Teste API</h1>
            
        </section>
    </main>
</template>

<script>
import apisynergius from '@/services/apisynergius.js';
export default {
    name: 'Testeapi',
    data(){
        return {
            testeapi: []
        }
    },
    mounted(){
        let jsonenvio = {
            Tpc: 'dL=slUpSuiGrEnysXaiJLY13riOUGNfPBcg==',
            Token: 'slUpSuiGrEnyskfCv6gw==',
            UsuarioCodigo: 6795,
            Ip: '192.168.2.1',
            Mac: '000-000-000-000',
            Servico: '3545',
            ParametrosCondicao: [
                {
                    Nome: 'BENEFICIARIOCARTAO',
                    Valor: '880000002753451'
                }
            ]
}
        apisynergius.post('/ws/ExtListarData',jsonenvio).then(response => {
            console.log(response.data)
        });
    }
}
</script>

<style scoped>
main{
    align-items: center;
}
.contacts {
    margin-bottom: 40px;
    color: var(--color-text-dark)
}
.contact-title {
    font-weight: 600;
    font-size: 18px;
}
.contact {
    margin-bottom: 20px;
}
.contact a {
    color: var(--color-text-dark);
}
</style>