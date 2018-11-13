# vue2-toast
vue 处理 web midi 的插件 [English document](https://github.com/Musixise/vue-web-midi/blob/master/README.md)

<p>
  <a href="https://www.npmjs.com/package/vue-web-midi"><img src="https://img.shields.io/npm/dm/vue-web-midi.svg" alt="Downloads"></a>
  <a href="https://www.npmjs.com/package/vue-web-midi"><img src="https://img.shields.io/npm/v/vue-web-midi.svg" alt="Version"></a>
  <br>
</p>


## 使用
安装:

```
npm install vue-web-midi -S
```
引入:

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
## 可监听事件

+ midi-success 检测midi 设备插入成功
+ midi-fail 检测midi 设备插入失败
+ midi-change midi 设备变动
+ midi-input midi 进行输入