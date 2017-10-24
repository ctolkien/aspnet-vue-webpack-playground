<template>
<div>
    <h1>from vue</h1>
    <h2>{{lmao}}</h2>
    <ul>
        <li>
            <router-link to="/">Home</router-link>
            <router-link to="/bar">Bar</router-link>>
        </li>
        </ul>
    </div>
</template>


<script lang="ts">
export default {
    data() {
        return {
            lmao: "sup"
        }
    }
};
</script>
