// plugins/vue-moment.js
import Vue from 'vue';
import VueMoment from 'vue-moment';
import moment from 'moment-timezone'; // Importe moment-timezone se precisar de suporte a fuso horário

Vue.use(VueMoment, { moment });
