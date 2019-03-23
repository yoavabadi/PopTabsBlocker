# Pop-Tabs Blocker
This Chrome Extension blocks pop-ups that appear in new tabs on the chrome browser, regardless to the site's affiliate tech, in a semi-automated fashion, in the following way:

1. Install the extension from the Chrome Store.
1. In the tab of the target site (for example: [putlockers.co](https://ww1.putlockers.co/episode/it-s-always-sunny-in-philadelphia-2x9/?watching=dlIyfAXmEB)), press ADD.
1. Now the site's hostname is added to your storage's "watchlist".
1. On creation of a new tab, the extension checks if the parent-tab hostname is the same as the new tab's host.
1. If not, the tab is closed.
1. some delay is added for affiliate sites that changing there hostname (for example: [Putlocker.digital](https://putlocker.digital/all-tv-series)), and rechecked.
1. If you wish to remove the site from the watchlist, simply click the REMOVE button.


## Contributing

This project welcomes contributions from anyone and everyone,  of many forms.

Examples of contributions include:

* Code patches
* Documentation improvements
* Bug reports and patch reviews. 

Those contributions should be performed by [submitting a pull request](https://github.com/yoavabadi/PopTabsBlocker/pulls).

## Licensing
Licensed under the Apache License, Version 2.0 (the "License").
A copy of the license is available in the repository's [License.txt](/LICENSE) file.
