<template>
    <v-snackbar id="appNotifications"
        aria-live="assertive" role="region"
        v-model="displayNotice"
        top middle
        :timeout="0"
        auto-height
        multi-line
        vertical
       >
      <v-card-text v-for="(notice, idx) in currentNotices" :key="idx"
         :class="notice.type"
         class="display-1"
         pa-4
         role="alert"
         v-html="notice.content" >
      </v-card-text>
      <v-btn flat icon
        aria-label="Clear the current application notice"
        @click.native="showNextNotice()"
      >
        <v-icon>clear</v-icon>
      </v-btn>
    </v-snackbar>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'Notifier',
  computed: {
    ...mapGetters(['currentNotices', 'hasNoticeToDisplay']),
  },
  watch: {
    hasNoticeToDisplay: {
      immediate: true,
      handler(newvalue) {
        this.displayNotice = newvalue;
      },
    },
  },
  methods: {
    ...mapActions(['showNextNotice']),
  },
  data() {
    return {
      displayNotice: false,
    };
  },
};
</script>

