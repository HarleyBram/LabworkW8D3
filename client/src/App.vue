<template lang="html">
  <div class="">
    <bookings-form/>
    <bookings-list/>
  </div>

</template>

<script>


import Booking from './components/Booking.vue';
import BookingsForm from './components/BookingsForm.vue';
import BookingsList from './components/BookingsList.vue';

export default {
components: {
  "bookings-form": BookingsForm,
  "bookings-list": BookingsList
}
}
</script>

<style lang="css" scoped>
</style>
