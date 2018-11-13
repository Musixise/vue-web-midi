# vue-midi-plugin
A web midi plugin for vue2. [中文文档](https://github.com/lin-xin/vue-toast/blob/master/README_zh.md)

<p>
  <a href="https://www.npmjs.com/package/vue-web-midi"><img src="https://img.shields.io/npm/dm/vue-web-midi.svg" alt="Downloads"></a>
  <a href="https://www.npmjs.com/package/vue-web-midi"><img src="https://img.shields.io/npm/v/vue-web-midi.svg" alt="Version"></a>
  <br>
</p>


## usage
download:

```
npm install vue-web-midi -S
```
import:

```javascript
import MIDIDevice from 'vue-web-midi';
Vue.use(MIDIDevice);
```
在组件中使用:

```javascript
export default {
    created() {
    this.$MIDI.$on('midi-input', event => {
      
    })
  },
}
```
## events

+ midi-success | Detection midi device inserted successfully
+ midi-fail | Detection midi device inserted failure
+ midi-change | midi device change
+ midi-input | midi device input