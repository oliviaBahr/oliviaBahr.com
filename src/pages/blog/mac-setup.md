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



## Installs

### Shell
```bash
# oh-my-zsh
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
# brew
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

### Packages
```bash
# terminal utils
brew install bat bat-extras btop most zoxide fastfetch
brew install pass tldr mas trash
brew install tmux jandedobbeleer/oh-my-posh/oh-my-posh
# network, ssh, security
brew install nmap sshpass speedtest-cli
# dev
brew install cmake lazygit
# languages
brew install miniconda uv deno golang kotlin kdoctor
```

### Apps
```bash
brew install --cask zed cursor warp ghostty
brew install --cask nikitabobko/tap/aerospace
brew install --cask hiddenbar raycast
brew install --cask font-maple-mono-nf
```

```bash
mas lucky "RunCat"
mas lucky "Surfshark VPN"
```

## Aesthetics

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
