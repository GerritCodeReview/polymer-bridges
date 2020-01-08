This repository contains a code to provide compatibility layer
between Polymer 3 and Polymer 2. It allows to run Polymer 2 
application on top of Polymer 3 without changing a code.

The repository is added as a submodule to gerrit project;
polygerrit-ui/app/package.json references a local folder
(with submodule). 

folder will be removed after full switch from Polymer 2 to Polymer 3.

Some files have code related to google-closure-library, but it is not
necessary to use google-closure-library - the polymer/lib/utils/boot_bridge.js
file provides placoholders for it.

Note: it is expected, that this repository is used only during transition
period (Polymer 2 -> Polymer 3). After the transitition is complete (including Plugins),
the submodule will be removed from gerrit repository.