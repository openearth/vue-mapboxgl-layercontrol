<template>
  <div class="vue-mapboxgl-layercontrol" >
    <v-list>
      <draggable v-model="editableLayers" :options="{handle: '.handle'}" @start="" @end="endDrag">
        <v-list-group
          v-for="layer in editableLayers"
          v-model="layer.expanded"
          :key="layer.title"
          @click=""
          no-action
          >
          <v-list-tile
            avatar
            dense
            @click.stop=""
            slot="activator"
            class="header"
            >
            <v-icon class="handle">drag_indicator</v-icon>
            <v-list-tile-action class="toggle">
              <v-checkbox v-model="layer.active"></v-checkbox>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title v-text="layer.name"></v-list-tile-title>
            </v-list-tile-content>
            <v-list-tile-avatar>
              <img :src="layer.icon">
            </v-list-tile-avatar>
          </v-list-tile>


          <v-container fluid pa-2>
            <v-layout row wrap>
              <v-flex xs12>
                <v-slider v-model="layer.opacity" label="opacity" height="20px"></v-slider>
              </v-flex>
            </v-layout>
          </v-container>
        </v-list-group>
      </draggable>
    </v-list>
  </div>
</template>

<script>
import Vue from 'vue'
import Vuetify from 'vuetify'
import draggable from 'vuedraggable'

Vue.use(Vuetify)

export default {
  name: 'vue-mapboxgl-layercontrol', // vue component name
  props: {
    map: {
      type: Object
    },
    layers: {
      type: Array,
      default: []
    }
  },
  methods: {
    endDrag (evt) {
    }
  },
  data() {
    return {

    }
  },
  computed: {
    editableLayers: {
      get () {
        return this.layers
      },
      // emit a new value for the .sync
      set (layers) {
        this.$emit('update:layers', layers)
      }
    }
  },
  components: {
    draggable
  }
}
</script>

<style scoped>
  .vue-mapboxgl-layercontrol >>> .header>.v-list__tile {
  padding: 0 6px;
  }
  .vue-mapboxgl-layercontrol >>> .v-list__group__header .v-list__group__header__append-icon, .v-list__group__header .v-list__group__header__prepend-icon {
  padding: 0 6px;
  }

  .vue-mapboxgl-layercontrol >>> .v-input--slider {
   margin-top: inherit;
  }

  .toggle.v-list__tile__action {
  min-width: inherit;
  }
  .handle:hover {
  cursor: move;
  }
</style>
