<template>
  <v-container full-height class="py-0">
    <v-row>
      <v-col cols="12">
        <card-list v-model="items" #default="{ item }">
          <v-row>
            <v-col cols="12">
              <v-text-field v-model="item.description" label="Description" hide-details />
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <v-text-field v-model="item.points" label="Points" hide-details />
            </v-col>
          </v-row>
        </card-list>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="auto" class="py-0 mx-auto">
        <v-btn @click="add" text>
          <v-icon>
            mdi-plus
          </v-icon>
          Add
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import CardList from '@/components/CardList'
import axios from 'axios';

export default {
  components: {
    CardList
  },

  created () {
    console.log(`http://localhost:9000/orders`);
    axios.get(`http://localhost:9000/orders`, {
      headers: {
        'Access-Control-Allow-Origin': '*',
      }
    }).then(response => {
      console.log(response);
      console.log(response.data);
    });
  },

  data: () => ({
    items: [ ],

    counter: 10
  }),

  methods: {
    add () {
      this.items.push({ id: this.counter++ })
    }
  }
}
</script>

<style scoped>
.container {
  max-width: 600px !important;
}
</style>
