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
      <v-card>
        <v-card-text class="headline text-xs-center">Mengenal Huruf</v-card-text>
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
            @click="soundOn"
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
    soundOn() {
      const msg = new SpeechSynthesisUtterance();
      msg.volume = 1; // 0 to 1
      msg.rate = 1; // 0.1 to 10
      // msg.pitch = 1; //0 to 2
      msg.text = this.data.huruf;
      msg.lang = 'id';
      window.speechSynthesis.speak(msg);
    },
    handlePrev() {
      if (this.index - 1 > -1) {
        console.log("newindex", this.index-1)
        this.index = this.index - 1
        this.data = abjad[daftarAbjad[Number(this.index)]]
      }
    },
    handleNext() {
      if (this.index + 1 < 26) {
        console.log("newindex", this.index+1)
        this.index = this.index + 1;
        console.log("abjad[daftarAbjad[Number(this.index+1)]]", abjad[daftarAbjad[Number(this.index)]])
        this.data = abjad[daftarAbjad[Number(this.index)]]
      }
    }
  }
}
</script>
