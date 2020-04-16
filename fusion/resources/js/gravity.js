/**
 * First we will load all of FusionCMS' JavaScript dependencies which
 * includes Vue and other libraries.
 */

import './bootstrap/'

import Fusion from './Fusion'

/**
 * Next, we create a fresh Fusion instance.
 */

window.Fusion = new Fusion(window.config)

window.addEventListener('DOMContentLoaded', function () {
    window.Fusion.boot()
})
