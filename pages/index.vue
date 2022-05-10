<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="12">
      <v-card>
        <v-card-title>
          <v-row justify="space-between" align="center">
            <v-col cols="12" sm="5" md="5">Indexes</v-col>
            <v-col cols="12" sm="6" md="6">
              <v-text-field
                v-model="search"
                append-icon="mdi-magnify"
                label="Search"
                single-line
                hide-details
              ></v-text-field>
            </v-col>
          </v-row>
        </v-card-title>
        <v-data-table
          :headers="headers"
          :items="indexes"
          :search="search"
          :loading="loading"
        ></v-data-table>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "IndexPage",
  data() {
    return {
      search: "",
      loading: false,
      headers: [
        {
          text: "Query",
          align: "start",
          sortable: false,
          value: "query",
        },
        { text: "Single Index", value: "single_index" },
        { text: "Double Index", value: "double_index" },
        { text: "Triple Index", value: "triple_index" },
        { text: "Multiple Index", value: "multi_index" },
      ],
      indexes: [
        {
          query: "query 1",
          single_index: "3.045ms",
          double_index: "2.345ms",
          triple_index: "8.005ms",
          multi_index: "5.005ms",
        },
        {
          query: "query 2",
          single_index: "1.045ms",
          double_index: "2.345ms",
          triple_index: "4.005ms",
          multi_index: "5.105ms",
        },
        {
          query: "query 3",
          single_index: "3.045ms",
          double_index: "2.345ms",
          triple_index: "4.005ms",
          multi_index: "5.105ms",
        },
      ],
    };
  },
  mounted() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 3000);
    // const doctors = 
  },
};
</script>
