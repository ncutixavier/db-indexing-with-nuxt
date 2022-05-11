<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="12">
      <v-card>
        <v-card-title>
          <v-text-field
            v-model="search"
            dense
            label="Enter your query"
            placeholder="Enter your query"
            outlined
            single-line
            hide-details
          ></v-text-field>
          <v-btn
            class="ma-2"
            color="primary"
            dark
            :disabled="!search"
            @click="fetchData"
          >
            Run
          </v-btn>
        </v-card-title>
        <v-data-table
          :headers="headers"
          :items="indexes"
          :search="search"
          :loading="loadingStatus"
        ></v-data-table>
      </v-card>
      <v-snackbar
        :timeout="2000"
        :value="showErrorMessage"
        top
        color="error"
        outlined
        right
      >
        <div class="text-center">
          {{ error }}
        </div>
      </v-snackbar>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "IndexPage",
  data() {
    return {
      search: "",
      errorMessage: "",
      showErrorMessage: false,
      headers: [
        {
          text: "Query",
          align: "start",
          sortable: false,
          value: "query",
        },
        { text: "Time", value: "time" },
      ],
      indexes: [],
    };
  },
  computed: {
    loadingStatus() {
      return this.$store.state.loadingDoctors;
    },
  },
  methods: {
    fetchData() {
      console.log(this.search);
      this.$store.dispatch("doctors/fetchDoctors", this.search).then((res) => {
        console.log("QUERY-RESP::", res);
        this.indexes.push({
          query: res?.query,
          time: parseFloat(res?.time).toFixed(2),
        });
        this.search = "";
      }).catch((err) => {
        this.showErrorMessage = true;
        this.error = err?.data?.error;
        console.log("QUERY-ERR::", err);
      })
    },
  },
  mounted() {
    const doctors = this.$store.state.doctors;
    console.log("Doctors: ", doctors);
  },
};
</script>
