<template>
    <nav class="main-nav">
        <RouterLink :to="{name:'home'}">Projects</RouterLink>
        <RouterLink :to="{name:'AddProject'}">Add Projects</RouterLink>
    </nav>
</template>

<script>
    export default {
        
    }
</script>

<style  scoped>
.main-nav{
    text-align: center;
    margin: 40px auto;
    & a{
        display: inline-block;
        text-decoration: none;
        margin: 0 10px;
        color: #999;
        font-size: 18px;
        &.router-link-active{
            border-bottom: 2px solid #76dd78;
            padding-bottom: 5px;
            color: #76dd78;
        }
    }
}
</style>