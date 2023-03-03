<template>
    <section class="section">
        <div class="container">
            <div class="mb-6 pb-3 columns is-multiline">
                <div class="column is-12 is-6-desktop mx-auto has-text-centered">
                    <h1 class="mb-4 is-size-1 is-size-3-mobile has-text-weight-bold title">Go Dean</h1>
                    <p class="subtitle has-text-grey mb-5">El juego de la vida godinez</p>
                    
                </div>
            </div>

            <div class="columns is-multiline">
                <div class="column is-12 is-4-desktop">
                    <div class="mb-6 is-flex is-align-items-center">
                        <span>
                            <svg width="48" height="48" view-box="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M30.9,25l-3-14.9c-0.3-1.3-1.1-2.5-2.2-3.2c-1.9-1.1-4.3-0.8-5.8,0.7L18.6,9h-2h-1.1h-2l-1.4-1.4  c-1.5-1.5-3.9-1.8-5.8-0.7c-1.2,0.7-2,1.8-2.2,3.2L1.1,25c-0.3,1.6,0.9,3,2.5,3c0.6,0,1.1-0.2,1.5-0.7L8.8,23c1.7-1.9,4.1-3,6.6-3  h1.1c2.5,0,5,1.1,6.6,3l3.8,4.3c0.4,0.4,0.9,0.7,1.5,0.7C30.1,28,31.3,26.5,30.9,25z"></path>
                                <circle stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" cx="23" cy="14" r="2"></circle>
                                <line stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="9" y1="16" x2="9" y2="12"></line>                                    
                                <line stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="11" y1="14" x2="7" y2="14"></line>                                
                                <line stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="17" y1="13" x2="15" y2="13"></line>                                
                                <line stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="17" y1="16" x2="15" y2="16"></line>                                    
                            </svg>
                        </span>
                        <div class="ml-3">
                            <h4 class="is-size-4 has-text-weight-bold mb-2 has-text-centered">Juega a como si fuera divertido</h4>
                            <p class="subtitle has-text-grey">Se contemplan 10 horas de juego</p>
                        </div>
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