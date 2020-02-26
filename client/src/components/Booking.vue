<template lang="html">
  <li>
    <h2>{{booking.name}}</h2>
    <p>{{booking.email}}</p>
    <br>
    <button type="button" name="delete" v-on:click='removeBooking(booking._id)'>Remove Booking</button>
  </li>
</template>

<script>
import { eventBus } from '../main.js'
import BookingService from '../BookingService.js'

export default {
  name: 'booking',
  props: ['booking'],
  methods: {
    removeBooking(id){
      BookingService.deleteBooking(id)
      .then(res => eventBus.$emit('booking-removed', id))
    }
  }
}
</script>

<style lang="css" scoped>
</style>
