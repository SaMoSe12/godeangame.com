<template>
    <section id="paralax-1" class="hero is-large">
        <div class="hero-body">
            <div class="container is-fluid">
                <div class="columns">
                    <div class="column is-6 is-offset-3">
                        <h1 class="title is-1">GoDean</h1>
                        <h2 class="subtitle">The game</h2>
                        <hr class="content-divider">
                        <router-link :to="{ name: 'devlog' }" class="button is-white is-medium is-inverted">
                            <span class="icon is-small">
                                <font-awesome-icon icon="fas fa-code"/>
                            </span>
                            <span class="ml-1">Devlog</span>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="hero is-medium" id="info-1">
        <div class="hero-body">
            <div class="container">
                <div class="columns">
                    <div class="column is-half">
                        <h1 class="title is-1">Quienes somos?</h1>
                        <hr class="content-divider">
                        <h2 class="subtitle">
                            Somos amigos godinez que aman los juegos y queremos juntar esos dos universos.
                        </h2>
                    </div>
                    <div class="column is-half">
                        <figure class="image is-square">
                            <img src="https://picsum.photos/500" alt="Foto al azar 1" />
                        </figure>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
    import { gsap } from 'gsap';
    import { ScrollTrigger } from 'gsap/ScrollTrigger';
    import path from 'path';
    gsap.registerPlugin(ScrollTrigger);

    export default {
        name: "Home",
        data() {
        },
        mounted() {
        },
        methods: {},
        components: { path }
    }
</script>