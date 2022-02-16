<template>
  <transition-group name="list" tag="div">
    <v-card v-for="(item, index) in value" :key="item[itemId]" outlined class="mt-3" elevation="10" color="pink">
      <v-card-title class="justify-end pb-0">
        <v-btn @click="remove(index, item)" icon>
          <v-icon>
            mdi-close
          </v-icon>
        </v-btn>
      </v-card-title>
      <v-card-text>
        <slot :item="item" :index="index" />
      </v-card-text>
      <v-card-actions>
        <v-btn outlined elevation="2" v-if="addOrderButtonVisibility" text @click="addOrder(item)">Order</v-btn>
      </v-card-actions>
      <v-card-actions>
        <v-btn outlined elevation="2" v-if="redeemOrderButtonVisibility" text @click="redeemOrder(item)">Redeem</v-btn>
      </v-card-actions>
    </v-card>
  </transition-group>
</template>

<script>

export default {
  props: {
    value: {
      type: Array,
      default: () => []
    },

    addOrderButtonVisibility: Boolean,
    redeemOrderButtonVisibility: Boolean,

    itemId: {
      type: String,
      default: 'id'
    }
  },

  methods: {
    remove (index, item) {
      this.$emit('removeItem', item);
      const newValue = [...this.value.slice(0, index), ...this.value.slice(index + 1)]
      this.$emit('input', newValue)
    },

    addOrder (item) {
      this.$emit('addItem', item);
    },

    redeemOrder(item) {
      this.$emit('redeemItem', item);
    }
  }
}
</script>

<style scoped>
.list-enter, .list-leave-to {
  opacity: 0;
}

.list-enter-active, .list-leave-active {
  transition: opacity 0.5s ease;
}

.list-move {
  transition: transform 0.5s ease-out;
}
</style>
