# MeterReader APP

## Project structure
We are following the folder-feature structure proposed by John Papa [here](https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md). Our subset of supported styles is found [here](https://sjsolutions.atlassian.net/wiki/display/SJS/Simple+Joy+Style+Guide) (requires confluence access).

* * *

## Gulp tasks of note
We have a few nice gulp tasks that you should keep in mind.
  - If you add a module with `bower install modulename --save`, just run `gulp index` after to automagically inject the script call into index.html. You will still need to add any modules to app.js to use them.

* * *

## i18n Support
### We are using these libs for i18n Support:
  - [angular-translate](https://github.com/angular-translate/angular-translate) is the main module. Here is the [guide.](https://angular-translate.github.io/docs/#/guide)
  - [angular-translate-static-files](https://github.com/angular-translate/bower-angular-translate-loader-static-files) for loading static files from the i18n folder
  - [messageformat.js](https://github.com/messageformat/messageformat.js) allows us to customize variables within our translation files
  - [angular-translate-interpolation-messageformat](https://github.com/angular-translate/bower-angular-translate-interpolation-messageformat) allows messageformat.js to be used with angular
  - [angular-i18n](http://www.mattzabriskie.com/blog/i18n-with-angular) for localized formatting of dates, numbers and currency.
  
### We are going to standardize on the following format for language keys:
  - `namespace.id_descriptive_name_with_underscores`
  - For example, `home.id_id`, `home.id_name`, `home.id_desc` for titles of 3 columns in a list view.
  - namespace should be used unless the key is going to be used in multiple scopes

### Of course, these are defined in json format, so the block in `www/i18n/en.json` might look like this:
  ```
  {
    "key_with_no_namespace": "value",
    "HOME": {
    "ID": "ID",
    "NAME": "NAME",
    "DESC": "DESC"
  },
    "some_other_namespace":{...},
  }
  ```
and in spanish (`www/i18n/es.json`), only the name value is actually different in this case...
  ```
  {
    "key_with_no_namespace": "el value",
    "HOME": {
    "ID": "ID",
    "NAME": "NOMBRE",
    "DESC": "DESC"
  },
    "some_other_namespace":{...},
  }
  ```

### In order to implement this in an html template you would add the `translate-namespace` directive to the top level element of the template and then add the `translate` directive to the elements that warrant translating within. For example...
```
<ion-view translate-namespace="home">
This sets up the namespace that all translate directives will use in the template
...
  <div>
    <a><span translate=".id_id">ID  </span></a>
    'home' is implicit, so we just reference the key with a '.' prefix to indicate we are using the namespace.
    <a><span translate=".id_name">NAME  </span></a>
    <a><span translate=".id_desc">DESC  </span></a>
  </div>
...
</ion-view>
```

### Currency can be formatted using angulars build in locale Support
```
<div>Salary {{ salary | currency }}</div>
```

* * *
 
## 3rd party libs
Links to docs for some libs we are using
 - [Ionic Material](https://github.com/jfbloom22/Ionic-Material)

* * *

## Cordova plugins
We are using [Ionic Native](https://github.com/driftyco/ionic-native) in this app in order to avoid deprecation in the near future. However, since this is still ionic 1, we should be able to reference the [ngCordova docs](http://ngcordova.com/docs/plugins/)

### Plugin docs links
 - [geolocation docs](http://ngcordova.com/docs/plugins/geolocation/)

### To install plugins
```
ionic plugin add ionic-plugin-keyboard
ionic plugin add cordova-plugin-console
ionic plugin add cordova-plugin-device
ionic plugin add cordova-plugin-splashscreen
ionic plugin add cordova-plugin-whitelist
ionic plugin add cordova-plugin-inappbrowser
ionic plugin add cordova-plugin-statusbar
ionic plugin add https://github.com/Wizcorp/phonegap-plugin-wizUtils
ionic plugin add cordova-plugin-geolocation
ionic plugin add cordova-plugin-camera
ionic plugin add https://github.com/MeterFeeder/meterfeeder-plugin-printer
ionic plugin add ionic-plugin-deploy
ionic plugin add printer_src/
ionic plugin add cordova-plugin-inappbrowser
ionic plugin add phonegap-plugin-barcodescanner
```

Add the bluetooth permission to the android manifest file:
```
<uses-permission android:name="android.permission.BLUETOOTH" />
```

### Build

 - ran into a manifest merge build issue... found fix [here](http://stackoverflow.com/questions/24506800/android-studio-gradle-icon-error-manifest-merger#24507129)


### Ionic Deploy

ionic io init // for setting the app id 84e4ec08
ionic upload  // for uploading app on ionic io with production mode
ionic upload --deploy staging  // for deploying with the staging mode


