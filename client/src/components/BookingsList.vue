<template lang="html">
  <div class="">
    <ul>
      <booking v-for="booking, index in bookings" :key='index' :booking='booking'/>
    </ul>
  </div>
</template>

<script>
import { eventBus } from '../main.js'
import BookingsForm from './BookingsForm.vue'
import Booking from './Booking.vue'
import BookingService from '../BookingService.js'


export default {
  name: "bookings-list",
  data(){
    return{
      bookings: []
    }
  },
  components: {
    'booking': Booking
  },
  mounted(){
    this.fetchData()
    eventBus.$on('booking-added', booking => this.bookings.push(booking));

    eventBus.$on('booking-deleted', id => {
      const index = this.bookings.findIndex(booking => booking._id ===id)
      this.bookings.splice(index,1);
    })
  },
  methods: {
    fetchData(){
      BookingService.getBookings()
      .then(bookings=>this.bookings = bookings)
    }
  }
}
</script>

<style lang="css" scoped>
</style>
