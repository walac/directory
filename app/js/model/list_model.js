import { Model } from 'components/fxos-mvc/dist/mvc';

export default class ListModel extends Model {
  getAppList() {
    return {
      'http://fxos.github.io/sharing/dist/app/manifest.webapp': {
        manifestURL: 'http://fxos.github.io/sharing/dist/app/manifest.webapp',
        name: 'sharing',
        author: 'Doug Sherk',
        type: 'hosted',
        url: 'https://github.com/fxos/sharing',
        revision: 'e908d4eff5799b038fd318084254a8b93709bada'
      },
      'http://fxos.github.io/camera/dist/app/manifest.webapp': {
        manifestURL: 'http://fxos.github.io/camera/dist/app/manifest.webapp',
        name: 'camera',
        author: 'Justin D\'Arcangelo',
        type: 'hosted',
        url: 'https://github.com/fxos/camera',
        revision: '8b5a7d9061a0d0210f24ff253110a8ce935104ca'
      },
      'http://fxos.github.io/video/app/manifest.webapp': {
        manifestURL: 'http://fxos.github.io/video/app/manifest.webapp',
        name: 'video',
        author: 'Justin D\'Arcangelo',
        type: 'hosted',
        url: 'https://github.com/fxos/video',
        revision: 'b3c913669bc7039e980586bd9d319a0ca2ac6003'
      },
      'http://fxos.github.io/dialer/dist/app/manifest.webapp': {
        manifestURL: 'http://fxos.github.io/dialer/dist/app/manifest.webapp',
        name: 'dialer',
        author: 'Doug Sherk',
        type: 'hosted',
        url: 'https://github.com/fxos/dialer',
        revision: '835af6ccf608a51bc87711d1c40fc4f33a1fc12b'
      },
      'http://henretty.us/manifest.webapp': {
        manifestURL: 'http://henretty.us/manifest.webapp',
        name: 'clock',
        author: 'The Gaia Team',
        type: 'addon',
        url: 'https://github.com/mozilla-b2g/gaia/tree/apps/clock/',
        revision: '5f0dd37917c4a6d8fa8724715d4d3797419f9013'
      }
    };
  }
}
