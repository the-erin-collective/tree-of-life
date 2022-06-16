import { NativeScriptConfig } from '@nativescript/core';

export default {
  id: 'org.solarpunkdev.treeoflife',
  appPath: 'app',
  appResourcesPath: 'App_Resources',
  android: {
    v8Flags: '--expose_gc',
    markingMode: 'none'
  }
} as NativeScriptConfig;