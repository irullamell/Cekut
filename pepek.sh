#!/bin/bash

# Pterodactyl Panel Installation Script

echo "Starting Pterodactyl Panel installation..."

# Run the installer command
bash <(curl -s https://pterodactyl-installer.se)

# Auto-fill the installation prompts
echo "0"                   # Choose option
echo "irulldenji"          # MySQL root password
echo "irulldenji"          # Re-enter MySQL root password
echo "Asia/Jakarta"        # Set timezone
echo "irullgergaji@gmail.com" # Admin email
echo "irullgergaji@gmail.com" # Re-enter admin email
echo "admin"               # Admin username
echo "admin"               # Admin password
echo "admin"               # Re-enter admin password
echo "irullgergaji@gmail.com" # Email to associate with the admin account
echo "y"                   # Confirm SSL setup
echo "y"                   # Agree to SSL generation
echo "y"                   # Set up webserver
echo "y"                   # Set up firewall rules
echo "yes"                 # Agree to terms
echo "A"                   # Confirm option A
echo "c"                   # Confirm setting up MySQL
echo "y"                   # Confirm installation

# Notify completion
echo "Pterodactyl Panel installation complete."
