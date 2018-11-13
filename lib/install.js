import message from './message'
import VERSION from './version'
import { primary_message, warn_message } from './message'

export let _Vue
export let midiAccess

export function install(Vue) {
  if (install.installed && _Vue === Vue) return
  install.installed = true

  _Vue = Vue
  message(`vue midi plugin ${VERSION} 🎹`)

  const MIDI = new Vue({
    data() {
      return {
        activeDevices: []
      }
    },
    created() {
      if (navigator.requestMIDIAccess) {
        navigator.requestMIDIAccess().then(this.onMIDISuccess, this.onMIDIFailure);
      } else {
        console.warn('WEB MIDI ISN\'T WORKING.'); // eslint-disable-line
      }
    },
    methods: {
      onMIDISuccess(midi) {
        midiAccess = midi
        this.$emit('midi-success', midiAccess)
        primary_message('MIDI READY')
        midiAccess.onstatechange = this.onStateChange;

        // handle devices
        this.setDeivces(midiAccess)
      },
      onMIDIFailure(msg) {
        this.$emit('midi-fail', msg)
        warn_message("Failed to get MIDI access - " + msg);
      },
      onStateChange(event) {
        this.$emit.call(this, 'midi-change', event)

        // handle devices
        this.setDeivces(midiAccess)
      },
      setDeivces(midiAccess) {
        const _this = this
        this.activeDevices = []
        for (let entry of midiAccess.inputs) {
          this.activeDevices.push(entry)
          midiAccess.inputs.forEach(entry => entry.onmidimessage = event => _this.$emit('midi-input', event));
        }
        for (let entry of midiAccess.outputs) {
          this.activeDevices.push(entry)
        }
      },
    }
  })

  Object.defineProperty(Vue.prototype, '$MIDI', {
    get() { return MIDI }
  })

}

