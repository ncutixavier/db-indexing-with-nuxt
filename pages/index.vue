<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="12">
      <v-card>
        <v-card-title>
          <v-row justify="space-between">
            <v-col cols="12" md="3">
              <v-autocomplete
                v-model="hospital"
                :items="hospitals"
                dense
                filled
                label="Hospital"
                placeholder="Hospital"
                outlined
              ></v-autocomplete>
            </v-col>
            <v-col cols="12" md="2">
              <v-autocomplete
                v-model="year"
                :items="practiceYears"
                dense
                filled
                label="Practice Year"
                outlined
              ></v-autocomplete>
            </v-col>
            <v-col cols="12" md="3">
              <v-autocomplete
                v-model="specialization"
                :items="specializations"
                dense
                filled
                label="Specialization"
                outlined
              ></v-autocomplete>
            </v-col>
            <v-col cols="12" md="2">
              <!-- <v-autocomplete
                v-model="zip"
                :items="items"
                dense
                filled
                label="Zip Code"
                outlined
              ></v-autocomplete> -->
              <v-text-field
                v-model="zip"
                dense
                label="Zip Code"
                placeholder="Zip Code"
                outlined
                filled
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="2">
              <v-btn
                style="height: 40px"
                color="primary"
                block
                dark
                @click="fetchData"
              >
                search
              </v-btn>
            </v-col>
          </v-row>
        </v-card-title>
      </v-card>
      <v-card class="mt-3">
        <v-data-table
          :headers="headers"
          :items="indexes"
          :loading="loadingStatus"
        ></v-data-table>
      </v-card>
      <v-snackbar v-model="showErrorMessage" top color="error" outlined>
        <div class="text-center">
          {{ errorMessage }}
        </div>
      </v-snackbar>
    </v-col>
  </v-row>
</template>

<script>
import { specializations } from "@/assets/specializations";
import { hospitals } from "@/assets/hospitals";
export default {
  name: "IndexPage",
  data() {
    return {
      search: "",
      values: "",
      errorMessage: "",
      year: "",
      zip: "",
      specialization: "",
      hospital: "",
      showErrorMessage: false,
      items: ["foo", "bar", "fizz", "buzz"],
      specializations: specializations,
      hospitals: hospitals,
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
    practiceYears() {
      let years = [];
      for (let i = 1980; i < 2022; i++) {
        years.push(i);
      }
      return years;
    },
  },
  methods: {
    fetchData() {
      console.log(`Hospital: ${this.hospital}\nYear: ${this.year}\nSpecialization: ${this.specialization}\nZip: ${this.zip}`);
      // this.$store
      //   .dispatch("doctors/fetchDoctors", this.search)
      //   .then((res) => {
      //     this.indexes.push({
      //       query: res?.query,
      //       time: parseFloat(res?.time).toFixed(2),
      //     });
      //   })
      //   .catch((err) => {
      //     this.errorMessage = err.data.error;
      //     this.showErrorMessage = true;
      //   });
    },
  },
  mounted() {
    const doctors = this.$store.state.doctors;
  },
};
</script>
