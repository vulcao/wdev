<template>
    <main>
        <div class="text-top">Videos novos toda <b>Quinta</b> às 20h</div>
        <a href="https://youtu.be/kmsM_hHrDHE">
        <img alt="Insceva-se" id="subscribe" src="https://raw.githubusercontent.com/william-costa/wdev-mock-site-resources/master/assets/images/subscribe.svg
"/>
        </a>
        <div class="text-botton">youtube.com/lalala</div>
    </main>
</template>

<script>
export default {
    name: 'Home'        
}
</script>

<style scoped>
main {
    background-color: var(--color-background-home);
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.text-top,
.text-botton {
    color: var(--color-text-light);
    font-size: 22px;
}
.text-botton {
    font-size: 18px;
}
#subscribe {
    margin: 20px 0 10px 0;
    width: 300px;
}
</style>
