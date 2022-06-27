#!/usr/bin/env bash

# React Native declares global types that interfere with @types/node and lib dom.
rm -f ./node_modules/@types/react-native/globals.d.ts || true
sed -i '' 's|/// <reference path="globals.d.ts" />||' ./node_modules/@types/react-native/index.d.ts || true

# Namespace the globals
sed -i '' 's|declare global|declare namespace IgnoreTheseGlobals|' ./node_modules/@types/react-native/index.d.ts || true
