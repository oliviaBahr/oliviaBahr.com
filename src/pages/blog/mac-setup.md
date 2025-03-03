---
title: macOS Setup
date: 2024-12-29
description: Detailed setup for new MacOS installs
---


## Settings

`Accessibility > Trackpad Options > Dragging Style > Three Finger Drag`

`Accessibility > Double-click speed > 8`

`Trackpad > Point & Click > Tap to click > on`

`Trackpad > Scroll & Zoom > Natural scrolling > off`

`Trackpad > More Gestures > Swipe between fullscreen applications > Left or Right Four Fingers`

`Trackpad > More Gestures > Mission Control > Swipe up with four fingers`



## Initial Setup

### Setup for Setup

```bash
# brew
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
export PATH="/opt/homebrew/bin:$PATH"
# apps
brew install --cask arc ghostty gh
# github auth
gh auth login
```

### Pull dotfiles from github
```bash
cd $HOME
echo "/*" > .gitignore
git init -b main
git remote add origin https://github.com/oliviaBahr/HOME.git
gh repo sync
```

### Git config
```bash
git config --global user.name "Olivia Bahr"
git config --global user.email "ob.bahr@gmail.com"
git config --global init.defaultBranch main
git config --global pull.rebase true
git config --global push.autosetupremote true
git config --global core.excludesfile ~/.gitignore_global
```

### Shell
```bash
brew install nushell
sudo sh -c 'echo /opt/homebrew/bin/nu >> /etc/shells'
chsh -s /opt/homebrew/bin/nu
```
```bash
reboot
```


## Installs

### Packages
```bash
# terminal utils
brew install bat bat-extras btop most zoxide fastfetch
brew install pass tldr mas trash
brew install tmux jandedobbeleer/oh-my-posh/oh-my-posh
# network, ssh, security
brew install nmap speedtest-cli
brew install gh sshpass
# dev
brew install git-lfs lazygit cmake
# languages
brew install miniconda uv
brew install deno npm pnpm
brew install golang
brew install kotlin kdoctor
```

### Apps

[Display Link](https://www.synaptics.com/products/displaylink-graphics/downloads/macos)\
[Keyboard Driver](https://skyloong.vip/pages/skyloong-software)

```bash
# keeb
brew install --cask karabiner-elements logitech-g-hub
brew install --cask nikitabobko/tap/aerospace
# system
brew install --cask hiddenbar raycast shottr monitorcontrol
brew install --cask font-maple-mono-nf
# utils
brew install --cask appcleaner grandperspective
brew install --cask balenaetcher
brew install --cask surfshark
# browsers
brew install --cask arc google-chrome brave-browser
# productivity & dev
brew install --cask obsidian notion notion-calendar zotero
brew install --cask zed cursor warp ghostty
brew install --cask claude chatgpt
# social & other
brew install --cask discord slack signal zoom
brew install --cask steam
```

```bash
mas lucky "RunCat"
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
