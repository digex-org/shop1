<template>
  <form class="space-y-4">
    <h2 class="text-lg font-semibold">Shipping Address</h2>

    <div>
      <label class="block text-sm">Full Name</label>
      <input
          id="name"
          v-model="name"
          type="text"
          class="w-full p-2 border rounded"
          placeholder="John Doe"
      />
    </div>

    <div>
      <label class="block text-sm">Select Country</label>
      <select class="w-full border p-2 rounded">
        <option>United States</option>
        <!-- Add more countries as needed -->
      </select>
    </div>

    <div>
      <label class="block text-sm">Address</label>
      <input
          id="name"
          v-model="address"
          type="text"
          class="w-full p-2 border rounded"
          placeholder="Enter address"
      />
    </div>

    <div>
      <label class="block text-sm">Apt, Suite, Unit, Etc.</label>
      <input
          id="name"
          v-model="apartment"
          type="text"
          class="w-full p-2 border rounded"
          placeholder="Apartment, suite, etc."
      />
    </div>

    <div>
      <label class="block text-sm">Company Name</label>
      <input type="text" class="w-full border p-2 rounded" placeholder="Company name" />
    </div>

    <div>
      <label class="block text-sm">Town/City</label>
      <input type="text" class="w-full border p-2 rounded" placeholder="City" />
    </div>

    <div class="grid grid-cols-2 gap-4">
      <div>
        <label class="block text-sm">Select State</label>
        <select class="w-full border p-2 rounded">
          <option>Select state</option>
          <!-- Add states dynamically -->
        </select>
      </div>
      <div>
        <label class="block text-sm">ZIP Code</label>
        <input type="text" class="w-full border p-2 rounded" placeholder="ZIP Code" />
      </div>
    </div>

    <div>
      <label class="block text-sm">Phone Number</label>
      <input type="text" class="w-full border p-2 rounded" placeholder="Phone number" />
    </div>

    <div class="flex items-center gap-2">
      <input type="checkbox" id="defaultAddress" />
      <label for="defaultAddress" class="text-sm">Set as default shipping address</label>
    </div>

    <button type="submit" class="bg-black text-white px-4 py-2 rounded">
      Save & Continue
    </button>
  </form>
</template>


<script setup>
  import { ref } from "vue";

  const name = ref("");
  const address = ref("");
  const apartment = ref("");
</script>