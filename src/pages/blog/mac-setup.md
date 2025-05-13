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

### Brew
```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
export PATH="/opt/homebrew/bin:$PATH"
```

### Basic Apps
```bash
brew install --cask arc ghostty gh raycast
```

### Pull dotfiles from github
```bash
gh auth login
```
```bash
cd $HOME
echo "/*" > .gitignore
git init -b main
git remote add origin https://github.com/oliviaBahr/HOME.git
gh repo sync
```

### SSH Keys

Generate and use new key
```bash
ssh-keygen -t ed25519 -C "EMAIL"
```
```bash
eval "$(ssh-agent -s)"
ssh-add --apple-use-keychain ~/.ssh/id_ed25519
```

Add to allowed signers
```bash
echo "$(git config user.name) <$(git config user.email)> $(cat ~/.ssh/id_ed25519.pub)" >> ~/.config/git/allowed_signers
```

Add to GitHub
```bash
# copy to clipboard
pbcopy < ~/.ssh/id_ed25519.pub
# open github Link
open -a "Arc" "https://github.com/settings/keys"
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
brew install bat bat-extras btop most zoxide fastfetch sl
brew install pass tldr mas trash
brew install tmux jandedobbeleer/oh-my-posh/oh-my-posh
# network
brew install nmap speedtest-cli
# dev
brew install git-lfs lazygit cmake
# languages
brew install miniconda uv
brew install deno npm pnpm
brew install golang
brew install kotlin kdoctor
```

### Apps


```bash
# keeb
brew install --cask karabiner-elements logitech-g-hub
brew install --cask nikitabobko/tap/aerospace
# system
brew install --cask displaylink monitorcontrol
brew install --cask hiddenbar raycast shottr
brew install --cask font-maple-mono-nf
# utils
brew install --cask appcleaner grandperspective
brew install --cask balenaetcher
brew install --cask surfshark
# browsers
brew install --cask arc google-chrome zen
# productivity & dev
brew install --cask obsidian zotero
brew install --cask zed cursor visual-studio-code
brew install --cask warp ghostty
brew install --cask claude chatgpt
# social & games
brew install --cask slack signal zoom
brew install --cask discord legcord
brew install --cask steam curseforge
```

```bash
mas lucky "RunCat"
```
```bash
https://skyloongtech.com/skyloong-keyboard-software/
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

### Hide Folders in Finder
```bash
chflags hidden ~/Library ~/Documents ~/Movies ~/Pictures ~/Music
```
