<template>
  <v-layout
    column
    justify-center
    align-center
  >
    <v-flex
      xs12
      sm8
      md6
    >
      <v-card class="mb-2">
        <v-card-text class="title text-xs-center">Aku Adalah Huruf</v-card-text>
        <v-btn @click="refreshSound" class="mt-5" fab absolute small top right><v-icon>refresh</v-icon></v-btn>
        <v-card-text>
          <div class="text-xs-center display-4 font-weight-bold pb-3">{{data.huruf}}</div>
        </v-card-text>
        <v-card-text align="center">
          <v-btn
            @click="handlePrev"
            elevation="2"
            fab
            outlined
          >
            <v-icon>chevron_left</v-icon>
          </v-btn>
          <v-btn
            @click="klikHuruf"
            elevation="2"
            fab
            outlined
            large
          >
            <v-icon>volume_up</v-icon>
          </v-btn>
          <v-btn
            @click="handleNext"
            elevation="2"
            fab
            outlined
          >
            <v-icon>chevron_right</v-icon>
          </v-btn>
        </v-card-text>
      </v-card>
      <!-- <div class="title text-xs-center pt-2 pb-1">Contoh Kata</div> -->
      <v-btn class="coba" @click="klikKata">{{data.kata[0]}}</v-btn>
      <v-btn class="coba" @click="klikKata">{{data.kata[1]}}</v-btn>
      <v-btn class="coba" @click="klikKata">{{data.kata[2]}}</v-btn>
      <v-btn class="coba" @click="klikKata">{{data.kata[3]}}</v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
import {abjad} from './../static/abjad'

const alpabet = 'abcdefghijklmnopqrstuvwxyz';
const daftarAbjad = alpabet.split("");
export default {
  data: () => ({
    // alpabet: 'abcdefghijklmnopqrstuvwxyz',
    index: 0,
    data: abjad.a,
    daftarAbjad: daftarAbjad,
  }),
  methods: {
    klikKata(e) {
      this.soundOn(e.target.innerText)
    },
    klikHuruf() {
      this.soundOn(this.data.huruf)
    },
    refreshSound() {
      window.speechSynthesis.cancel();
    },
    soundOn(value) {
      const msg = new SpeechSynthesisUtterance();
      msg.volume = 1; // 0 to 1
      msg.rate = 0.9; // 0.1 to 10
      // msg.pitch = 1; //0 to 2
      msg.text = value;
      // msg.text = 'this.data.huruf'
      msg.lang = 'id';
      window.speechSynthesis.speak(msg);
    },
    handlePrev() {
      if (this.index - 1 > -1) {
        this.index = this.index - 1
        this.data = abjad[daftarAbjad[Number(this.index)]]
      }
    },
    handleNext() {
      if (this.index + 1 < 26) {
        this.index = this.index + 1;
        this.data = abjad[daftarAbjad[Number(this.index)]]
      }
    }
  }
}
</script>

<style scoped>
  .coba {
    width: 100%;
    margin-left: 0px;
  }
</style>
