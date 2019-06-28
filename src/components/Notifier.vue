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
      <div v-for="(notice, idx) in currentNotices" :key="idx" >
        <span role="alert"
           class="notice"
           :class="notice.type"
           v-html="notice.content"
        ></span>
      </div>
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

