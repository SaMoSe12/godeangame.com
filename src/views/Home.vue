<template>
    <section class="hero is-fullheight">
        <div class="hero-body">
            <div class="container">
                <div class="columns is-vcentered reverse-columns is-multiline">
                    <div class="column is-10-mobile is-5-desktop" v-for="card in cards" :key="card.id">
                        <div class="message is-info">
                            <div class="message-header">
                                <p class="message-title">{{ card.name }}</p>
                                <button class="delete"></button>
                            </div>
                            <div class="message-body">
                                <p>{{ card.resume }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="hero is-fullheight"></section>
</template>

<script lang="ts">
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const myCards = [
    { id: 0, name: 'Carta 1', resume: `Este es el resumen de carta` },
    { id: 1, name: 'Carta 2', resume: `Este es el resumen de carta` },
    { id: 2, name: 'Carta 3', resume: `Este es el resumen de carta` },
    { id: 3, name: 'Carta 4', resume: `Este es el resumen de carta` },
];

export default {
    name: 'Home',
    data() {
        return {
            cards: myCards,
        };
    },
    mounted() {
        gsap.timeline({
            scrollTrigger: {
                trigger: '.columns',
                start: 'top bottom',
                end: 'top center',
                markers: true,
                scrub: true,
                pin: false,
                name: 'Columns ST'
            }
        })
            .from('.column', { autoAlpha: 0, x: innerWidth/2})
    }
}
</script>