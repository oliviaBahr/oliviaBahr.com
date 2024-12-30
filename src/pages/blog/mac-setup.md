---
title: macOS Setup
date: 2024-12-29
description: Detailed setup for new MacOS installs
---

# OS

## Settings

`Accessibility > Trackpad Options > Dragging Style > Three Finger Drag`

`Accessibility > Double-click speed > 8`

`Trackpad > Point & Click > Tap to click > on`

`Trackpad > Scroll & Zoom > Natural scrolling > off`

`Trackpad > More Gestures > Swipe between fullscreen applications > Left or Right Four Fingers`

`Trackpad > More Gestures > Mission Control > Swipe up with four fingers`


## Commands


### Dock Spacers

```bash
# width = 1
defaults write com.apple.dock persistent-apps -array-add '{"tile-type"="spacer-tile";}';
```

```bash
# width = 1/2
defaults write com.apple.dock persistent-apps -array-add '{"tile-type"="small-spacer-tile";}';
```

### Dock AutoHide Delay

```bash
# time before animation starts
defaults write com.apple.dock autohide-delay -int 0
# length of animation
defaults write com.apple.dock autohide-time-modifier -float 0.7
```

## Apps
