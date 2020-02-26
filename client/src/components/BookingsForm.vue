<template lang="html">
  <form id="bookings-form" v-on:submit="addBooking">
    <h2>Add a Booking</h2>
    <div class="formWrap">
      <label for="name">Name:</label>
      <input type="text" id="name" v-model="name" required/>
    </div>
    <div class="formWrap">
      <label for="email">E-Mail:</label>
      <input type="email" id="email" v-model="email" required/>
    </div>
    <div class="formWrap">
      <label for="date-in">Date In:</label>
      <input type="date" id="date-in" v-model="dateIn" />
    </div>
    <div class="formWrap">
      <label for="date-out">Date Out:</label>
      <input type="date" id="date-out" v-model="dateOut"  />
    </div>
    <div class="formWrap">
      <label for="checked-in-status">Checked In:</label>
      <input type="checkbox" name="checked-in-status" v-model="checkedInStatus">
    </div>
    <input type="submit" value="Save" id="save"/>

  </form>
</template>

<script>
import { eventBus } from '../main.js'
import BookingService from '../BookingService.js'
export default {
  name: "bookings-form",
  data(){
    return{
      name: "",
      email: "",
      dateIn: null,
      dateOut: null,
      checkedInStatus: null
    }
  },
  methods: {
    addBooking(event){
      event.preventDefault();

      const payload = {
        "name": this.name,
        "email": this.email,
        "Date in": this.dateIn,
        "Date out": this.dateOut,
        "Checked in": this.checkedInStatus
      };

      BookingService.postBooking(payload)
      .then(booking =>{
        eventBus.$emit('booking-added', booking)
      })
    }
  }
}
</script>

<style lang="css" scoped>
</style>
