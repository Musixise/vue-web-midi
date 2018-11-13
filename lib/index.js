import { install } from './install'
import VERSION from './version'

export default class MIDIDevice {
    static install;
    static version;

    constructor (options){
      this.options = options
    }
}

MIDIDevice.install = install
MIDIDevice.version = VERSION
