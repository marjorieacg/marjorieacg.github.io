# For debian system
HUGO_VERSION=0.151.0
wget -O hugo.deb https://github.com/gohugoio/hugo/releases/download/v${HUGO_VERSION}/hugo_extended_${HUGO_VERSION}_linux-amd64.deb
sudo dpkg -i hugo.deb
hugo version # Should output 0.151.0-something