<template>
  <div class="p-4">
<SectionTitle :title="'About this item'" />
    <!-- Tabs Navigation -->
    <div class="flex border-b">
      <button
        v-for="(tab, index) in tabs"
        :key="index"
        :class="[
        'px-4 py-2 text-md font-medium focus:outline-none',
        activeTab === index
          ? 'border-b-2 border-black text-black'
          : 'text-gray-500 hover:text-black'
        ]"
        @click="changeTab(index)"
      >
        {{ tab.name }}
      </button>
    </div>

    <div class="mt-4">
      <div v-if="activeTab === 0">
        <p class="text-gray-700">{{ tabs[0].content }}</p>
      </div>
      <div v-if="activeTab === 1">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 class="text-lg font-semibold mb-2">Features</h3>
            <ul>
              <li v-for="(feature, index) in tabs[1].features" :key="index" class="text-gray-700">
                <span class="font-semibold">{{ feature.label }}:</span> {{ feature.value }}
              </li>
            </ul>
          </div>
          <div>
            <h3 class="text-lg font-semibold mb-2">Dimensions</h3>
            <ul>
              <li v-for="(dimension, index) in tabs[1].dimensions" :key="index" class="text-gray-700">
                <span class="font-semibold">{{ dimension.label }}:</span> {{ dimension.value }}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div v-if="activeTab === 2">
        <p class="text-gray-700">{{ tabs[2].content }}</p>
      </div>
    </div>
  </div>
</template>



<script setup>
import { ref } from 'vue';

const activeTab = ref(0);

const tabs = [
  {
    name: 'Description',
    content:
        "The best part about this sleek, minimalist wall clock? It's easy to pair with almost any decor. " +
        "It has a wooden center and a dark rustic metal hoop with matching black hands, which keep a numberless account " +
        "of the time. It includes a metal keyhole hanger to attach easily and securely to your wall, and it arrives fully" +
        " assembled. It can also be propped up against a wall, too. This clock requires a single AA battery, which is" +
        " not included.",
    isStructured: false,
  },
  {
    name: 'Details & Dimensions',
    isStructured: true,
    features: [
      { label: 'Product Type', value: 'Analog' },
      { label: 'Overall Shape', value: 'Round' },
      { label: 'Frame Material', value: 'Metal' },
      { label: 'Operating Mechanism', value: 'Mechanical' },
      { label: 'Clock Face Material', value: 'Wood' },
      { label: 'Clock Hand Material', value: 'Metal' },
      { label: 'Backing Material', value: 'Wood' },
      { label: 'Natural Variation Type', value: 'Natural Wood Grain Color Variation; Weathered Steel' },
      { label: 'Time Display Type', value: 'No Time Display Type' },
      { label: 'Time Format', value: 'Standard' },
      { label: 'Exposed Clock Hands', value: 'Yes' },
      { label: 'Imported', value: 'Yes' },
      { label: 'Battery Powered', value: 'Yes' },
      { label: 'Battery Size', value: 'AA' },
      { label: 'Number of Batteries Needed', value: '1' },
    ],
    dimensions: [
      { label: 'Overall', value: '24" W X 24" H X 1.2" D' },
      { label: 'Diameter', value: '24" W' },
      { label: 'Overall Product Weight', value: '3.11 lb.' },
    ],
  },
  {
    name: 'Shipping & Returns',
    content:
        'Ships within 3-5 business days. Returns accepted within 30 days of delivery.' +
        ' Customer is responsible for return shipping costs.',
    isStructured: false,
  },
];

const changeTab = (index) => {
  activeTab.value = index;
};
</script>
